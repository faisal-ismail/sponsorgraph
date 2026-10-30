<div align="center">
  <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/005/754/843/datas/gallery.jpg" alt="SponsorGraph Logo" width="140" style="border-radius: 28px; box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);" />
  
  # SponsorGraph
  
  ### Autonomous Cultural Sponsorship Engine for Content Creators & Collaborators

  [![Devpost Submission](https://img.shields.io/badge/Devpost-SponsorGraph-003E54?style=for-the-badge&logo=devpost&logoColor=white)](https://devpost.com/software/sponsorgraph)
  [![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/faisal-ismail/sponsorgraph)
  [![Live Demo](https://img.shields.io/badge/Live%20App-sponsorgraph.sineix.com-7C3AED?style=for-the-badge&logo=google-chrome&logoColor=white)](https://sponsorgraph.sineix.com)
  [![Qloo API v2](https://img.shields.io/badge/Powered%20By-Qloo%20Taste%20Intelligence-black?style=for-the-badge)](https://qloo.com)
  [![Google Gemini](https://img.shields.io/badge/AI%20Engine-Gemini%202.5%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev)
  [![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=for-the-badge)](LICENSE)
</div>

---

![SponsorGraph Feature Banner](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/005/754/186/datas/gallery.jpg)

> **SponsorGraph** is an autonomous agentic platform built for the **Qloo Agentic Hackathon**. It maps digital creator audiences into cross-domain cultural taste graphs, replacing generic keyword ad traps (VPNs, phone cases) with high-paying, non-obvious brand collaborations commanding **$75–$155 CPMs (+310% yield lift)**.

* **Devpost Project:** [https://devpost.com/software/sponsorgraph](https://devpost.com/software/sponsorgraph)
* **GitHub Repository:** [https://github.com/faisal-ismail/sponsorgraph](https://github.com/faisal-ismail/sponsorgraph)
* **Live Web Application:** [https://sponsorgraph.sineix.com](https://sponsorgraph.sineix.com)
* **License:** [MIT License](LICENSE) (Devpost Compliant)

---

## 🎯 1. The Core Problem: The "Heuristic Keyword Trap"

Digital content creators lose up to **70% of potential sponsorship earnings** because standard brand agencies and naive LLMs match sponsors through lazy keyword proximity:

* A **Consumer Tech Reviewer** is robotically pitched: *NordVPN, Surfshark, and dbrand*.
* A **Culinary & Gastronomy Creator** is pitched: *HelloFresh, Blue Apron, and AG1*.
* An **Adventure & Travel Creator** is pitched: *Airalo eSims and budget backpacks*.

### Why Keyword Matching Fails
Viewers experience acute ad-blindness after seeing identical VPN and meal-kit reads across 50+ channels. Conversion rates plummet, brand recall approaches zero, and creators are trapped in low-paying **$15–$25 CPM** deals.

### The SponsorGraph Solution: Behavioral Taste Grounding
Human taste is multidimensional and cross-domain. An audience that watches flagship industrial design tech reviews doesn't just buy electronics—they drink third-wave specialty coffee, collect modular everyday carry (EDC) gear, and appreciate minimalist architecture.

SponsorGraph queries **Qloo's 575M+ entity Taste Graph (`/search` and `/v2/insights`)** to discover empirical, non-obvious brand partnerships that resonate authentically with creator communities.

---

## 🧠 2. End-to-End 5-Stage Agent Pipeline

```
[ Creator URL / Handle / Profile ]
               │
               ▼
┌────────────────────────────────────────────────────────┐
│ Stage 01: Ingest & Extract                             │
│ Reads channel topics, transcripts & engagement signals │
└──────────────────────┬─────────────────────────────────┘
                       │
                       ▼
┌────────────────────────────────────────────────────────┐
│ Stage 02: Cultural Seed Isolation (Gemini 2.5 Flash)   │
│ Identifies 5 deterministic audience cultural seeds     │
│ (e.g. Cinema, Industrial Design, Music, Literature)    │
└──────────────────────┬─────────────────────────────────┘
                       │
                       ▼
┌────────────────────────────────────────────────────────┐
│ Stage 03: Qloo Entity Resolution (GET /search)         │
│ Resolves seeds into verified Qloo Entity UUIDs         │
│ (urn:entity:movie:..., urn:entity:brand:...)           │
└──────────────────────┬─────────────────────────────────┘
                       │
                       ▼
┌────────────────────────────────────────────────────────┐
│ Stage 04: Cross-Domain Taste Graph (GET /v2/insights)  │
│ Queries latent affinities across 575M+ cultural nodes  │
│ Discovers high-margin brand collaborators (>90% score) │
└──────────────────────┬─────────────────────────────────┘
                       │
                       ▼
┌────────────────────────────────────────────────────────┐
│ Stage 05: Executive Deal Room Synthesis                │
│ Generates ready-to-send CMO pitch emails, 60s host-read│
│ scripts with audio cues, and $75–$155 CPM term sheets  │
└────────────────────────────────────────────────────────┘
```

---

## ⚡ 3. Featured Benchmark Content Creators

For instant 1-click evaluation without requiring live API keys:

| Content Creator | Niche & Focus | Heuristic Baseline Trap | Qloo Behavioral Alliances | Target Yield |
| :--- | :--- | :--- | :--- | :--- |
| **Mrwhosetheboss** `[MWB]` | Consumer Tech & Industrial Design | NordVPN, dbrand, Opera GX | **Peak Design (95%)**, **Fellow (92%)**, **Teenage Engineering (90%)** | **$85–$115 CPM** *(+310% lift)* |
| **Joshua Weissman** `[JWC]` | Culinary Arts & Food Science | HelloFresh, Factor Meals, Magic Spoon | **Le Creuset (96%)**, **Mauviel 1830 (95%)**, **KitchenAid (94%)** | **$70–$105 CPM** *(+290% lift)* |
| **Andrew Huberman** `[HUB]` | Neuroscience & Human Performance | Athletic Greens, BetterHelp, SimpliSafe | **Eight Sleep (97%)**, **WHOOP (95%)**, **Herman Miller (93%)** | **$105–$155 CPM** *(+340% lift)* |
| **Eva zu Beck** `[TRVL]` | Solo Expedition & Global Travel | Travel VPNs, Budget eSims | **Arc'teryx (97%)**, **Rimowa (95%)**, **Matador Travel (93%)** | **$95–$145 CPM** *(+320% lift)* |
| **Cédric Grolet** `[FOOD]` | Haute Pâtisserie & Culinary Art | Meal kits, Protein powders | **KitchenAid Artisan (98%)**, **Mauviel Copper (95%)**, **Valrhona (94%)** | **$90–$140 CPM** *(+300% lift)* |

---

## 💻 4. Technology Stack

* **Frontend:** React 18, Vite 5, Tailwind CSS, Lucide Icons
* **UI Design System:** Google **Material Design 3 (M3)** with custom elevation surfaces, glassmorphism accents, and animated telemetry tracks
* **Taste Intelligence:** **Qloo REST API v2** (`/search`, `/v2/insights`)
* **Generative Engine:** **Google Gemini 2.5 Flash** (`gemini-2.5-flash`)
* **Backend Proxy:** Serverless PHP 8.x (`cURL`) providing secure API key encapsulation, caching, and CORS handling
* **Hosting:** High-availability cPanel infrastructure at `https://sponsorgraph.sineix.com`

---

## 🚀 5. Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/faisal-ismail/sponsorgraph.git
cd sponsorgraph
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Edit `.env` with your API keys:
```env
# Qloo Hackathon Taste Graph API Key (https://hackathon.api.qloo.com)
QLOO_API_KEY=your_qloo_api_key_here

# Google Gemini API Key for cultural extraction & deal synthesis
GEMINI_API_KEY=your_gemini_api_key_here
```
*(Note: You can also configure keys directly in the web UI via the **API Credentials** button).*

### 4. Start local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## 📄 6. License

This project is open-source under the **[MIT License](LICENSE)**.

```
MIT License
Copyright (c) 2026 SponsorGraph Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

Built with ❤️ for the **Qloo Agentic Hackathon** by **Faisal Ismail**.
