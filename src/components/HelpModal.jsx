import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Layers,
  Compass,
  FileText,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Database,
  Award
} from 'lucide-react';

export default function HelpModal({ isOpen, onClose, onSelectPreset, onRunExample }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('examples'); // 'examples' | 'pipeline' | 'qloo'

  const liveExamples = [
    {
      label: 'Mrwhosetheboss (Tech & Industrial Design)',
      query: 'https://www.youtube.com/@Mrwhosetheboss',
      presetId: 'mrwhosetheboss',
      tag: 'Benchmark [MWB]',
      niche: 'Consumer Tech • $85–$115 CPM',
      seeds: 'Black Mirror • Inception • Formula 1 • Daft Punk',
      brands: 'Peak Design (95%) • Fellow (92%) • Teenage Engineering (90%)'
    },
    {
      label: 'Joshua Weissman (Culinary Arts & Food Science)',
      query: 'https://www.youtube.com/@JoshuaWeissman',
      presetId: 'joshua_weissman',
      tag: 'Benchmark [JWC]',
      niche: 'Gastronomy & Craft • $70–$105 CPM',
      seeds: "The Bear • Anthony Bourdain • Ratatouille • Chef's Table",
      brands: 'Le Creuset (96%) • Breville (94%) • Zwilling (92%) • Aesop (90%)'
    },
    {
      label: 'Andrew Huberman (Neuroscience & Performance)',
      query: 'https://www.youtube.com/@hubermanlab',
      presetId: 'andrew_huberman',
      tag: 'Benchmark [HUB]',
      niche: 'Bio-Optimization • $105–$155 CPM',
      seeds: 'Interstellar • 2001: A Space Odyssey • Dostoevsky • Hans Zimmer',
      brands: 'Eight Sleep (97%) • WHOOP (95%) • Herman Miller (93%)'
    },
    {
      label: 'Eva zu Beck (Solo Travel & Expedition)',
      query: 'https://www.instagram.com/eva.zu.beck/',
      presetId: null,
      tag: 'Instagram Travel',
      niche: 'Adventure Travel • $95–$145 CPM',
      seeds: 'Into the Wild • Patagonia • National Geographic • Bon Iver',
      brands: "Arc'teryx (97%) • Rimowa (95%) • Matador (93%) • Sony Cinema (92%)"
    },
    {
      label: 'Cédric Grolet (Haute Pâtisserie & Baking)',
      query: 'https://www.instagram.com/cedricgrolet/',
      presetId: null,
      tag: 'Instagram Cooking',
      niche: 'Fine Pastry & Gastronomy • $90–$140 CPM',
      seeds: 'The Taste of Things • Michelin Guide • Alain Ducasse • Valrhona',
      brands: 'KitchenAid (98%) • Mauviel 1830 (95%) • Valrhona (94%) • Silpat (92%)'
    },
    {
      label: 'Kara and Nate (Global Travel & Documentaries)',
      query: 'https://www.instagram.com/karaandnate/',
      presetId: null,
      tag: 'Instagram Travel',
      niche: 'Global Travel & Aviation • $90–$135 CPM',
      seeds: 'The Secret Life of Walter Mitty • Anthony Bourdain • DJI',
      brands: 'Rimowa (96%) • Matador (94%) • Osprey (92%) • Peak Design (91%)'
    },
    {
      label: 'MKBHD / Marques Brownlee',
      query: 'https://www.youtube.com/@mkbhd',
      presetId: null,
      tag: 'Live API Query',
      niche: 'Flagship Tech & EVs',
      seeds: 'Resolved dynamically via Gemini + Qloo /search',
      brands: 'Live Qloo /v2/insights cross-domain brand discovery'
    },
    {
      label: 'Veritasium (Science & Engineering)',
      query: 'https://www.youtube.com/@veritasium',
      presetId: null,
      tag: 'Live API Query',
      niche: 'STEM & Physics Deep-Dives',
      seeds: 'Resolved dynamically via Gemini + Qloo /search',
      brands: 'Live Qloo /v2/insights cross-domain brand discovery'
    }
  ];

  const handleTriggerExample = (item) => {
    onClose();
    if (item.presetId && onSelectPreset) {
      onSelectPreset(item.presetId);
    } else if (onRunExample) {
      onRunExample(item.query);
    }
    setTimeout(() => {
      const el = document.getElementById('how-ai-finds-sponsors');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
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
                  SponsorGraph Guide & Interactive Examples
                </h2>
                <span className="text-[11px] font-mono px-3 py-0.5 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xs">
                  Documentation & Live Demos
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-purple-200/75 mt-0.5">
                Complete operational guide, 5-stage agent architecture, and 1-click live creator benchmarks
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full text-slate-600 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/60 border border-purple-200/70 dark:border-purple-500/30 transition"
            aria-label="Close Help Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Unified Material 3 Segmented Pill Tabs */}
        <div className="px-6 py-3 border-b border-purple-100 dark:border-purple-500/20 bg-white dark:bg-[#161129]">
          <div className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200/60 dark:border-purple-500/25">
            <button
              onClick={() => setActiveTab('examples')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'examples'
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white shadow-sm'
                  : 'text-slate-600 dark:text-purple-200/80 hover:text-purple-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>1. Quick Start & Examples</span>
            </button>

            <button
              onClick={() => setActiveTab('pipeline')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white shadow-sm'
                  : 'text-slate-600 dark:text-purple-200/80 hover:text-purple-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>2. 5-Stage Agent Pipeline</span>
            </button>

            <button
              onClick={() => setActiveTab('qloo')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'qloo'
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white shadow-sm'
                  : 'text-slate-600 dark:text-purple-200/80 hover:text-purple-900 dark:hover:text-white'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>3. Why Qloo vs. Standard LLMs</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white dark:bg-[#161129]">
          {/* TAB 1: EXAMPLES & WALKTHROUGH */}
          {activeTab === 'examples' && (
            <div className="space-y-6">
              {/* 3-Step Usage Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl m3-tonal">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-purple-600 text-white">
                      Step 01
                    </span>
                    <Compass className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1 font-display">
                    Select or Enter Content Creator
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-purple-200/80 leading-relaxed">
                    Paste any YouTube, Instagram, or podcast link, or click one of the 3 featured creators (<strong>Mrwhosetheboss</strong>, <strong>Joshua Weissman</strong>, <strong>Andrew Huberman</strong>).
                  </p>
                </div>

                <div className="p-4 rounded-2xl m3-tonal">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-indigo-600 text-white">
                      Step 02
                    </span>
                    <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1 font-display">
                    Discover Brand Collaborators
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-purple-200/80 leading-relaxed">
                    AI analyzes what the creator’s audience loves and matches them with high-paying brand collaborators, avoiding generic keyword ads like VPNs.
                  </p>
                </div>

                <div className="p-4 rounded-2xl m3-tonal">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-600 text-white">
                      Step 03
                    </span>
                    <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1 font-display">
                    Pitch & Close Brand Deals
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-purple-200/80 leading-relaxed">
                    Click <strong>Generate Deal Dossier</strong> on any matched brand to get a ready-to-send pitch email, a 60-second host-read script, and $70–$155 CPM rates.
                  </p>
                </div>
              </div>

              {/* Interactive Examples List */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-purple-100">
                    Interactive 1-Click Creator Examples (Click Any Card to Run)
                  </h3>
                  <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 font-semibold">
                    Instant Telemetry + Live API Support
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {liveExamples.map((ex, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleTriggerExample(ex)}
                      className="group cursor-pointer p-4 rounded-2xl m3-card-elevated flex flex-col justify-between gap-2.5"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300">
                            {ex.tag}
                          </span>
                          <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                            {ex.niche}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition font-display">
                          {ex.label}
                        </h4>
                        <p className="text-[11px] font-mono text-slate-500 dark:text-purple-300/70 mt-1 truncate">
                          Seeds: {ex.seeds}
                        </p>
                        <p className="text-[11px] text-slate-700 dark:text-purple-200 mt-0.5 truncate">
                          Matches: <span className="font-semibold">{ex.brands}</span>
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2.5 border-t border-purple-100 dark:border-purple-500/20 text-[11px] font-mono">
                        <span className="text-slate-400 dark:text-purple-400/60 truncate">{ex.query}</span>
                        <span className="inline-flex items-center gap-1 font-bold text-purple-700 dark:text-purple-300 group-hover:translate-x-0.5 transition">
                          <span>Load Example</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 5-STAGE PIPELINE */}
          {activeTab === 'pipeline' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl m3-tonal">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 font-display">
                  Autonomous 5-Stage Brokerage Architecture
                </h3>
                <p className="text-xs text-slate-600 dark:text-purple-200/80 leading-relaxed">
                  SponsorGraph uses Google Gemini 2.5 Flash for unstructured semantic extraction and synthesis, while relying strictly on Qloo’s deterministic REST API (<code className="font-mono text-purple-700 dark:text-purple-300 font-semibold">/search</code> and <code className="font-mono text-purple-700 dark:text-purple-300 font-semibold">/v2/insights</code>) for all cultural taste and brand affinity calculations.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    step: '01',
                    title: 'Content Ingestion & Normalization',
                    badge: 'Reader Proxy',
                    desc: 'Ingests a creator YouTube channel URL, podcast feed, or handle. Strips noisy markup to isolate video titles, channel descriptions, and audience signals.'
                  },
                  {
                    step: '02',
                    title: 'Cultural Signal Extraction & Baseline Trap Analysis',
                    badge: 'Gemini 2.5 Flash',
                    desc: 'Extracts 5 globally recognized cultural anchor entities (films, TV shows, music artists, authors) that define the audience\'s lifestyle, alongside 4 over-saturated "Keyword Trap" sponsors to avoid.'
                  },
                  {
                    step: '03',
                    title: 'Deterministic Qloo Entity Resolution',
                    badge: 'GET /search?query=...&take=3',
                    desc: 'Queries https://hackathon.api.qloo.com/search in parallel to map natural-language seed names into verified Qloo Entity UUIDs (e.g., The Bear → 16870F4E-51FC-4A10-8001-BAD4579B084E).'
                  },
                  {
                    step: '04',
                    title: 'Cross-Domain Brand Taste Graph Query',
                    badge: 'GET /v2/insights?filter.type=urn:entity:brand',
                    desc: 'Passes the resolved UUIDs as signal.interests.entities into Qloo /v2/insights, filtering out media/website noise to discover high-affinity lifestyle, hardware, culinary, and performance brands.'
                  },
                  {
                    step: '05',
                    title: 'Executive Deal Room Synthesis',
                    badge: 'Outreach Memo + 60s Script',
                    desc: 'Synthesizes Qloo brand properties (hero products, audience identity, interest adjacencies) into a bespoke CMO pitch email and a timestamped 60-second native host-read script.'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl m3-card-elevated flex items-start gap-3.5"
                  >
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 shrink-0">
                      {item.step}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-display">
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-mono font-semibold text-purple-700 dark:text-purple-300">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-purple-200/80 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: WHY QLOO VS LLMS */}
          {activeTab === 'qloo' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl m3-elevated-trap">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                    <h4 className="text-xs font-mono font-bold uppercase text-rose-700 dark:text-rose-300">
                      The Heuristic LLM Keyword Trap ($15–$25 CPM)
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-rose-200/80 leading-relaxed mb-3">
                    When you ask an ungrounded LLM to recommend sponsors for a creator, it relies on surface-level word associations:
                  </p>
                  <ul className="text-xs space-y-1.5 font-mono text-slate-900 dark:text-white">
                    <li>• "Tech YouTuber" → NordVPN, Surfshark, Raycon</li>
                    <li>• "Cooking Channel" → HelloFresh, Factor Meals</li>
                    <li>• "Science Podcast" → BetterHelp, SimpliSafe</li>
                  </ul>
                  <p className="text-[11px] text-slate-500 dark:text-rose-300/70 mt-3">
                    Result: Viewers skip the ad segment out of fatigue, and creators are trapped in low-CPM commodity price wars.
                  </p>
                </div>

                <div className="p-5 rounded-2xl m3-elevated-qloo">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <h4 className="text-xs font-mono font-bold uppercase text-purple-700 dark:text-purple-300">
                      Qloo Cross-Domain Taste Graph ($75–$155 CPM)
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-purple-200/80 leading-relaxed mb-3">
                    Qloo maps real-world behavioral correlations across 575M+ cultural entities without personally identifiable data:
                  </p>
                  <ul className="text-xs space-y-1.5 font-mono text-slate-900 dark:text-white">
                    <li>• Mrwhosetheboss → Peak Design (95%), Fellow (92%)</li>
                    <li>• Joshua Weissman → Le Creuset (96%), Breville (94%)</li>
                    <li>• Andrew Huberman → Eight Sleep (97%), WHOOP (95%)</li>
                  </ul>
                  <p className="text-[11px] text-slate-500 dark:text-purple-300/70 mt-3">
                    Result: +310% CPM yield arbitrage through authentic lifestyle alignment and high-intent brand partnerships.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl m3-tonal">
                <h4 className="text-xs font-mono font-bold uppercase text-purple-800 dark:text-purple-300 mb-1.5">
                  Inspecting Raw Qloo API Payloads
                </h4>
                <p className="text-xs text-slate-600 dark:text-purple-200/80 leading-relaxed">
                  At any time on the main dashboard, click <strong>Inspect API Payloads</strong> in the Autonomous Pipeline Telemetry bar to view the live JSON response containing the resolved Qloo Entity UUIDs, popularity percentiles, and cross-domain brand affinity scores.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Unified Material 3 Dialog Footer */}
        <div className="p-5 border-t border-purple-100 dark:border-purple-500/20 bg-purple-50/40 dark:bg-purple-950/30 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-600 dark:text-purple-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Grounded in Qloo Taste Intelligence API v2 & Google Gemini 2.5</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] hover:from-[#6d28d9] hover:to-[#4338ca] shadow-md shadow-purple-600/25 transition"
          >
            Got It, Return to Workspace
          </button>
        </div>
      </div>
    </div>
  );
}
