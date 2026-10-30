import React from 'react';
import { Sun, Moon, HelpCircle } from 'lucide-react';

export default function Header({
  onOpenHelpModal,
  onResetPreset,
  theme,
  onToggleTheme
}) {
  return (
    <header className="sticky top-3 z-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-300">
      <div className="rounded-full border border-slate-200/80 dark:border-purple-500/20 bg-white/80 dark:bg-[#120c29]/80 backdrop-blur-xl px-5 sm:px-6 py-2.5 flex items-center justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_25px_-4px_rgba(0,0,0,0.4)]">
        {/* Brand Architecture with Bigger sglogo.png & App Summary */}
        <div
          className="flex items-center gap-3.5 cursor-pointer select-none group"
          onClick={onResetPreset}
          title="Reset to Benchmark Creator"
        >
          <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white dark:bg-purple-950/70 border border-purple-200/80 dark:border-purple-500/40 p-1.5 shadow-[0_4px_14px_-2px_rgba(124,58,237,0.18)] transition-all group-hover:scale-105 duration-200">
            <img
              src="/sglogo.png"
              alt="SponsorGraph Logo"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2.5">
            <span className="text-lg sm:text-xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              SponsorGraph
            </span>
            <span className="inline-flex items-center text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-500/35">
              AI Sponsorship Matcher for Creators & Collaborators
            </span>
          </div>
        </div>

        {/* Top App Bar Actions: ONLY Help & Guide + Light/Dark button */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Help & Guide Button */}
          <button
            onClick={onOpenHelpModal}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium text-slate-700 dark:text-purple-200 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-purple-950/50 hover:bg-slate-200/80 dark:hover:bg-purple-900/60 border border-slate-200/60 dark:border-purple-500/30 transition shadow-sm"
            title="Open Interactive Guide & Documentation"
          >
            <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Help & Guide</span>
          </button>

          {/* Theme Toggle (Dark / Bright) */}
          <button
            onClick={onToggleTheme}
            className="flex items-center justify-center p-2 rounded-full text-slate-700 dark:text-purple-200 hover:text-slate-950 dark:hover:text-white bg-slate-100/80 dark:bg-purple-950/50 hover:bg-slate-200/80 dark:hover:bg-purple-900/60 border border-slate-200/60 dark:border-purple-500/30 transition shadow-sm"
            title={theme === 'dark' ? 'Switch to Bright Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-purple-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
