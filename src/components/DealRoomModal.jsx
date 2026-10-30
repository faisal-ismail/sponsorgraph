import React, { useState } from 'react';
import { X, Mail, Mic, BarChart3, Copy, Check, Download, RefreshCw, Award, CheckCircle2 } from 'lucide-react';

export default function DealRoomModal({ isOpen, onClose, brand, creator, onRegenerate, isRegenerating }) {
  if (!isOpen || !brand) return null;

  const [activeTab, setActiveTab] = useState('email'); // 'email' | 'script' | 'proof'
  const [copiedSection, setCopiedSection] = useState(null);

  const handleCopy = (text, section) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const emailData = brand.cold_email || {
    to_role: 'VP of Global Brand Partnerships & CMO',
    subject: `Strategic Alliance Proposal: ${creator?.name || 'Creator'} × ${brand.name} (Qloo ${brand.affinity_score}% Affinity Overlap)`,
    body: `Dear ${brand.name} Global Marketing Team,\n\nI am presenting this partnership brief on behalf of ${creator?.name || 'the Creator'}.\n\nConventional agency outreach relies on crude keyword matching—which explains why generic campaigns suffer from audience ad-blindness. We conducted an empirical audience analysis grounded in Qloo's Cross-Domain Taste Graph.\n\nOur findings indicate an extraordinary ${brand.affinity_score}% cultural affinity match between our audience and ${brand.name}.\n\nOur subscribers are characterized by high latent affinity with entities like ${(creator?.seed_entities || []).map((s) => s.name).slice(0, 3).join(', ')}. They demonstrate strong willingness to pay for heirloom-grade design, materials, and engineering.\n\nLatent Affinity Bridge: ${brand.taste_bridge}\n\nProposed Flight:\n• Single-episode flagship integration showcasing ${brand.hero_product || 'the signature line'}.\n• Dedicated attribution funnel with dedicated landing destination.\n\nAre you available for a brief 10-minute executive briefing next week to review cohort telemetry and reserve Q4 inventory?\n\nSincerely,\nSponsorGraph Institutional Broker for ${creator?.name || 'Creator'}`
  };

  const scriptData = brand.ad_script || {
    hook: `Before examining today's architecture, I want to highlight an engineering partner making this deep-dive possible: ${brand.name}.`,
    product_spotlight: `If you have followed our channel, you know we never feature disposable, plastic peripherals. The craftsmanship behind ${brand.hero_product || 'this flagship collection'} from ${brand.name} represents true industrial refinement.`,
    call_to_action: `Experience real engineering at ${brand.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com with code CREATOR15 for 15% off and lifetime warranty backing.`,
    full_script: `[00:00 - 00:15] Contextual Hook: "Before we examine today's teardown, I want to address an engineering partner whose products we rely on daily: ${brand.name}."\n\n[00:15 - 00:45] Feature Demonstration: "Most market alternatives compromise on materials. With the ${brand.hero_product || 'flagship collection'}, the attention to tolerances, acoustic dampening, and modular ergonomics reflects genuine design excellence."\n\n[00:45 - 01:00] Conversion Directive: "Explore the collection at ${brand.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com with code CREATOR15 for guaranteed lifetime warranty support. Thank you to ${brand.name} for championing uncompromising build quality."`
  };

  const handleExportJson = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(
        JSON.stringify(
          {
            creator: creator?.name,
            brand: brand.name,
            affinity_score: brand.affinity_score,
            taste_bridge: brand.taste_bridge,
            cold_email: emailData,
            ad_script: scriptData,
            exported_at: new Date().toISOString()
          },
          null,
          2
        )
      );
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `SponsorGraph_Dossier_${brand.name.replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col m3-dialog-surface rounded-[28px] overflow-hidden">
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
                  {creator?.name || 'Creator'} × {brand.name}
                </h2>
                <span className="flex items-center gap-1 text-[11px] font-mono px-3 py-0.5 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xs">
                  <Award className="w-3.5 h-3.5" />
                  {brand.affinity_score}% Vector Overlap
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-purple-200/75 mt-0.5">
                Executive Deal Dossier • Hero SKU:{' '}
                <span className="text-purple-800 dark:text-purple-200 font-semibold">
                  {brand.hero_product || brand.category}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJson}
              className="p-2.5 rounded-full text-slate-600 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/60 border border-purple-200/70 dark:border-purple-500/30 transition"
              title="Export Dossier JSON"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full text-slate-600 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/60 border border-purple-200/70 dark:border-purple-500/30 transition"
              aria-label="Close Deal Dossier"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Unified Material 3 Segmented Pill Tabs */}
        <div className="px-6 py-3 border-b border-purple-100 dark:border-purple-500/20 bg-white dark:bg-[#161129]">
          <div className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200/60 dark:border-purple-500/25">
            <button
              onClick={() => setActiveTab('email')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'email'
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white shadow-sm'
                  : 'text-slate-600 dark:text-purple-200/80 hover:text-purple-900 dark:hover:text-white'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Outreach Memo (CMO)</span>
            </button>

            <button
              onClick={() => setActiveTab('script')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'script'
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white shadow-sm'
                  : 'text-slate-600 dark:text-purple-200/80 hover:text-purple-900 dark:hover:text-white'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>60s Native Copy Treatment</span>
            </button>

            <button
              onClick={() => setActiveTab('proof')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'proof'
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white shadow-sm'
                  : 'text-slate-600 dark:text-purple-200/80 hover:text-purple-900 dark:hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Attribution Matrix</span>
            </button>
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white dark:bg-[#161129]">
          {/* TAB 1: COLD EMAIL */}
          {activeTab === 'email' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-600 dark:text-purple-300 uppercase">
                  Target: {emailData.to_role || 'VP of Marketing & Global Partnerships'}
                </span>
                <button
                  onClick={() => handleCopy(`${emailData.subject}\n\n${emailData.body}`, 'email')}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/60 dark:hover:bg-purple-800/70 text-purple-900 dark:text-purple-100 border border-purple-200 dark:border-purple-500/40 transition"
                >
                  {copiedSection === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Memo</span>
                    </>
                  )}
                </button>
              </div>

              {/* Memo Frame */}
              <div className="m3-tonal rounded-2xl p-5 space-y-3 font-sans">
                <div className="pb-3 border-b border-purple-200/60 dark:border-purple-500/20">
                  <span className="text-xs font-mono text-slate-500 dark:text-purple-400">Subject: </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{emailData.subject}</span>
                </div>
                <div className="text-xs sm:text-sm font-mono text-slate-700 dark:text-purple-100/90 leading-relaxed whitespace-pre-wrap">
                  {emailData.body}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AD SCRIPT */}
          {activeTab === 'script' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-600 dark:text-purple-300 uppercase">
                  Native 60-Second Commercial Audio / Video Treatment
                </span>
                <button
                  onClick={() =>
                    handleCopy(
                      scriptData.full_script ||
                        `${scriptData.hook}\n\n${scriptData.product_spotlight}\n\n${scriptData.call_to_action}`,
                      'script'
                    )
                  }
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/60 dark:hover:bg-purple-800/70 text-purple-900 dark:text-purple-100 border border-purple-200 dark:border-purple-500/40 transition"
                >
                  {copiedSection === 'script' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Script</span>
                    </>
                  )}
                </button>
              </div>

              <div className="m3-tonal rounded-2xl p-5 space-y-4 font-mono text-xs">
                <div>
                  <span className="font-bold text-purple-700 dark:text-purple-300">[00:00 - 00:15] Contextual Hook:</span>
                  <p className="text-slate-800 dark:text-purple-100 mt-1.5 leading-relaxed p-4 rounded-xl m3-card-elevated">
                    "{scriptData.hook}"
                  </p>
                </div>

                <div>
                  <span className="font-bold text-violet-700 dark:text-violet-300">
                    [00:15 - 00:45] Value Demonstration ({brand.hero_product || brand.name}):
                  </span>
                  <p className="text-slate-800 dark:text-purple-100 mt-1.5 leading-relaxed p-4 rounded-xl m3-card-elevated">
                    "{scriptData.product_spotlight}"
                  </p>
                </div>

                <div>
                  <span className="font-bold text-indigo-700 dark:text-indigo-300">[00:45 - 01:00] Conversion Directive:</span>
                  <p className="text-slate-800 dark:text-purple-100 mt-1.5 leading-relaxed p-4 rounded-xl m3-card-elevated">
                    "{scriptData.call_to_action}"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ATTRIBUTION MATRIX */}
          {activeTab === 'proof' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl m3-tonal">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-900 dark:text-purple-200 block mb-3">
                  Taste Vector Triangulation
                </span>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl m3-card-elevated">
                  <div className="text-center sm:text-left">
                    <span className="text-[10px] text-slate-500 dark:text-purple-300/70 font-mono">
                      Audience Cultural Anchors
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                      {(creator?.seed_entities || []).map((s) => s.name).slice(0, 3).join(' • ')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-mono font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] px-4 py-1 rounded-full shadow-sm">
                      → {brand.affinity_score}% Vector Overlap →
                    </span>
                    <span className="text-[10px] font-mono text-purple-700 dark:text-purple-300 mt-1">
                      Qloo Latent Coordinate
                    </span>
                  </div>
                  <div className="text-center sm:text-right">
                    <span className="text-[10px] text-slate-500 dark:text-purple-300/70 font-mono">Aligned Brand</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                      {brand.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Economic Arbitrage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                <div className="p-5 rounded-2xl m3-elevated-trap">
                  <span className="text-[11px] text-rose-600 dark:text-rose-400 uppercase font-bold">
                    Heuristic Baseline CPM
                  </span>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white mt-1">$18.00 - $25.00</div>
                  <p className="text-xs text-slate-500 dark:text-rose-200/75 mt-1">
                    High ad fatigue and diminished click-through.
                  </p>
                </div>
                <div className="p-5 rounded-2xl m3-elevated-qloo">
                  <span className="text-[11px] text-purple-700 dark:text-purple-300 uppercase font-bold">
                    Grounded Target Yield
                  </span>
                  <div className="text-2xl font-bold text-purple-700 dark:text-purple-300 mt-1">
                    {brand.potential_cpm || '$85.00 - $115.00'}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-purple-200/75 mt-1">
                    +310% yield lift via high-relevance behavioral fit.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Unified Material 3 Dialog Footer */}
        <div className="p-5 border-t border-purple-100 dark:border-purple-500/20 bg-purple-50/40 dark:bg-purple-950/30 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-600 dark:text-purple-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>
              Target Host: <strong>sponsorgraph.sineix.com</strong>
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {onRegenerate && (
              <button
                onClick={() => onRegenerate(brand)}
                disabled={isRegenerating}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-white dark:bg-purple-900/60 hover:bg-purple-100 dark:hover:bg-purple-800/70 text-purple-900 dark:text-purple-100 border border-purple-200 dark:border-purple-500/35 transition"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRegenerating ? 'animate-spin text-purple-600' : ''}`} />
                <span>Re-Synthesize</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] hover:from-[#6d28d9] hover:to-[#4338ca] shadow-md shadow-purple-600/25 transition"
            >
              Close Dossier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
