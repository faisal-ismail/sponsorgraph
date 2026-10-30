import React from 'react';
import { MonitorSmartphone, Utensils, Brain, Play, CheckCircle2 } from 'lucide-react';
import { PRESETS } from '../data/presets';

export default function PresetBar({ selectedPresetId, onSelectPreset, isLoading }) {
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'tech':
        return <MonitorSmartphone className="w-5 h-5 text-purple-600 dark:text-purple-300" />;
      case 'culinary':
        return <Utensils className="w-5 h-5 text-violet-600 dark:text-violet-300" />;
      case 'audio':
        return <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />;
      default:
        return <Play className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <div className="m3-surface rounded-[28px] p-5 sm:p-6 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-purple-100">
            1-Click Benchmark Creator Portfolios
          </span>
        </div>
        <span className="text-xs text-slate-500 dark:text-purple-300/70 font-mono">
          Ground-truth vectors pre-verified via Qloo REST API
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PRESETS.map((preset) => {
          const isSelected = selectedPresetId === preset.id;
          const topBrand = preset.qloo_sponsors?.[0];
          return (
            <button
              key={preset.id}
              onClick={() => onSelectPreset(preset.id)}
              disabled={isLoading}
              className={`group flex items-start gap-3.5 p-4 text-left rounded-2xl transition-all duration-200 ${
                isSelected
                  ? 'bg-gradient-to-br from-purple-50 via-white to-indigo-50/70 dark:from-purple-950/90 dark:via-[#22183c] dark:to-indigo-950/60 border-2 border-purple-600 dark:border-purple-400 shadow-[0_12px_28px_-6px_rgba(124,58,237,0.22)] -translate-y-0.5'
                  : 'm3-card-elevated'
              } ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
            >
              <div
                className={`p-3 rounded-2xl shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'bg-purple-50 dark:bg-purple-950/70 border border-purple-200/70 dark:border-purple-500/30'
                }`}
              >
                {isSelected ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  renderIcon(preset.icon_type)
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 uppercase font-bold">
                    [{preset.ticker || 'PORT'}]
                  </span>
                  {isSelected ? (
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-600 text-white font-semibold shadow-2xs">
                      Active Portfolio
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100/80 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 font-semibold">
                      {topBrand?.potential_cpm || '$85+ CPM'}
                    </span>
                  )}
                </div>

                <h3
                  className={`text-sm sm:text-base font-bold truncate mt-1 font-display ${
                    isSelected
                      ? 'text-purple-950 dark:text-white'
                      : 'text-slate-900 dark:text-slate-100 group-hover:text-purple-700 dark:group-hover:text-purple-300'
                  }`}
                >
                  {preset.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-purple-200/75 truncate mt-0.5">
                  {preset.category}
                </p>

                <p className="text-[10px] font-mono text-slate-400 dark:text-purple-400/60 truncate mt-1.5">
                  Top Cohort: {preset.top_cities.slice(0, 3).join(' • ')}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
