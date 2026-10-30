import React, { useState } from 'react';
import { X, Key, Check, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ApiSettingsModal({ isOpen, onClose, apiKeys, onSaveApiKeys }) {
  if (!isOpen) return null;

  const [qlooKey, setQlooKey] = useState(apiKeys.qloo || '');
  const [geminiKey, setGeminiKey] = useState(apiKeys.gemini || '');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    onSaveApiKeys({
      qloo: qlooKey.trim(),
      gemini: geminiKey.trim()
    });
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 900);
  };

  const handleClear = () => {
    setQlooKey('');
    setGeminiKey('');
    onSaveApiKeys({ qloo: '', gemini: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl flex flex-col m3-dialog-surface rounded-[28px] overflow-hidden">
        {/* Top Material 3 Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#4f46e5]" />

        {/* Unified Material 3 Dialog Header */}
        <div className="p-5 sm:p-6 border-b border-purple-100 dark:border-purple-500/20 bg-purple-50/40 dark:bg-purple-950/30 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-purple-950/80 border border-purple-200 dark:border-purple-500/30 p-1.5 shadow-sm flex items-center justify-center shrink-0">
              <img src="/sglogo.png" alt="SponsorGraph" className="w-full h-full object-contain rounded-xl" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h2 className="text-lg sm:text-xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
                  API Authentication Gateway
                </h2>
                <span className="flex items-center gap-1 text-[11px] font-mono px-3 py-0.5 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xs">
                  <Key className="w-3 h-3" />
                  Credentials
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-purple-200/75 mt-0.5">
                Configure Qloo Hackathon & Google Gemini 2.5 Flash Endpoints
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full text-slate-600 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/60 border border-purple-200/70 dark:border-purple-500/30 transition"
            aria-label="Close API Settings"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Unified Material 3 Dialog Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-5 bg-white dark:bg-[#161129]">
          <div className="p-4 rounded-2xl m3-tonal text-xs text-slate-700 dark:text-purple-200">
            <p className="font-bold font-mono flex items-center gap-1.5 mb-1 text-slate-900 dark:text-white">
              <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Active Telemetry & Zero-Configuration Presets
            </p>
            <p className="text-xs text-slate-600 dark:text-purple-200/80 leading-relaxed">
              SponsorGraph operates out of the box with verified benchmark portfolios. Supplying personal API keys routes live unlisted queries directly through Qloo's{' '}
              <code className="text-purple-700 dark:text-purple-300 font-semibold">/search</code> and{' '}
              <code className="text-purple-700 dark:text-purple-300 font-semibold">/v2/insights</code> endpoints.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl m3-card-elevated">
              <label className="block text-xs font-mono font-bold text-slate-900 dark:text-purple-100 mb-2">
                Qloo Hackathon API Key (<span className="text-purple-600 dark:text-purple-400">X-Api-Key</span>)
              </label>
              <input
                type="password"
                value={qlooKey}
                onChange={(e) => setQlooKey(e.target.value)}
                placeholder="Paste Qloo API Key..."
                className="w-full px-4 py-2.5 bg-purple-50/60 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 rounded-full text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
              <span className="text-[11px] text-slate-500 dark:text-purple-300/65 mt-2 block font-mono">
                Target: <span className="text-purple-700 dark:text-purple-300 font-semibold">https://hackathon.api.qloo.com</span>
              </span>
            </div>

            <div className="p-4 rounded-2xl m3-card-elevated">
              <label className="block text-xs font-mono font-bold text-slate-900 dark:text-purple-100 mb-2">
                Google Gemini API Key (<span className="text-indigo-600 dark:text-indigo-400">gemini-2.5-flash</span>)
              </label>
              <input
                type="password"
                value={geminiKey}
                onChange={(e) => setGeminiKey(e.target.value)}
                placeholder="Paste Google AI Studio Key..."
                className="w-full px-4 py-2.5 bg-purple-50/60 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 rounded-full text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
              <span className="text-[11px] text-slate-500 dark:text-purple-300/65 mt-2 block font-mono">
                Generates latent seed extraction and B2B outreach scripts.
              </span>
            </div>
          </div>

          {/* Unified Material 3 Dialog Footer */}
          <div className="pt-4 border-t border-purple-100 dark:border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
            <button
              type="button"
              onClick={handleClear}
              className="text-xs font-mono font-semibold text-rose-600 dark:text-rose-400 hover:underline"
            >
              Reset to Defaults
            </button>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900/70 text-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-500/30 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] hover:from-[#6d28d9] hover:to-[#4338ca] shadow-md shadow-purple-600/25 transition"
              >
                {isSaved ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Commit Credentials</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
