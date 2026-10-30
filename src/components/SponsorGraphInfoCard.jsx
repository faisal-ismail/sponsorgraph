import React, { useState, useRef } from 'react';
import {
  Sparkles,
  HelpCircle,
  Database,
  Cpu,
  Key,
  ArrowRight,
  TrendingUp,
  Loader2,
  ExternalLink,
  Globe,
  MonitorSmartphone,
  Utensils,
  Brain,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { PRESETS } from '../data/presets';

export default function SponsorGraphInfoCard({
  onOpenHelpModal,
  onOpenApiModal,
  apiStatus,
  onSubmitCustom,
  isLoading,
  selectedPresetId,
  onSelectPreset
}) {
  const [customInput, setCustomInput] = useState('');
  const [isInputPulsing, setIsInputPulsing] = useState(false);
  const inputRef = useRef(null);

  const scrollToPipeline = () => {
    setTimeout(() => {
      const el = document.getElementById('how-ai-finds-sponsors');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const query = customInput.trim();
    if (query) {
      if (onSubmitCustom) {
        onSubmitCustom(query);
      }
      scrollToPipeline();
    } else {
      // If clicked without typing, use the active or default creator, trigger analysis, and scroll to the pipeline card
      const fallbackQuery = 'https://www.youtube.com/@Mrwhosetheboss';
      setCustomInput(fallbackQuery);
      if (onSubmitCustom) {
        onSubmitCustom(fallbackQuery);
      }
      scrollToPipeline();
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsInputPulsing(true);
      setTimeout(() => setIsInputPulsing(false), 1200);
    }
  };

  // Quick 1-click test chips including Instagram travel & cooking creators
  const quickChips = [
    { label: '✈️ @eva.zu.beck (IG Travel)', value: 'https://www.instagram.com/eva.zu.beck/' },
    { label: '🥐 @cedricgrolet (IG Cooking)', value: 'https://www.instagram.com/cedricgrolet/' },
    { label: '🌍 @karaandnate (IG Travel)', value: 'https://www.instagram.com/karaandnate/' },
    { label: '🍳 @halfbakedharvest (IG Cooking)', value: 'https://www.instagram.com/halfbakedharvest/' },
    { label: '💻 @mkbhd (Tech)', value: 'https://www.youtube.com/@mkbhd' }
  ];

  const handleQuickChip = (val) => {
    setCustomInput(val);
    if (onSubmitCustom && !isLoading) {
      onSubmitCustom(val);
    }
    scrollToPipeline();
  };

  const handleSelectPortfolioCard = (preset) => {
    setCustomInput(preset.url || preset.name);
    if (onSelectPreset) {
      onSelectPreset(preset.id);
    }
    scrollToPipeline();
  };

  const renderPresetIcon = (iconType) => {
    switch (iconType) {
      case 'tech':
        return <MonitorSmartphone className="w-5 h-5 text-purple-600 dark:text-purple-300" />;
      case 'culinary':
        return <Utensils className="w-5 h-5 text-violet-600 dark:text-violet-300" />;
      case 'audio':
        return <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] m3-surface p-6 sm:p-10 transition-all duration-300">
      {/* Subtle Material 3 Tonal Ambient Highlights */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-r from-violet-400/20 via-purple-500/20 to-fuchsia-400/20 dark:from-violet-600/20 dark:via-purple-600/25 dark:to-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        {/* Top Brand Pill with sglogo.png */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-50/90 dark:bg-purple-950/70 border border-purple-200/80 dark:border-purple-500/30 text-xs text-purple-950 dark:text-purple-200 shadow-sm">
          <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 bg-white p-0.5 border border-purple-200 shadow-2xs">
            <img src="/sglogo.png" alt="SponsorGraph" className="w-full h-full object-contain rounded-full" />
          </div>
          <span className="font-bold tracking-tight text-slate-900 dark:text-white">SponsorGraph</span>
          <span className="text-purple-400">•</span>
          <span className="font-mono font-medium text-purple-700 dark:text-purple-300">
            Smart Brand Deals for Content Creators & Collaborators
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          <span className="inline-block bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] text-white px-4 py-1 rounded-2xl -rotate-2 font-semibold shadow-lg shadow-purple-600/25 mr-2.5">
            High-Paying Brand Deals
          </span>
          for Content Creators & Collaborators
        </h1>

        {/* Clear, Simple App Summary */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-purple-200/80 max-w-3xl mx-auto leading-relaxed">
          Content creators and brand collaborators lose thousands in sponsorship revenue to repetitive, low-paying ads (VPNs, generic snacks). SponsorGraph analyzes what your audience genuinely loves — across movies, music, travel, food, and design — to connect you with premium brand collaborators that pay 3x to 5x higher rates.
        </p>

        {/* PRIMARY INGESTION URL BAR */}
        <div className="max-w-3xl mx-auto pt-2">
          <form
            onSubmit={handleSubmit}
            className={`group relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 sm:pl-5 rounded-3xl sm:rounded-full bg-white dark:bg-[#1e1636] border-2 transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(109,40,217,0.15)] ${
              isInputPulsing
                ? 'border-purple-600 ring-4 ring-purple-500/30 scale-[1.01]'
                : 'border-purple-200/90 dark:border-purple-500/40 focus-within:border-purple-600 dark:focus-within:border-purple-400 focus-within:ring-4 focus-within:ring-purple-500/15'
            }`}
          >
            <div
              className="flex items-center gap-3 flex-1 px-3 sm:px-0 py-1.5 sm:py-0 cursor-text"
              onClick={focusInput}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin text-purple-600 dark:text-purple-400 shrink-0" />
              ) : (
                <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" />
              )}
              <input
                ref={inputRef}
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Paste Content Creator URL (YouTube, Instagram, Podcasts) or handle (e.g. @mkbhd, @eva.zu.beck)..."
                disabled={isLoading}
                className="w-full bg-transparent text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-purple-300/50 focus:outline-none font-medium"
              />
            </div>

            {/* Action Button: Find Brand Deals (takes focus if empty, submits if filled) */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              title="Click to Find High-Paying Brand Deals"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl sm:rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-[#4f46e5] hover:from-[#6d28d9] hover:to-[#4338ca] shadow-md shadow-purple-600/25 hover:shadow-lg hover:shadow-purple-600/35 active:scale-[0.99] transition-all duration-200 shrink-0"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Matching Brand Collaborators...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Find Brand Deals</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick 1-Click Creator Examples including Instagram Travel & Cooking */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5 text-xs">
            <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-purple-300/70">
              Quick Ingest Examples:
            </span>
            {quickChips.map((chip) => (
              <button
                key={chip.label}
                type="button"
                disabled={isLoading}
                onClick={() => handleQuickChip(chip.value)}
                className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/60 dark:hover:bg-purple-900/70 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-500/30 transition shadow-2xs hover:scale-105 active:scale-95"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* QUICK CREATOR PORTFOLIO CARDS (Integrated directly into Quick Ingestion) */}
        <div className="pt-2 text-left">
          <div className="flex items-center justify-between mb-3 text-xs font-mono">
            <span className="font-bold uppercase tracking-wider text-purple-900 dark:text-purple-200 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></span>
              Select Featured Benchmark Content Creator:
            </span>
            <span className="text-slate-500 dark:text-purple-300/70 hidden sm:inline">
              Pre-computed 1-click verified brand match portfolios
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {PRESETS.map((preset) => {
              const isSelected = selectedPresetId === preset.id;
              const topBrand = preset.qloo_sponsors?.[0];

              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPortfolioCard(preset)}
                  disabled={isLoading}
                  className={`group flex items-start gap-3.5 p-4 text-left rounded-2xl transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-br from-purple-50 via-white to-indigo-50/80 dark:from-purple-950/90 dark:via-[#22183c] dark:to-indigo-950/60 border-2 border-purple-600 dark:border-purple-400 shadow-[0_12px_28px_-6px_rgba(124,58,237,0.22)] -translate-y-0.5'
                      : 'm3-card-elevated hover:-translate-y-0.5'
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
                      renderPresetIcon(preset.icon_type)
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

        {/* Action Buttons Row: Help & Examples, Qloo, Gemini, API Credentials */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-2">
          {/* Help & Examples Button */}
          <button
            onClick={onOpenHelpModal}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-purple-100 shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <HelpCircle className="w-4 h-4 text-purple-400 dark:text-purple-600" />
            <span>Help & Examples</span>
          </button>

          {/* Qloo Taste Graph Button */}
          <a
            href="https://qloo.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-purple-950 dark:text-purple-100 bg-purple-100/85 hover:bg-purple-200/80 dark:bg-purple-900/50 dark:hover:bg-purple-800/60 border border-purple-200 dark:border-purple-500/35 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
            title="Powered by Qloo's 575M+ Entity Cross-Domain Taste Graph"
          >
            <Database className="w-4 h-4 text-purple-600 dark:text-purple-300" />
            <span>Qloo Taste Graph</span>
            <ExternalLink className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
          </a>

          {/* Google Gemini Button */}
          <a
            href="https://ai.google.dev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-indigo-950 dark:text-indigo-100 bg-indigo-100/85 hover:bg-indigo-200/80 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/70 border border-indigo-200 dark:border-indigo-500/35 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
            title="Powered by Google Gemini 2.5 Flash Generative Engine"
          >
            <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-300" />
            <span>Google Gemini 2.5</span>
            <ExternalLink className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
          </a>

          {/* API Keys Configuration Button */}
          <button
            onClick={onOpenApiModal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 dark:text-purple-200 bg-white hover:bg-purple-50 dark:bg-[#1e1636] dark:hover:bg-purple-950/80 border border-purple-200/90 dark:border-purple-500/30 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
            title="Configure Qloo & Gemini API Keys"
          >
            <Key className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>API Credentials</span>
            <span
              className={`w-2 h-2 rounded-full ${
                apiStatus?.hasCustomKeys ? 'bg-emerald-500' : 'bg-purple-400'
              }`}
            />
          </button>
        </div>

        {/* How It Works Section: Simple, Clear Language */}
        <div className="pt-6 sm:pt-8 border-t border-purple-200/60 dark:border-purple-500/20 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-900 dark:text-purple-200">
              How SponsorGraph Works • 3 Simple Steps
            </span>
            <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-medium">
              Zero Generic Ads • 575M+ Cultural Taste Graph
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl m3-card-elevated space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-bold">
                  01 • Analyze Content Creator
                </span>
                <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-300">
                  <Cpu className="w-4 h-4" />
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Audience Taste Extraction
              </h4>
              <p className="text-xs text-slate-600 dark:text-purple-200/75 leading-relaxed">
                Paste any YouTube, Instagram, or podcast link. Our AI decodes what your community truly enjoys in cinema, music, dining, travel, and design.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl m3-card-elevated space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold">
                  02 • Match Brand Collaborators
                </span>
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-300">
                  <Database className="w-4 h-4" />
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Cross-Domain Affinity Matching
              </h4>
              <p className="text-xs text-slate-600 dark:text-purple-200/75 leading-relaxed">
                Queries Qloo's 575M+ entity database to discover premium brand collaborators your fans already love, completely bypassing boring generic ads.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl m3-card-elevated space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-bold">
                  03 • Pitch & Close Brand Deals
                </span>
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-300">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Ready-to-Send Sponsor Pitches
              </h4>
              <p className="text-xs text-slate-600 dark:text-purple-200/75 leading-relaxed">
                Instantly get executive pitch emails to brand marketing directors, custom 60-second host-read scripts, and $70–$155 CPM sponsorship proposals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
