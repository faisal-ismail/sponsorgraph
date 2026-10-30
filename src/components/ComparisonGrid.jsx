import React from 'react';
import { ShieldAlert, ArrowRight, TrendingUp, Award, Zap, BarChart2, Sparkles, AlertOctagon } from 'lucide-react';

export default function ComparisonGrid({ genericSponsors = [], qlooSponsors = [], onOpenDealRoom }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start transition-all duration-300">
      {/* LEFT ELEVATED CONTAINER DIV: Heuristic Keyword Trap (5 cols) */}
      <div className="lg:col-span-5 m3-elevated-trap rounded-[28px] p-6 sm:p-7 relative overflow-hidden transition-all duration-300">
        {/* Top Material Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400" />

        {/* Section Header */}
        <div className="pb-5 mb-5 border-b border-rose-200/70 dark:border-rose-500/25">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-2xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/50 shadow-xs">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">
                  Standard LLM Output
                </span>
                <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                  Heuristic Keyword Trap (Standard Baseline)
                </h3>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/50 font-bold uppercase shrink-0">
              Depressed Yield
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-rose-200/75 leading-relaxed">
            Standard models match sponsors via naive semantic proximity (e.g. "Tech" → "VPN"). Result: Acute viewer ad fatigue, brand blindness, and commoditized CPMs.
          </p>
        </div>

        {/* Elevated Generic Sponsor Cards */}
        <div className="flex flex-col gap-3.5">
          {genericSponsors.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1f1424] border border-rose-200/75 dark:border-rose-500/25 shadow-[0_4px_14px_-2px_rgba(225,29,72,0.07)] hover:-translate-y-1 hover:shadow-[0_12px_26px_-4px_rgba(225,29,72,0.14)] transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition font-display">
                    {item.name}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-rose-300/60">
                    {item.category || 'Commodity Category'}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 uppercase">
                  <AlertOctagon className="w-3 h-3" />
                  {item.fatigue_level || 'High'} Fatigue
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3.5">
                {item.reason}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-rose-100 dark:border-rose-500/15 text-xs font-mono">
                <span className="text-slate-400 dark:text-slate-500">Benchmark Yield:</span>
                <span className="text-rose-600 dark:text-rose-400 font-bold">
                  {item.estimated_cpm || '$18 - $25 CPM'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT ELEVATED CONTAINER DIV: Cross-Domain Behavioral Alliances (7 cols) */}
      <div className="lg:col-span-7 m3-elevated-qloo rounded-[28px] p-6 sm:p-7 relative overflow-hidden transition-all duration-300">
        {/* Top Material Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#4f46e5]" />

        {/* Section Header */}
        <div className="pb-5 mb-5 border-b border-purple-200/75 dark:border-purple-500/25">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-2xl bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/40 shadow-xs">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 block">
                  Qloo /v2/insights Discovery
                </span>
                <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white">
                  Cross-Domain Behavioral Alliances (Qloo Taste Graph)
                </h3>
              </div>
            </div>
            <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold uppercase shadow-sm shrink-0">
              Latent Resonance
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-purple-200/80 leading-relaxed">
            Autonomous discovery mapped across lifestyle, industrial design, gastronomy & audio. Behavioral overlap delivers organic narrative fit, 3x conversion lift, and premium pricing leverage.
          </p>
        </div>

        {/* Elevated Qloo Grounded Brand Cards */}
        <div className="flex flex-col gap-4">
          {qlooSponsors.map((brand, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl m3-card-elevated group relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition">
                      {brand.name}
                    </h4>
                    <span className="text-[11px] px-3 py-0.5 rounded-full font-mono font-semibold bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-500/30">
                      {brand.category}
                    </span>
                  </div>
                  {brand.hero_product && (
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-purple-200/85 mt-1.5">
                      Hero Focus: <span className="text-purple-700 dark:text-purple-300 font-semibold">{brand.hero_product}</span>
                    </p>
                  )}
                </div>

                {/* Affinity Metric Badge */}
                <div className="flex items-center sm:flex-col sm:items-end gap-1.5 bg-purple-50 dark:bg-purple-950/70 px-4 py-2 rounded-2xl border border-purple-200/80 dark:border-purple-500/35 font-mono shadow-2xs shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-700 to-indigo-600 dark:from-purple-300 dark:to-indigo-300 bg-clip-text text-transparent">
                      {brand.affinity_score}%
                    </span>
                  </div>
                  <span className="text-[10px] text-purple-800/70 dark:text-purple-300/70 font-semibold uppercase tracking-wider">
                    Qloo Affinity Index
                  </span>
                </div>
              </div>

              {/* Latent Affinity Bridge Tonal Box */}
              <div className="mb-4 p-4 rounded-2xl m3-tonal">
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-900 dark:text-purple-200">
                    The Latent Affinity Bridge
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-purple-100/90 leading-relaxed">
                  {brand.taste_bridge || brand.why_qloo}
                </p>
              </div>

              {/* Economic Arbitrage & CTA Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3.5 border-t border-purple-100 dark:border-purple-500/20">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-slate-500 dark:text-purple-300/70">Target Yield:</span>
                  <span className="font-bold text-purple-700 dark:text-purple-300 text-sm">
                    {brand.potential_cpm || '$85 - $115 CPM'}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 font-semibold">
                    +310% Arbitrage
                  </span>
                </div>

                <button
                  onClick={() => onOpenDealRoom(brand)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-[#4f46e5] hover:from-[#6d28d9] hover:to-[#4338ca] shadow-md shadow-purple-600/25 hover:shadow-lg hover:shadow-purple-600/35 active:scale-[0.99] transition-all duration-200"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Deal Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
