/**
 * Built-in 1-Click Benchmark Creator Portfolios for SponsorGraph
 * Grounded in verified Qloo Taste Graph UUIDs across 3 distinct creator verticals:
 * 1. Mrwhosetheboss (Consumer Tech & Industrial Design)
 * 2. Joshua Weissman (Culinary Arts, Food Science & Gastronomy)
 * 3. Andrew Huberman (Neuroscience, Bio-Optimization & Human Performance)
 */

export const PRESETS = [
  {
    id: 'mrwhosetheboss',
    name: 'Mrwhosetheboss',
    handle: '@Mrwhosetheboss (Arun Maini)',
    category: 'Consumer Tech & Industrial Design',
    icon_type: 'tech',
    ticker: 'MWB',
    tagline: '19M+ Subscribers • Industrial Design & Flagship Hardware Engineering',
    url: 'https://www.youtube.com/@Mrwhosetheboss',
    audience_summary: 'Design-conscious early adopters aged 18–34 who value precision engineering, minimalist desk ecosystems, flagship hardware architecture, and sci-fi aesthetics.',
    top_cities: ['London', 'San Francisco', 'Singapore', 'Toronto', 'Bengaluru'],
    age_bracket: '18–34 (74% Tech Early-Adopter Index)',
    income_index: '$85k+ Avg Income (142 Index)',
    seed_entities: [
      { name: 'Black Mirror', category: 'TV / Sci-Fi', qloo_urn: 'B36C968C-63BF-49C2-A031-3974337D9ABB', qloo_type: 'urn:entity:tv_show', popularity: 0.99 },
      { name: 'Inception', category: 'Film / Sci-Fi', qloo_urn: '18B098FD-3D84-4609-BFF3-ADF9A0B00E40', qloo_type: 'urn:entity:movie', popularity: 0.99 },
      { name: 'Formula 1', category: 'Motorsport / Engineering', qloo_urn: '096748F7-CBE7-40A9-A23D-C1CF0F28C99A', qloo_type: 'urn:entity:brand', popularity: 0.99 },
      { name: 'LEGO Architecture', category: 'Design / Hobby', qloo_urn: 'D69C66D5-F9EA-42ED-8344-3971BDD69E6A', qloo_type: 'urn:entity:book', popularity: 0.85 },
      { name: 'Daft Punk', category: 'Electronic Music', qloo_urn: '012EF80C-B187-4ECB-9C3D-9CA5228B503C', qloo_type: 'urn:entity:artist', popularity: 0.98 }
    ],
    generic_llm_sponsors: [
      {
        name: 'NordVPN / Surfshark',
        category: 'Cybersecurity / VPN',
        reason: 'Naive keyword match on "Tech YouTuber". Viewers experience acute ad-blindness after seeing identical VPN reads on 50+ channels.',
        fatigue_level: 'Extreme',
        estimated_cpm: '$18 - $25 CPM'
      },
      {
        name: 'dbrand Skins',
        category: 'Phone Accessories',
        reason: 'The single most ubiquitous tech channel sponsor; saturated to near-zero marginal brand discovery.',
        fatigue_level: 'Extreme',
        estimated_cpm: '$22 - $30 CPM'
      },
      {
        name: 'Opera GX',
        category: 'Gaming Browser',
        reason: 'Generic gamer sponsor with low conversion and dissonance with high-end industrial engineering themes.',
        fatigue_level: 'High',
        estimated_cpm: '$15 - $20 CPM'
      },
      {
        name: 'Raycon Earbuds',
        category: 'Budget Audio',
        reason: 'Mass-market commodity audio creates reputational dissonance for a flagship hardware reviewer.',
        fatigue_level: 'High',
        estimated_cpm: '$14 - $22 CPM'
      }
    ],
    qloo_sponsors: [
      {
        id: 'peakdesign',
        name: 'Peak Design',
        category: 'Modular Everyday Carry & Camera Engineering',
        affinity_score: 95,
        match_confidence: 'Exceptional (Top 1%)',
        hero_product: 'Everyday Backpack 20L & Carbon Fiber Travel Tripod',
        potential_cpm: '$85 - $115 CPM',
        taste_bridge: 'Audience passion for Black Mirror and Formula 1 indexes 95% with Peak Design\'s precision magnetic MagLatch™ and aerospace hardware.',
        why_it_works: 'Viewers treat cameras and mobile phones as high-investment tools. Peak Design treats gear protection as industrial architecture.',
        cold_email: {
          to_role: 'VP of Global Brand Partnerships & Marketing',
          subject: 'Partnership: Mrwhosetheboss × Peak Design (Qloo 95% Cultural Affinity Index)',
          body: `Hi Peak Design Partnerships Team,\n\nI’m reaching out from SponsorGraph on behalf of Mrwhosetheboss (19M+ tech and design enthusiasts).\n\nRather than pitching another generic bag read, our cultural intelligence agent analyzed our audience graph against Qloo's Cross-Domain Taste Graph. The behavioral overlap between Arun's audience and Peak Design indexes at 95%—higher than 99% of consumer brands.\n\nOur viewers are defined not merely by "tech", but by deep affinity for Christopher Nolan films, Formula 1 engineering, and architectural minimalism. They don't want coupon codes for cheap gadgets; they invest in heirloom-grade modular tools.\n\nProposed Integration:\n• A dedicated studio showcase highlighting the MagLatch™ and origami FlexFold™ architecture in 4K 60fps macro B-roll.\n• Highlighting the Carbon Fiber Tripod as the definitive travel essential.\n• Guaranteed trackable landing page peakdesign.com/mrwhosetheboss with bespoke bundle bonus.\n\nWould your partnerships lead be available for a 10-minute briefing next Wednesday to review our audience demographic breakdown and reserve Q4 slot inventory?\n\nBest,\nSponsorGraph Institutional Broker for Mrwhosetheboss`
        },
        ad_script: {
          hook: 'Before we teardown this $5,000 concept phone, I have to address the single question that floods my Instagram DMs: what bag actually carries my studio gear without falling apart?',
          product_spotlight: 'Enter our partner for today\'s video: Peak Design. Look at this: most backpacks are just nylon sacks with cheap zippers. But the Everyday Backpack 20L is built like a piece of aerospace architecture. The MagLatch magnetic closure snaps open and shut with one hand, and inside, the origami-inspired FlexFold dividers cradle my lenses with zero wasted space.',
          call_to_action: 'If you want gear engineered for people who actually obsess over industrial design, check out Peak Design. Hit the top link in the description or go to peakdesign.com/mrwhosetheboss to get an exclusive lifetime warranty pack and 15% off your first modular kit.',
          full_script: `[00:00 - 00:15] Hook: "Before we reveal what's inside this titanium prototype, a huge shoutout to the partner making today's studio teardown possible: Peak Design."\n\n[00:15 - 00:45] Deep Dive: "Whenever we film on location in Tokyo or San Francisco, carrying $40,000 in camera gear is terrifying. Most bags fail under pressure. But Peak Design engineered the Everyday Backpack like a stealth jet. Notice how this patented MagLatch snaps securely into 4 lock points with zero friction? And on the inside, origami-inspired dividers fold in three dimensions to hold my telephoto lens and mic receivers without a millimeter of wobble."\n\n[00:45 - 01:00] Call To Action: "This is what happens when real engineers design everyday carry. Tap the link in the top line of the description or visit peakdesign.com/mrwhosetheboss to grab yours with an unconditional lifetime guarantee."`
        }
      },
      {
        id: 'fellow',
        name: 'Fellow Products',
        category: 'Precision Kitchen & Smart Specialty Coffee',
        affinity_score: 92,
        match_confidence: 'Very High',
        hero_product: 'Stagg EKG Pro Electric Pour-Over Kettle (Matte Black with OLED)',
        potential_cpm: '$75 - $95 CPM',
        taste_bridge: 'Tech early adopters obsessed with PID thermistors and matte-black desktop aesthetics index 92% with Fellow\'s pour-over ecosystem.',
        why_it_works: 'Morning coffee for tech power-users is a calibrated ritual, not a grocery purchase. Fellow merges laboratory precision with Scandinavian counter beauty.',
        cold_email: {
          to_role: 'Chief Marketing Officer',
          subject: 'Fellow × Mrwhosetheboss: Grounded in Qloo 92% Lifestyle Affinity',
          body: `Hi Fellow Growth Team,\n\nReaching out on behalf of Mrwhosetheboss.\n\nOur audience taste profile analyzed via Qloo's Taste Graph revealed an unexpected 92% cross-affinity with specialty coffee design and Fellow Products. Our viewers obsess over UI details, haptic dials, and temperature precision.\n\nAn authentic "Desk & Studio Setup" integration showing Arun dialing in exact extraction temps with the Stagg EKG Pro OLED screen delivers high-converting cultural resonance.\n\nLet’s schedule a brief 10-minute discovery call next week.\n\nBest,\nSponsorGraph Institutional Broker`
        },
        ad_script: {
          hook: 'If you take your desk setup and morning routine as seriously as your computing hardware, you know precision matters everywhere.',
          product_spotlight: 'That’s why I partnered with Fellow. This is their Stagg EKG Pro electric kettle. Look at the full-color OLED screen and precision gooseneck spout—it holds water temperature within one degree so your pour-over never burns.',
          call_to_action: 'Upgrade your morning setup at fellowproducts.com/boss with code BOSS15 for 15% off.'
        }
      },
      {
        id: 'teenageengineering',
        name: 'Teenage Engineering',
        category: 'Minimalist Swedish Synthesizers & Industrial Audio',
        affinity_score: 90,
        match_confidence: 'Very High',
        hero_product: 'OP-1 Field Synthesizer & TP-7 Field Recorder',
        potential_cpm: '$90 - $125 CPM',
        taste_bridge: 'Daft Punk and LEGO Architecture enthusiasts share a 90% behavioral taste overlap with Teenage Engineering\'s playful Swedish industrial ethos.',
        why_it_works: 'Uncompromising CNC-machined aluminum bodies, custom monochrome displays, and tactile motorized mechanics.',
        cold_email: {
          to_role: 'Head of Global Collaborations',
          subject: 'Teenage Engineering × Mrwhosetheboss Collaboration Proposal (Qloo 90% Match)',
          body: `Hi Teenage Engineering Team,\n\nWe tracked an extraordinary 90% Qloo Taste Graph correlation between Mrwhosetheboss viewers and Teenage Engineering design collectors. Our audience reveres tactile interfaces and CNC precision machining.\n\nWe propose an exclusive creative feature on the OP-1 Field and TP-7 showcasing sonic industrial design in consumer electronics.\n\nLet's connect this month.\n\nWarm regards,\nSponsorGraph Institutional Broker`
        },
        ad_script: {
          hook: 'Every once in a while, a piece of industrial design comes along that feels like it fell out of a utopian 2080 sci-fi movie.',
          product_spotlight: 'Teenage Engineering makes the wildest audio hardware on earth. CNC-machined anodized aluminum, motorized tape reels, and instant tactile creation wherever inspiration strikes.',
          call_to_action: 'Explore the full field system at teenage.engineering/sponsorgraph.'
        }
      },
      {
        id: 'polestar',
        name: 'Polestar',
        category: 'Sustainable Scandinavian Electric Performance',
        affinity_score: 89,
        match_confidence: 'High',
        hero_product: 'Polestar 4 SUV Coupé (Design-First EV)',
        potential_cpm: '$120 - $160 CPM',
        taste_bridge: 'High-income tech early adopters seeking sustainable Scandinavian minimalism over flashy traditional luxury cars.',
        why_it_works: 'Focus on zero emissions, native Android Automotive OS infotainment, and radical reduction of visual clutter.',
        cold_email: {
          to_role: 'Head of Brand Communications & Media',
          subject: 'Polestar EV Showcase: Mrwhosetheboss Tech Audience Cohort',
          body: `Hi Polestar Team,\n\nOur cultural audience analysis powered by Qloo shows an 89% affinity for Polestar amongst our 19M tech viewers—indexing 2.8x higher than legacy automakers.\n\nWe would love to feature the Polestar 4 in an in-depth "Future of In-Car Autonomous Software & Minimalism" special.\n\nLet's discuss.\n\nSponsorGraph Institutional Broker`
        },
        ad_script: {
          hook: 'What does the future of automotive software and design actually look like when you strip away 100 years of clutter?',
          product_spotlight: 'I spent a week with the Polestar 4. From the digital rearview camera architecture to the seamless infotainment interface, it is pure Scandinavian minimalism powered by pure electric performance.',
          call_to_action: 'Book your private test drive experience today at polestar.com.'
        }
      }
    ]
  },
  {
    id: 'joshua_weissman',
    name: 'Joshua Weissman',
    handle: '@JoshuaWeissman',
    category: 'Culinary Arts, Food Science & Gastronomy',
    icon_type: 'culinary',
    ticker: 'JWC',
    tagline: '10M+ Subscribers • Scratch Cooking, Fermentation & Culinary Craft',
    url: 'https://www.youtube.com/@JoshuaWeissman',
    audience_summary: 'Obsessive home chefs, food scientists, and design-forward hosts aged 22–38 who mill their own grains, ferment sourdough, and treat cookware as lifetime heirloom equipment.',
    top_cities: ['Austin', 'New York', 'Los Angeles', 'Chicago', 'Melbourne'],
    age_bracket: '22–38 (79% Culinary Enthusiast Index)',
    income_index: '$78k+ Avg Income (128 Index)',
    seed_entities: [
      { name: 'The Bear', category: 'TV / Culinary Drama', qloo_urn: '16870F4E-51FC-4A10-8001-BAD4579B084E', qloo_type: 'urn:entity:tv_show', popularity: 0.99 },
      { name: 'Anthony Bourdain', category: 'Gastronomy / Author', qloo_urn: 'AB3FB401-E913-447B-B288-B56F49CC09BF', qloo_type: 'urn:entity:person', popularity: 0.98 },
      { name: 'Ratatouille', category: 'Film / Gastronomy', qloo_urn: '414043B1-8210-4997-8110-9E8B40D06814', qloo_type: 'urn:entity:movie', popularity: 0.99 },
      { name: "Chef's Table", category: 'Documentary Series', qloo_urn: '64027DED-0C92-4541-B4A9-70D9C1872689', qloo_type: 'urn:entity:tv_show', popularity: 0.95 },
      { name: 'Khruangbin', category: 'Psychedelic Funk / Vinyl', qloo_urn: 'BAF6317A-DF94-4C90-92AE-63F86560C21B', qloo_type: 'urn:entity:artist', popularity: 0.94 }
    ],
    generic_llm_sponsors: [
      {
        name: 'HelloFresh',
        category: 'Pre-Portioned Meal Kits',
        reason: 'Naive keyword match on "Food Channel". Viewers who watch Joshua make artisanal brioche from scratch actively reject pre-bagged grocery kits.',
        fatigue_level: 'Extreme',
        estimated_cpm: '$18 - $24 CPM'
      },
      {
        name: 'Factor Meals',
        category: 'Microwaveable Ready Meals',
        reason: 'Frozen/refrigerated plastic meal trays directly contradict a channel built on "But Better" culinary craftsmanship.',
        fatigue_level: 'Extreme',
        estimated_cpm: '$16 - $23 CPM'
      },
      {
        name: 'AirUp Water Bottles',
        category: 'Scented Hydration Novelty',
        reason: 'Gimmicky plastic scent pods erode credibility with serious culinary enthusiasts who care about real ingredients.',
        fatigue_level: 'High',
        estimated_cpm: '$14 - $20 CPM'
      },
      {
        name: 'Raid: Shadow Legends',
        category: 'Mobile RPG',
        reason: 'Jarring non-endemic gaming interruption that triggers immediate 60-second skip behavior.',
        fatigue_level: 'Extreme',
        estimated_cpm: '$15 - $21 CPM'
      }
    ],
    qloo_sponsors: [
      {
        id: 'lecreuset',
        name: 'Le Creuset',
        category: 'Heirloom French Enameled Cast Iron',
        affinity_score: 96,
        match_confidence: 'Exceptional (Top 1%)',
        hero_product: 'Signature Round Dutch Oven 7.25 Qt (Flame & Matte Navy)',
        potential_cpm: '$80 - $110 CPM',
        taste_bridge: 'Audience reverence for The Bear, Anthony Bourdain, and Chef\'s Table indexes 96% with Le Creuset\'s 100-year French foundry heritage.',
        why_it_works: 'Scratch cooks view enameled cast iron as the centerpiece of Maillard crust development, sourdough baking, and braising.',
        cold_email: {
          to_role: 'VP of Brand Marketing & Culinary Partnerships',
          subject: 'Partnership: Joshua Weissman × Le Creuset (Qloo 96% Gastronomy Affinity)',
          body: `Hi Le Creuset Brand Team,\n\nI’m reaching out from SponsorGraph on behalf of Joshua Weissman (10M+ culinary enthusiasts).\n\nWhile conventional agencies pitch disposable meal-kit subscriptions to food creators, our Qloo Cross-Domain Taste Graph analysis confirms a 96% behavioral affinity overlap between Joshua's audience and Le Creuset.\n\nAnchored by cultural touchstones like The Bear, Anthony Bourdain, and Chef's Table, our viewers obsess over thermal mass, Maillard reaction physics, and heirloom French cookware.\n\nProposed Integration:\n• Flagship "But Better" braising & sourdough boule episode showcasing the 7.25 Qt Signature Dutch Oven.\n• Custom colorway spotlight with direct conversion tracking.\n\nAre you open to a 10-minute briefing next week to review cohort telemetry?\n\nWarm regards,\nSponsorGraph Institutional Broker for Joshua Weissman`
        },
        ad_script: {
          hook: 'If we are going to build a crust that actually makes a grown chef weep, thin aluminum pans aren\'t invited to the party.',
          product_spotlight: 'Today’s episode is partnered with the undisputed legend of French kitchens: Le Creuset. Since 1925, each Signature Dutch Oven has been individually cast in sand molds in Fresnoy-le-Grand. Look at how evenly this enameled cast iron holds 450 degrees for sourdough boules and 6-hour short rib braises without a single hot spot.',
          call_to_action: 'Invest in cookware your grandchildren will fight over. Visit lecreuset.com/joshua to explore the Signature Collection and receive a complimentary stoneware heritage dish with your order.',
          full_script: `[00:00 - 00:15] Hook: "Listen closely to that sear. You cannot fake thermal mass, and that's why today's video is partnered with Le Creuset."\n\n[00:15 - 00:45] Culinary Demonstration: "Whether we're baking high-hydration sourdough or braising birria for six hours, temperature stability is everything. Le Creuset's hand-inspected French enameled cast iron locks in moisture and builds a fond that cheap pans simply burn."\n\n[00:45 - 01:00] Conversion Directive: "Upgrade your kitchen with a lifetime heirloom at lecreuset.com/joshua and unlock our exclusive culinary bundle."`
        }
      },
      {
        id: 'breville',
        name: 'Breville',
        category: 'Precision Espresso & Countertop Food Science Hardware',
        affinity_score: 94,
        match_confidence: 'Exceptional',
        hero_product: 'the Barista Touch™ Impress & Control Freak™ Home Induction',
        potential_cpm: '$75 - $105 CPM',
        taste_bridge: 'Home chefs who weigh ingredients to 0.1 grams index 94% with Breville\'s PID-controlled espresso and induction engineering.',
        why_it_works: 'Bridges restaurant-grade thermal precision with countertop industrial design.',
        cold_email: {
          to_role: 'Head of Global Influencer & Culinary Marketing',
          subject: 'Breville × Joshua Weissman: Precision Culinary Engineering (Qloo 94% Match)',
          body: `Hi Breville Marketing Team,\n\nQloo's Taste Graph reveals a 94% affinity match between Joshua Weissman's audience and Breville's precision kitchen hardware.\n\nWe propose showcasing the Control Freak Home and Barista Touch Impress in an upcoming "Coffee Shop Pastries & Espresso But Better" flagship episode.\n\nLet's connect.\n\nSponsorGraph Institutional Broker`
        },
        ad_script: {
          hook: 'Why do cafe lattes cost eight dollars when you can pull a better 9-bar shot in your kitchen in 30 seconds?',
          product_spotlight: 'Breville’s Barista Touch Impress uses precision PID temperature control and intelligent dosing so every single espresso shot hits golden crema perfection—and the Auto MilQ steam wand textures microfoam silky enough for competition latte art.',
          call_to_action: 'Dial in your kitchen at breville.com/joshua for an exclusive coffee bean & barista kit bonus.'
        }
      },
      {
        id: 'zwilling',
        name: 'Zwilling J.A. Henckels',
        category: 'Forged German & Japanese Cutlery (Miyabi / Kramer)',
        affinity_score: 92,
        match_confidence: 'Very High',
        hero_product: 'Kramer by Zwilling Euroline Carbon 2.0 8" Chef\'s Knife',
        potential_cpm: '$70 - $95 CPM',
        taste_bridge: 'Viewers who study knife skills and julienne speed index 92% with Bob Kramer and Miyabi high-carbon Damascus blades.',
        why_it_works: 'The chef\'s knife is the most visible hero object in every frame of a cooking video.',
        cold_email: {
          to_role: 'VP of Marketing, Zwilling North America',
          subject: 'Kramer by Zwilling × Joshua Weissman (Qloo 92% Cutlery Affinity)',
          body: `Hi Zwilling Team,\n\nOur Qloo cultural telemetry confirms a 92% overlap between Joshua Weissman's viewers and Zwilling/Miyabi forged cutlery.\n\nLet's discuss an integrated knife-work showcase featuring the Kramer Carbon 2.0 line.\n\nBest,\nSponsorGraph Institutional Broker`
        },
        ad_script: {
          hook: 'A dull knife isn\'t just dangerous—it crushes cell walls and ruins your prep.',
          product_spotlight: 'This is the Kramer by Zwilling Carbon 2.0 Chef’s Knife. Hand-finished with a 61 Rockwell hardness core, it glides through paper-thin shallots with zero resistance.',
          call_to_action: 'Sharpen your craft at zwilling.com/joshua with code PAPA15.'
        }
      },
      {
        id: 'aesop',
        name: 'Aesop',
        category: 'Architectural Apothecary & Culinary Hand Care',
        affinity_score: 90,
        match_confidence: 'Very High',
        hero_product: 'Resurrection Aromatique Hand Wash & Reverence Hand Balm',
        potential_cpm: '$70 - $95 CPM',
        taste_bridge: 'Cross-domain Qloo signal: audiences who stream Khruangbin vinyl and watch The Bear index 90% with Aesop\'s botanical sink formulations.',
        why_it_works: 'Chefs wash their hands 30+ times a day; mandarin rind, rosemary leaf, and cedar atlas neutralize garlic/onion aromatics.',
        cold_email: {
          to_role: 'Global Head of Brand Partnerships',
          subject: 'Cross-Domain Discovery: Aesop × Joshua Weissman (Qloo 90% Lifestyle Fit)',
          body: `Hi Aesop Partnerships Team,\n\nQloo's Cross-Domain Taste Graph uncovered a remarkable 90% latent affinity between design-conscious home cooks and Aesop's Resurrection Aromatique Hand Wash.\n\nWe propose a subtle, elevated kitchen sink ritual integration.\n\nWarmly,\nSponsorGraph Institutional Broker`
        },
        ad_script: {
          hook: 'When you wash your hands forty times during a recipe test, harsh dish soap destroys your skin.',
          product_spotlight: 'On my kitchen sink sits Aesop’s Resurrection Aromatique Hand Wash. Formulated with mandarin rind, rosemary, and cedarwood, it strips away garlic oils while leaving your hands restored.',
          call_to_action: 'Explore Aesop’s kitchen & home formulations at aesop.com.'
        }
      }
    ]
  },
  {
    id: 'andrew_huberman',
    name: 'Andrew Huberman',
    handle: '@hubermanlab (Huberman Lab Podcast)',
    category: 'Neuroscience, Bio-Optimization & Human Performance',
    icon_type: 'audio',
    ticker: 'HUB',
    tagline: '6.5M+ Subscribers • Stanford Neurobiology, Sleep Architecture & Longevity',
    url: 'https://www.youtube.com/@hubermanlab',
    audience_summary: 'High-earning founders, clinicians, engineers, and endurance athletes aged 25–45 who track HRV, circadian light exposure, VO2 max, and evidence-based cognitive protocols.',
    top_cities: ['San Francisco', 'Boston', 'Austin', 'Zurich', 'London'],
    age_bracket: '25–45 (86% Post-Grad & Executive Index)',
    income_index: '$125k+ Avg Income (172 Index)',
    seed_entities: [
      { name: 'Interstellar', category: 'Film / Hard Sci-Fi', qloo_urn: '057DA9D9-399B-437E-8BCA-A80E499125EF', qloo_type: 'urn:entity:movie', popularity: 0.99 },
      { name: '2001: A Space Odyssey', category: 'Film / Philosophy', qloo_urn: '87B9350E-ABFF-4A53-8565-49641858015C', qloo_type: 'urn:entity:movie', popularity: 0.99 },
      { name: 'Fyodor Dostoevsky', category: 'Classic Literature', qloo_urn: 'C911E823-7520-46B5-815B-349DBA758740', qloo_type: 'urn:entity:person', popularity: 0.96 },
      { name: 'Hans Zimmer', category: 'Orchestral / Focus Score', qloo_urn: '37DB91E9-9EE1-4C98-AA01-0AF0C34274EC', qloo_type: 'urn:entity:artist', popularity: 0.98 },
      { name: 'Limitless', category: 'Film / Neuro-Cognition', qloo_urn: 'E01ABD8D-54E2-432F-9E4F-F06EEDE45D60', qloo_type: 'urn:entity:movie', popularity: 0.95 }
    ],
    generic_llm_sponsors: [
      {
        name: 'BetterHelp',
        category: 'Mass-Market Online Therapy',
        reason: 'Blanket podcast network buy suffering from severe listener ad-skipping and skepticism among clinical/academic audiences.',
        fatigue_level: 'Extreme',
        estimated_cpm: '$18 - $25 CPM'
      },
      {
        name: 'SimpliSafe',
        category: 'Home Security Systems',
        reason: 'Boilerplate audio network filler with zero connection to neurobiology, circadian science, or physiological optimization.',
        fatigue_level: 'High',
        estimated_cpm: '$20 - $28 CPM'
      },
      {
        name: 'Squarespace',
        category: 'Website Templates',
        reason: 'Over-saturated podcast staple that under-monetizes an audience with $125k+ average household purchasing power.',
        fatigue_level: 'High',
        estimated_cpm: '$18 - $24 CPM'
      },
      {
        name: 'DraftKings / Social Casinos',
        category: 'Sports Betting & Dopamine Apps',
        reason: 'Directly contradicts Huberman Lab teachings on dopamine baseline regulation and behavioral addiction.',
        fatigue_level: 'Extreme',
        estimated_cpm: '$15 - $22 CPM'
      }
    ],
    qloo_sponsors: [
      {
        id: 'eightsleep',
        name: 'Eight Sleep',
        category: 'Thermoregulated Sleep Architecture & Biometric Hardware',
        affinity_score: 97,
        match_confidence: 'Exceptional (Top 0.5%)',
        hero_product: 'Pod 4 Ultra with Autopilot Thermal & Snore Mitigation',
        potential_cpm: '$115 - $155 CPM',
        taste_bridge: 'Listeners anchored by hard sci-fi (Interstellar) and neuro-optimization index at 97% with Eight Sleep\'s closed-loop thermal sleep engineering.',
        why_it_works: 'Lowering core body temperature by 2–3°F is a foundational Huberman protocol for slow-wave and REM sleep architecture.',
        cold_email: {
          to_role: 'Chief Marketing Officer & VP of Clinical Partnerships',
          subject: 'Strategic Alliance: Andrew Huberman × Eight Sleep (Qloo 97% Biometric Affinity)',
          body: `Hi Eight Sleep Leadership Team,\n\nI am writing from SponsorGraph on behalf of the Huberman Lab Podcast.\n\nEmpirical analysis via Qloo's Cross-Domain Taste Graph confirms a 97% behavioral affinity between our listeners and Eight Sleep—the highest single-brand correlation in our health & performance telemetry.\n\nOur audience consists of scientifically literate executives, clinicians, and athletes ($125k+ avg income) who treat sleep architecture as the foundation of neuroplasticity and metabolic health.\n\nProposed Flight:\n• Deep-dive host-read explaining the thermal physiology of slow-wave sleep and how the Pod 4 Ultra dynamically adjusts between 55°F and 110°F across sleep stages.\n• Dedicated attribution funnel eightsleep.com/huberman with $350 Pod 4 Ultra incentive.\n\nCan we schedule a 10-minute executive review this week?\n\nSincerely,\nSponsorGraph Institutional Broker for Huberman Lab`
        },
        ad_script: {
          hook: 'As we’ve discussed many times on this podcast, temperature is the single most powerful effector of your circadian rhythm and sleep architecture.',
          product_spotlight: 'To fall into deep slow-wave sleep, your core body temperature must drop by 1 to 3 degrees Fahrenheit. That is why I sleep on the Eight Sleep Pod 4 Ultra every single night. It circulates temperature-controlled water silently through your mattress cover, cooling each side of the bed independently down to 55 degrees while tracking your HRV and sleep stages with clinical precision.',
          call_to_action: 'Go to eightsleep.com/huberman to save up to $350 on the new Pod 4 Ultra and transform your recovery with a 30-night risk-free trial.',
          full_script: `[00:00 - 00:15] Physiological Hook: "Sleep is the foundation of mental health, physical health, and performance. And the primary lever controlling sleep depth is thermal regulation."\n\n[00:15 - 00:45] Protocol Integration: "Today's episode is supported by Eight Sleep. The Pod 4 Ultra uses hydro-cooling technology and biometric sensors to dynamically adjust your bed's temperature throughout the night—cooling you down to maximize deep slow-wave sleep in the first half of the night, and gently warming you to wake up naturally without cortisol spikes."\n\n[00:45 - 01:00] Conversion Directive: "Visit eightsleep.com/huberman to claim $350 off the Pod 4 Ultra today."`
        }
      },
      {
        id: 'whoop',
        name: 'WHOOP',
        category: '24/7 Physiological Strain, HRV & Autonomic Telemetry',
        affinity_score: 95,
        match_confidence: 'Exceptional',
        hero_product: 'WHOOP 4.0 Wearable & VO2 Max / Stress Monitor',
        potential_cpm: '$105 - $140 CPM',
        taste_bridge: 'Data-driven listeners who study autonomic nervous system balance share a 95% Qloo affinity with screenless continuous biometric telemetry.',
        why_it_works: 'Screen-free design prevents blue-light dopamine distraction while quantifying cold exposure, Zone 2 cardio, and NSDR recovery.',
        cold_email: {
          to_role: 'SVP of Brand & Athlete Partnerships',
          subject: 'WHOOP × Huberman Lab: Autonomic Telemetry Integration (Qloo 95% Match)',
          body: `Hi WHOOP Partnerships Team,\n\nQloo's Taste Graph identifies a 95% affinity match between Huberman Lab listeners and WHOOP.\n\nWe propose a protocol-driven integration demonstrating how real-time HRV and respiratory rate telemetry validate Non-Sleep Deep Rest (NSDR) and Zone 2 cardiovascular protocols.\n\nBest,\nSponsorGraph Institutional Broker`
        },
        ad_script: {
          hook: 'What gets measured gets managed—especially when it comes to your autonomic nervous system and heart rate variability.',
          product_spotlight: 'WHOOP 4.0 measures your HRV, resting heart rate, and sleep stages continuously without a distracting screen on your wrist, giving you an objective daily recovery score before you train.',
          call_to_action: 'Join today at join.whoop.com/huberman for a free WHOOP 4.0 strap and your first month free.'
        }
      },
      {
        id: 'hermanmiller',
        name: 'Herman Miller',
        category: 'Biomechanically Engineered Ergonomic Architecture',
        affinity_score: 93,
        match_confidence: 'Very High',
        hero_product: 'Aeron Chair (Onyx Ultra Matte) & Embody Ergonomic Task Chair',
        potential_cpm: '$95 - $130 CPM',
        taste_bridge: 'Cross-domain Qloo insight: high-income knowledge workers listening to Hans Zimmer focus scores during 90-minute ultradian work bouts index 93% with Herman Miller.',
        why_it_works: 'Postural alignment and thoracic extension directly impact diaphragmatic breathing and cognitive alertness during deep work.',
        cold_email: {
          to_role: 'VP of Global Brand Marketing',
          subject: 'Cross-Domain Alliance: Herman Miller × Huberman Lab (Qloo 93% Affinity)',
          body: `Hi Herman Miller Marketing Team,\n\nWhile most ergonomic brands only target office supply keywords, Qloo's Cross-Domain Taste Graph revealed a 93% overlap between Huberman Lab's executive/researcher cohort and Herman Miller.\n\nFraming the Embody and Aeron chairs around spinal biomechanics, diaphragmatic oxygen intake, and 90-minute ultradian focus blocks creates an untapped high-ticket conversion channel.\n\nLet's discuss.\n\nSponsorGraph Institutional Broker`
        },
        ad_script: {
          hook: 'Your posture during a 90-minute ultradian focus block directly dictates your diaphragmatic breathing capacity and alertness.',
          product_spotlight: 'Herman Miller’s Embody and Aeron chairs were co-designed with physicians and biomechanists to support your spine’s natural curvature, reducing blood-flow restriction and postural fatigue.',
          call_to_action: 'Invest in your workspace physiology at hermanmiller.com/huberman.'
        }
      },
      {
        id: 'garmin',
        name: 'Garmin',
        category: 'Aerospace GPS & Endurance Physiological Instruments',
        affinity_score: 91,
        match_confidence: 'Very High',
        hero_product: 'fēnix 8 Sapphire Solar Multisport GPS Smartwatch',
        potential_cpm: '$90 - $125 CPM',
        taste_bridge: 'Endurance runners and outdoor alpinists in San Francisco, Boston, and Zurich index 91% with Garmin\'s sapphire-titanium multisport instruments.',
        why_it_works: 'Supports multi-week battery life, morning sunlight viewing cadence, and precise Zone 2 lactate threshold pacing.',
        cold_email: {
          to_role: 'Director of Fitness & Outdoor Partnerships',
          subject: 'Garmin fēnix 8 × Huberman Lab: Zone 2 & Endurance Telemetry (Qloo 91%)',
          body: `Hi Garmin Partnerships Team,\n\nOur Qloo Taste Graph analysis shows a 91% affinity between Huberman Lab listeners and Garmin's flagship fēnix series.\n\nLet's partner around our upcoming Longevity & VO2 Max protocol series.\n\nBest,\nSponsorGraph Institutional Broker`
        },
        ad_script: {
          hook: 'VO2 max is one of the strongest clinical predictors of human longevity, and building it requires disciplined Zone 2 and high-intensity pacing.',
          product_spotlight: 'The Garmin fēnix 8 Sapphire Solar gives you titanium durability, multi-week solar battery life, and clinical-grade VO2 max and heart rate zone telemetry on every trail run.',
          call_to_action: 'Explore the fēnix 8 series at garmin.com.'
        }
      }
    ]
  }
];
