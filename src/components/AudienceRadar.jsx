import React from 'react';
import { MapPin, Users, DollarSign, Film, Music, Tv, BookOpen, Compass, Sparkles } from 'lucide-react';

export default function AudienceRadar({ creatorData }) {
  if (!creatorData) return null;

  const getCategoryIcon = (category = '') => {
    const c = category.toLowerCase();
    if (c.includes('film') || c.includes('movie')) return Film;
    if (c.includes('music') || c.includes('audio') || c.includes('jazz')) return Music;
    if (c.includes('tv') || c.includes('series')) return Tv;
    if (c.includes('book') || c.includes('author') || c.includes('literature')) return BookOpen;
    return Compass;
  };

  return (
    <div className="m3-surface rounded-[28px] p-5 sm:p-7 transition-all duration-300">
      {/* Executive Creator Brief */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-purple-200/60 dark:border-purple-500/20">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <h2 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
              {creatorData.name || creatorData.creator_name}
            </h2>
            <span className="text-xs font-mono px-3 py-1 rounded-full font-semibold bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-500/30">
              {creatorData.category || creatorData.creator_niche}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-purple-200/80 mt-1.5 max-w-3xl leading-relaxed">
            {creatorData.audience_summary}
          </p>
        </div>

        {/* Demographic & Capital Index Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl m3-tonal text-xs">
            <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-slate-500 dark:text-purple-300/70">Demographic:</span>
            <span className="font-bold text-slate-900 dark:text-white">{creatorData.age_bracket || '18-34'}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl m3-tonal text-xs">
            <DollarSign className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-slate-500 dark:text-purple-300/70">Purchasing Power:</span>
            <span className="font-bold text-slate-900 dark:text-white">{creatorData.income_index || 'High Index'}</span>
          </div>
        </div>
      </div>

      {/* Cultural Seeds & Geographic Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-5">
        {/* Seeds Grid (2 Cols) */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-purple-100 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Resolved Qloo Cultural Anchors (Latent Taste Signals)
            </span>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-100/80 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 font-semibold">
              URN Deterministic
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(creatorData.seed_entities || []).map((seed, idx) => {
              const Icon = getCategoryIcon(seed.category);
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl m3-card-elevated"
                >
                  <div className="p-2.5 rounded-xl bg-purple-100/90 dark:bg-purple-900/60 border border-purple-200/70 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate font-display">
                        {seed.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 font-medium shrink-0">
                        {seed.category}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-purple-400/60 font-mono truncate block mt-1">
                      {seed.qloo_urn ? seed.qloo_urn : `urn:entity:anchor_${idx + 1}`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Geographic Concentration */}
        <div>
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-purple-100">
              Geographic Concentration
            </span>
            <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {(creatorData.top_cities || []).map((city, idx) => (
              <span
                key={idx}
                className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-full m3-tonal text-slate-800 dark:text-purple-200 shadow-2xs"
              >
                {city}
              </span>
            ))}
          </div>

          <div className="p-4 rounded-2xl m3-tonal text-xs text-slate-600 dark:text-purple-200/80 leading-relaxed">
            <strong className="text-slate-900 dark:text-white font-bold block mb-1">
              Behavioral Overlap Thesis:
            </strong>
            Standard keyword models match sponsors solely against surface video tags. Qloo's taste matrix isolates affinities rooted in audience lifestyle, aesthetics, and design identity.
          </div>
        </div>
      </div>
    </div>
  );
}
