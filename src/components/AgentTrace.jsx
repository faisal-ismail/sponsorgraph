import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronUp,
  Layers,
  Search,
  Compass,
  FileText,
  Binary,
  ShieldCheck,
  Loader2,
  Radio,
  RotateCcw
} from 'lucide-react';

export default function AgentTrace({
  currentStep,
  traceData,
  rawPayloads,
  isLoading
}) {
  const [isPayloadOpen, setIsPayloadOpen] = useState(false);

  const steps = [
    {
      num: 1,
      code: 'ANALYZE',
      title: 'Analyze Creator',
      system: 'Creator Content Reader',
      icon: Search,
      activeMsg: 'Reading creator videos, topics, and audience engagement signals...',
      desc: 'Scans content creator profile, recent topics, and audience tone.'
    },
    {
      num: 2,
      code: 'EXTRACT',
      title: 'Audience Interests',
      system: 'AI Cultural Analysis',
      icon: Binary,
      activeMsg: 'Identifying 5 core audience interests across movies, music, design & literature...',
      desc: 'Discovers the genuine cultural interests of the creator’s audience.'
    },
    {
      num: 3,
      code: 'VERIFY',
      title: 'Verify Taste Signals',
      system: '575M+ Cultural Database',
      icon: Layers,
      activeMsg: 'Matching audience interests with verified cultural database entities...',
      desc: 'Validates real-world audience taste across global cultural databases.'
    },
    {
      num: 4,
      code: 'MATCH',
      title: 'Match Brand Sponsors',
      system: 'Qloo Taste Intelligence',
      icon: Compass,
      activeMsg: 'Finding premium brand collaborators whose customers love the same things...',
      desc: 'Finds high-paying brand collaborators with strong audience overlap.'
    },
    {
      num: 5,
      code: 'PITCH',
      title: 'Generate Deal Pitch',
      system: 'Brand Collaboration Deck',
      icon: FileText,
      activeMsg: 'Creating executive brand pitches, ad scripts, and pricing proposals...',
      desc: 'Generates ready-to-send pitch emails, ad scripts, and deal terms.'
    }
  ];

  const activeStepObj = steps.find((s) => s.num === currentStep) || steps[0];
  const progressPercent = Math.min(100, Math.max(15, Math.round((currentStep / steps.length) * 100)));

  return (
    <div
      id="how-ai-finds-sponsors"
      className="relative overflow-hidden m3-surface rounded-[28px] p-5 sm:p-7 transition-all duration-300 scroll-mt-24"
    >
      {/* Header Row: Easy-to-Understand Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200/70 dark:border-purple-500/30">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-display font-bold text-slate-900 dark:text-white">
              How AI Finds Your Brand Sponsors
            </h2>
            <p className="text-xs text-slate-500 dark:text-purple-300/70">
              Step-by-step discovery connecting content creators with high-paying brand collaborators
            </p>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 font-semibold ml-auto sm:ml-0">
            Live 5-Step Process • {progressPercent}%
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsPayloadOpen(!isPayloadOpen)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-slate-100 hover:bg-slate-200/80 dark:bg-purple-950/40 dark:hover:bg-purple-900/60 text-slate-700 dark:text-purple-200 border border-slate-200 dark:border-purple-500/30 transition"
          >
            <span>{isPayloadOpen ? 'Hide Technical Data' : 'Inspect Technical Data'}</span>
            {isPayloadOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Master Material 3 Animated Linear Progress Track */}
      <div className="mb-5">
        <div className="relative h-2.5 w-full rounded-full bg-purple-100 dark:bg-purple-950/70 overflow-hidden border border-purple-200/60 dark:border-purple-500/20">
          {/* Determinate Animated Fill */}
          <div
            className="h-full rounded-full animate-m3-progress transition-all duration-500 ease-out relative"
            style={{ width: `${progressPercent}%` }}
          >
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-white/40 blur-xs" />
          </div>

          {/* Indeterminate Overlay Shimmer when actively loading */}
          {isLoading && (
            <div className="absolute inset-0 overflow-hidden">
              <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-m3-indeterminate" />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-purple-300/75 mt-1.5">
          <span className="flex items-center gap-1.5">
            {isLoading ? (
              <>
                <Radio className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 animate-pulse" />
                <span className="text-purple-700 dark:text-purple-300 font-semibold">
                  Executing Stage 0{activeStepObj.num} [{activeStepObj.code}]: {activeStepObj.activeMsg}
                </span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>All 5 steps complete: Creator matched with high-paying brand collaborators.</span>
              </>
            )}
          </span>
          <span className="font-semibold text-purple-700 dark:text-purple-300">
            Stage 0{currentStep} of 05
          </span>
        </div>
      </div>

      {/* 5-Stage Material 3 Linear Stepper Cards with Individual Animated Progress Bars */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5 relative">
        {steps.map((step) => {
          const isComplete = !isLoading ? currentStep >= step.num : currentStep > step.num;
          const isCurrent = isLoading && currentStep === step.num;
          const Icon = step.icon;

          const stepProgressWidth = isComplete ? '100%' : isCurrent ? '65%' : '0%';

          return (
            <div
              key={step.num}
              className={`relative flex flex-col justify-between p-4 rounded-2xl border transition-all duration-300 text-left overflow-hidden ${
                isCurrent
                  ? 'bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/90 dark:to-[#1d1536] border-2 border-purple-600 dark:border-purple-400 shadow-[0_10px_25px_-5px_rgba(124,58,237,0.25)] -translate-y-1'
                  : isComplete
                  ? 'm3-card-elevated'
                  : 'bg-slate-50/70 dark:bg-purple-950/20 border-slate-200/70 dark:border-purple-800/30 opacity-65'
              }`}
            >
              <div>
                {/* Top Step Number + Status Icon */}
                <div className="flex items-center justify-between mb-2.5">
                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold ${
                      isCurrent
                        ? 'bg-purple-600 text-white animate-step-pulse'
                        : isComplete
                        ? 'bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300'
                        : 'bg-slate-200/70 dark:bg-purple-950/60 text-slate-500 dark:text-purple-400/60'
                    }`}
                  >
                    STEP 0{step.num}
                  </span>

                  {isComplete ? (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  ) : isCurrent ? (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-purple-600 dark:text-purple-300">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </span>
                  ) : (
                    <Clock className="w-4 h-4 text-slate-400 dark:text-purple-500/50" />
                  )}
                </div>

                {/* Step Title & System */}
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className={`p-1.5 rounded-lg ${
                      isCurrent || isComplete
                        ? 'bg-purple-100/90 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300'
                        : 'bg-slate-100 dark:bg-purple-950/40 text-slate-400'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate font-display">
                    {step.title}
                  </h4>
                </div>

                <p className="text-[11px] font-mono text-purple-700 dark:text-purple-300 truncate font-medium">
                  {step.system}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-purple-200/70 mt-1.5 leading-snug line-clamp-2">
                  {step.desc}
                </p>
              </div>

              {/* Per-Step Animated Progress Indicator Bar */}
              <div className="mt-3.5 pt-2.5 border-t border-purple-100 dark:border-purple-500/15">
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span
                    className={
                      isCurrent
                        ? 'text-purple-700 dark:text-purple-300 font-bold'
                        : isComplete
                        ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'text-slate-400 dark:text-purple-400/50'
                    }
                  >
                    {isCurrent ? 'PROCESSING...' : isComplete ? 'VERIFIED' : 'PENDING'}
                  </span>
                  <span className="text-slate-500 dark:text-purple-300/70 font-semibold">
                    {stepProgressWidth}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-purple-100 dark:bg-purple-950/80 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isCurrent
                        ? 'animate-m3-progress'
                        : isComplete
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400'
                        : 'bg-transparent'
                    }`}
                    style={{ width: stepProgressWidth }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expandable Raw Payload Inspector */}
      {isPayloadOpen && (
        <div className="mt-5 pt-4 border-t border-purple-200/60 dark:border-purple-500/20 font-mono text-xs animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-slate-600 dark:text-purple-300 mb-2">
            <span className="font-bold text-slate-900 dark:text-white">
              REST API Telemetry Payload (Qloo /search & /v2/insights)
            </span>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 font-semibold">
              JSON Protocol Verified
            </span>
          </div>
          <div className="bg-slate-950 dark:bg-[#090614] rounded-2xl p-4 border border-purple-500/30 max-h-64 overflow-y-auto text-purple-200 shadow-inner">
            <pre className="whitespace-pre-wrap leading-relaxed text-[11px]">
              {JSON.stringify(rawPayloads || traceData, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
