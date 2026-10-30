<?php
// SponsorGraph API Configuration & CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, X-Qloo-Key, X-Gemini-Key");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Error handling: log errors without crashing output stream
@ini_set('display_errors', '0');
@ini_set('log_errors', '1');
error_reporting(E_ALL);

// Support loading from local .env if present
$envPaths = [
    __DIR__ . '/.env',
    __DIR__ . '/../.env',
    __DIR__ . '/../../.env',
    dirname(__DIR__, 1) . '/.env',
    dirname(__DIR__, 2) . '/.env'
];

foreach ($envPaths as $envFile) {
    if (file_exists($envFile) && is_readable($envFile)) {
        $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $line = trim($line);
            if (empty($line) || strpos($line, '#') === 0) continue;
            $parts = explode('=', $line, 2);
            if (count($parts) === 2) {
                $k = trim($parts[0]);
                $v = trim($parts[1]);
                if (!getenv($k)) {
                    putenv("$k=$v");
                    $_ENV[$k] = $v;
                }
            }
        }
        break;
    }
}

// Extract headers across different web servers (LiteSpeed, Apache, Nginx)
$requestHeaders = function_exists('getallheaders') ? getallheaders() : [];
$headerQloo = $_SERVER['HTTP_X_QLOO_KEY'] 
    ?? $requestHeaders['X-Qloo-Key'] 
    ?? $requestHeaders['x-qloo-key'] 
    ?? '';

$headerGemini = $_SERVER['HTTP_X_GEMINI_KEY'] 
    ?? $requestHeaders['X-Gemini-Key'] 
    ?? $requestHeaders['x-gemini-key'] 
    ?? '';

// API Keys: Header > getenv() > Config Default
$DEFAULT_QLOO_KEY = '';
$DEFAULT_GEMINI_KEY = '';

$QLOO_API_KEY = !empty($headerQloo) 
    ? trim($headerQloo) 
    : (getenv('QLOO_API_KEY') ?: $DEFAULT_QLOO_KEY);

// Hackathon Base URL per https://docs.qloo.com/reference/qloo-llm-hackathon-developer-guide
$QLOO_BASE_URL = 'https://hackathon.api.qloo.com';

$GEMINI_API_KEY = !empty($headerGemini) 
    ? trim($headerGemini) 
    : (getenv('GEMINI_API_KEY') ?: $DEFAULT_GEMINI_KEY);

$GEMINI_MODEL = 'gemini-2.5-flash';

// Multi-model fallback cascade to prevent per-model Free Tier 429 quota exhaustion
$GEMINI_FALLBACK_MODELS = [
    'gemini-2.5-flash-lite',
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-3.5-flash',
    'gemini-2.5-flash'
];

/**
 * Resilient Gemini JSON generator with automatic model failover on 429 / 503 / timeout
 */
function callGeminiJson($prompt, $apiKey, &$usedModel = null) {
    global $GEMINI_FALLBACK_MODELS;
    if (empty($apiKey) || $apiKey === 'DEMO_GEMINI_KEY') {
        return null;
    }

    foreach ($GEMINI_FALLBACK_MODELS as $model) {
        try {
            $url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key=" . urlencode($apiKey);
            $payload = [
                "contents" => [["parts" => [["text" => $prompt]]]],
                "generationConfig" => [
                    "responseMimeType" => "application/json",
                    "temperature" => 0.35
                ]
            ];
            if (strpos($model, '2.5-flash') !== false && strpos($model, 'lite') === false) {
                $payload["generationConfig"]["thinkingConfig"] = ["thinkingBudget" => 0];
            }

            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
            curl_setopt($ch, CURLOPT_TIMEOUT, 7);
            curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

            $raw = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);

            if ($httpCode === 200 && !empty($raw)) {
                $parsed = json_decode($raw, true);
                $text = $parsed['candidates'][0]['content']['parts'][0]['text'] ?? '';
                if (!empty($text)) {
                    // Strip markdown code fences if present
                    $text = preg_replace('/^```(?:json)?\s*|\s*```$/i', '', trim($text));
                    $decoded = json_decode($text, true);
                    if (is_array($decoded) && !empty($decoded)) {
                        $usedModel = $model;
                        return $decoded;
                    }
                }
            }
        } catch (\Throwable $e) {
            continue;
        }
    }

    return null;
}

// Helper for sending JSON responses
function sendJsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit();
}
