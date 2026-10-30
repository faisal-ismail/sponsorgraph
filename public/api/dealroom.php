<?php
@set_time_limit(90);
@ini_set('max_execution_time', '90');
ignore_user_abort(true);

require_once __DIR__ . '/config.php';

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true) ?? [];

$creatorName = $data['creator_name'] ?? 'The Creator';
$creatorNiche = $data['creator_niche'] ?? 'Creator Media';
$brandName = $data['brand_name'] ?? 'Peak Design';
$heroProduct = $data['hero_product'] ?? 'Signature Line';
$affinityScore = $data['affinity_score'] ?? 95;
$tasteBridge = $data['taste_bridge'] ?? 'Deep cultural resonance between audience aesthetic values and brand engineering.';
$seedEntities = $data['seed_entities'] ?? ['Black Mirror', 'Formula 1'];
$seedsText = is_array($seedEntities) ? implode(', ', $seedEntities) : (string)$seedEntities;

$dealPrompt = "You are SponsorGraph, an elite autonomous sponsorship agent.
Generate a high-converting sponsorship deal pack for creator '{$creatorName}' ({$creatorNiche}) partnering with '{$brandName}' for their hero product: '{$heroProduct}'.
Data points to leverage:
- Qloo Cross-Domain Affinity Score: {$affinityScore}%
- Cultural Seeds in the audience graph: {$seedsText}
- Taste Bridge: {$tasteBridge}

Write two distinct assets:
1. 'cold_email': A concise, data-driven B2B cold outreach email to the VP of Marketing / Head of Partnerships at {$brandName}. Must cite the {$affinityScore}% Qloo behavioral affinity score and explain why traditional tech/niche keywords fail while their shared cultural taste with {$seedsText} creates 3x higher conversion.
2. 'ad_script': A compelling 60-second host-read native sponsorship script written in {$creatorName}'s authentic cadence. Include hook, pain point, product highlight, and unique promo offer.

Return strictly valid JSON matching this schema:
{
  \"cold_email\": {
    \"subject\": \"...\",
    \"to_role\": \"VP of Global Brand Partnerships & Marketing\",
    \"body\": \"...\"
  },
  \"ad_script\": {
    \"hook\": \"...\",
    \"product_spotlight\": \"...\",
    \"call_to_action\": \"...\",
    \"full_script\": \"...\"
  }
}";

$usedModel = null;
$generatedDeal = callGeminiJson($dealPrompt, $GEMINI_API_KEY, $usedModel);

// Fallback high-caliber copywriting if Gemini API times out or unavailable
if (!$generatedDeal || empty($generatedDeal['cold_email'])) {
    $generatedDeal = [
        "cold_email" => [
            "subject" => "Partnership Proposal: {$creatorName} × {$brandName} (Qloo {$affinityScore}% Cultural Affinity Index)",
            "to_role" => "VP of Global Brand Partnerships / CMO",
            "body" => "Hi {$brandName} Partnerships Team,\n\nI’m reaching out on behalf of {$creatorName} ({$creatorNiche}).\n\nMost brand partnership teams rely on shallow keyword matches—which is why your competitors waste budget on repetitive, fatigued YouTube tech reads. We took an agentic, data-driven approach using Qloo’s Cross-Domain Taste Graph.\n\nOur audience behavioral intelligence shows an extraordinary {$affinityScore}% affinity match with {$brandName}. Our viewers don’t just watch videos; their cultural identity is defined by entities like {$seedsText}. That exact mindset is why {$heroProduct} solves their daily friction.\n\nKey Partnership Highlights:\n• Qloo Taste Graph Affinity: {$affinityScore}%\n• Cultural Bridge: {$tasteBridge}\n• Proposed Campaign: Exclusive episode integration with bespoke visual cinematic B-roll featuring the {$heroProduct}.\n\nAre you open to a brief 10-minute sync next Tuesday at 2 PM EST to look at our audience cohort breakdown and reserve Q4 inventory?\n\nBest regards,\nAgent SponsorGraph for {$creatorName}"
        ],
        "ad_script" => [
            "hook" => "Before we get into today's breakdown, a quick shoutout to our sponsor for today's episode: {$brandName}.",
            "product_spotlight" => "If you follow my channel, you know I obsess over quality and authentic craftsmanship. Most gear out there feels generic and disposable. But the team at {$brandName} built {$heroProduct} with uncompromising precision. It's the exact setup we rely on every single day.",
            "call_to_action" => "If you care about products that actually deliver, head over to " . strtolower(preg_replace('/[^a-z0-9]/i', '', $brandName)) . ".com/sponsorgraph or click the link down below in the description to get 15% off your order with code CREATOR15.",
            "full_script" => "[00:00 - 00:15] Hook: \"Before we dive into today's episode, I want to highlight a partner that genuinely elevates our daily workflow: {$brandName}.\"\n\n[00:15 - 00:45] Value Prop & Hero Feature: \"Look, most alternatives cut corners. But with {$heroProduct}, the attention to detail is remarkable. {$tasteBridge}\"\n\n[00:45 - 01:00] Call to Action: \"Upgrade your setup today. Tap the top link in the description and use promo code CREATOR15 for 15% off with {$brandName}.\""
        ]
    ];
}

sendJsonResponse([
    'success' => true,
    'brand_name' => $brandName,
    'hero_product' => $heroProduct,
    'affinity_score' => $affinityScore,
    'taste_bridge' => $tasteBridge,
    'cold_email' => $generatedDeal['cold_email'],
    'ad_script' => $generatedDeal['ad_script'],
    'model_used' => $usedModel ?: $GEMINI_MODEL
]);
