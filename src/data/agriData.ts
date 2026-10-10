/**
 * Structured content and figures for ZimSmart Grow
 * Grounded in the ZimSmart Grow Business Plan and Startup Pitch
 */

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image?: string;
}

export interface Metric {
  value: string;
  label: string;
  context: string;
}

export interface SDGItem {
  id: number;
  title: string;
  target: string;
  color: string;
}

export const HERO_METRICS: Metric[] = [
  {
    value: "3M+",
    label: "Smallholder Farmers",
    context: "70% of national food security relies on their harvests"
  },
  {
    value: "+30%",
    label: "Potential Yield Increase",
    context: "Via AI-timed planting, soil matching & micro-weather"
  },
  {
    value: "70%",
    label: "Nation's Food Produced",
    context: "Produced on under-resourced plots vulnerable to climate shocks"
  },
  {
    value: "107%",
    label: "Mobile Penetration",
    context: "Enabling immediate nationwide reach via USSD, SMS & WhatsApp"
  }
];

export const PROBLEM_STATS = [
  {
    id: "climate",
    stat: "84%",
    title: "Climate Vulnerability",
    description: "84% of smallholder farmers report recurrent yield reductions due to severe droughts, delayed rainy seasons, and erratic El Niño rainfall patterns.",
    subtext: "Rain-fed agriculture is collapsing under unpredictable climate volatility without hyper-local forecast guidance."
  },
  {
    id: "info",
    stat: "1:5,000",
    title: "Information Poverty",
    description: "A stark 1:5,000 extension officer-to-farmer ratio leaves millions without agronomist support when pests strike or planting windows shift.",
    subtext: "Extension workers cannot physically reach dispersed rural wards before preventable crop failures occur."
  },
  {
    id: "market",
    stat: "30-40%",
    title: "Market Exclusion",
    description: "30% to 40% of harvested produce rots or gets sold below production cost due to predatory middlemen and zero transparent price discovery.",
    subtext: "Farmers take price-taker penalties at farm gates while urban retail prices surge."
  }
];

export const SOLUTION_TIERS = [
  {
    tier: "Tier 1",
    name: "AI Advisory Engine",
    subtitle: "Agronomy Intelligence at Scale",
    iconName: "BrainCircuit",
    description: "Hyper-local planting calendars, microclimate weather forecasts, and disease detection calibrated directly to Zimbabwe's 5 agro-ecological natural regions.",
    details: [
      "Dynamic planting window calculated with satellite precipitation models",
      "Computer vision disease diagnostic identifying 24+ common maize & vegetable blights",
      "Precise fertilizer and organic soil amendment recommendations",
      "Proactive pest outbreak alerts (Fall Armyworm, stalk borer, rust)"
    ],
    highlight: "Trained on regional soil & agronomy datasets"
  },
  {
    tier: "Tier 2",
    name: "Multi-Channel Delivery",
    subtitle: "Accessible on Any Phone",
    iconName: "Smartphone",
    description: "Zero technological friction. Delivers intelligence through the devices farmers already carry, without requiring costly smartphones or 4G data plans.",
    details: [
      "Offline USSD dial codes (*384*55#) functional on 2G feature phones",
      "Interactive WhatsApp bot with voice note support in Shona & Ndebele",
      "Automated SMS weather & market flash alerts",
      "Zero app installation required for 100% rural accessibility"
    ],
    highlight: "107% mobile penetration enabled"
  },
  {
    tier: "Tier 3",
    name: "Market Linkage",
    subtitle: "From Farm Gate to Fair Market",
    iconName: "Handshake",
    description: "Direct connection between verified farmer clusters and institutional food processors, supermarkets, and grain aggregators with transparent pricing.",
    details: [
      "Forward purchase contracts securing guaranteed floor prices",
      "Transparent live market price indices across Mbare Musika and regional hubs",
      "Aggregated bulk logistics reducing transportation overhead by 40%",
      "Direct mobile money settlements (EcoCash, Innbucks) with zero middlemen"
    ],
    highlight: "Eliminates predatory middlemen markups"
  }
];

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Register",
    action: "Dial *384*55# or WhatsApp",
    desc: "Free 60-second onboarding. Farmer dials USSD or sends a WhatsApp message in Shona, Ndebele, or English. No internet required.",
    icon: "PhoneCall"
  },
  {
    step: "02",
    title: "Profile",
    action: "Ward, Crop & Soil Type",
    desc: "Farmer enters location (e.g. Goromonzi, Mazowe), plot size, and target crops (Maize, Groundnuts, Sorghum, Horticulture).",
    icon: "MapPin"
  },
  {
    step: "03",
    title: "Receive Advice",
    action: "Hyper-Local Daily Insights",
    desc: "Farmer receives customized planting calendar, rainfall probability, and soil amendment advisories tailored to their precise ward.",
    icon: "CalendarCheck"
  },
  {
    step: "04",
    title: "Diagnose Disease",
    action: "Instant Photo Diagnosis",
    desc: "Farmer snaps a photo of damaged foliage via WhatsApp. AI model diagnoses blight/pest in under 15 seconds and prescribes local treatments.",
    icon: "ScanLine"
  },
  {
    step: "05",
    title: "Sell Produce",
    action: "Direct Off-Taker Linkage",
    desc: "Farmer receives verified purchase bids from commercial food processors at harvest, locking in pre-agreed fair prices and collection points.",
    icon: "TrendingUp"
  }
];

export const MARKET_DATA = {
  tam: {
    figure: "US$15.8B",
    label: "Total Addressable Market (TAM)",
    sub: "Sub-Saharan Africa smallholder digital agriculture & food supply economy by 2030."
  },
  sam: {
    figure: "US$1.2B",
    label: "Serviceable Addressable Market (SAM)",
    sub: "SADC region smallholder advisory, grain linkage, and input optimization services."
  },
  som: {
    figure: "US$45M",
    label: "Serviceable Obtainable Market (SOM)",
    sub: "Zimbabwe's 3M+ smallholder farming households across 8 rural agricultural provinces over 5 years."
  },
  drivers: [
    {
      title: "107% Mobile Penetration",
      detail: "Zimbabweans overwhelmingly own cellular devices. Feature phones and basic smartphones are ubiquitous even in remote rural wards."
    },
    {
      title: "Government Digital Agriculture Mandate",
      detail: "Zimbabwe National Agricultural Policy Framework (2020–2030) explicitly incentivizes climate-smart tech and digital extension services."
    },
    {
      title: "Widespread Mobile Money Adoption",
      detail: "EcoCash and Innbucks process over 80% of informal transactions, making digital off-taker settlements seamless without bank branches."
    },
    {
      title: "Climate Shocks Driving Adoption",
      detail: "Severe El Niño weather disruptions make traditional ancestral planting dates unreliable; farmers actively seek data-backed guidance."
    }
  ]
};

export const ADVANTAGE_COMPARISON = [
  {
    feature: "Multi-Channel Delivery (USSD + SMS + WhatsApp)",
    zimSmart: true,
    competitors: "Most rely solely on heavy smartphone apps requiring 4G data",
    details: "Reaches 100% of farmers regardless of device or internet connectivity"
  },
  {
    feature: "Full-Cycle Integration (Advisory + Diagnosis + Market)",
    zimSmart: true,
    competitors: "Fragmented standalone weather apps or disconnected bulletin boards",
    details: "Single continuous journey from pre-planting decisions to harvest payout"
  },
  {
    feature: "Zimbabwe Agro-Ecological Calibration (Regions I-V)",
    zimSmart: true,
    competitors: "Generic global weather APIs with zero local soil calibration",
    details: "Localized agronomic models aligned with Agritex research and soil types"
  },
  {
    feature: "Founder's Lived Experience & Rural Roots",
    zimSmart: true,
    competitors: "Detached foreign development agencies or urban-only tech teams",
    details: "Grounded in genuine rural community realities and trusted farmer networks"
  },
  {
    feature: "Local Language Native Support (Shona, Ndebele)",
    zimSmart: true,
    competitors: "English-only interfaces creating comprehension barriers",
    details: "Voice notes and text prompts in farmers' primary conversational languages"
  }
];

export const IMPACT_KPIS = [
  {
    value: "+30% to +45%",
    label: "Yield Improvement",
    detail: "Documented through optimized planting dates and soil-specific fertilization"
  },
  {
    value: "+50%",
    label: "Farmer Income Increase",
    detail: "Combined yield gains and elimination of speculative middleman margins"
  },
  {
    value: "-60%",
    label: "Post-Harvest Waste Reduction",
    detail: "Direct forward off-take contracts and coordinated aggregation logistics"
  },
  {
    value: "100,000+",
    label: "Phase 1 Smallholders Reached",
    detail: "7-month launch and regional pilot across Mashonaland East & Central"
  }
];

export const SDG_GOALS: SDGItem[] = [
  {
    id: 1,
    title: "SDG 1: No Poverty",
    target: "Directly elevating rural household incomes through fair market access and higher agricultural productivity.",
    color: "#E5243B"
  },
  {
    id: 2,
    title: "SDG 2: Zero Hunger",
    target: "Strengthening staple grain yields (maize, sorghum) to bolster household and national food reserves.",
    color: "#DDA63A"
  },
  {
    id: 8,
    title: "SDG 8: Decent Work & Economic Growth",
    target: "Transforming subsistence farming into profitable, resilient agribusiness micro-enterprises.",
    color: "#A21942"
  },
  {
    id: 10,
    title: "SDG 10: Reduced Inequalities",
    target: "Democratizing artificial intelligence for marginalized smallholders who lack agronomic extension.",
    color: "#DD1367"
  },
  {
    id: 12,
    title: "SDG 12: Responsible Consumption",
    target: "Precision input application preventing chemical runoff and drastically lowering post-harvest food waste.",
    color: "#BF8B2E"
  },
  {
    id: 13,
    title: "SDG 13: Climate Action",
    target: "Equipping rain-fed smallholders with predictive micro-weather tools to survive severe climate anomalies.",
    color: "#3F7E44"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Tyno Chagaka",
    role: "Founder & Chief Executive Officer",
    credentials: "AgriTech Innovator & Software Engineer",
    bio: "Raised with direct lived experience in Zimbabwean farming communities. Combines hands-on agronomic understanding with modern AI software engineering. Driven by the mission to dismantle rural information poverty and build climate-resilient livelihoods for smallholders across Zimbabwe and SADC.",
    image: "/src/assets/images/founder_portrait_1791564945782.jpg"
  },
  {
    name: "Dr. Ruvimbo Matambo",
    role: "Head of Agronomy & Extension Systems",
    credentials: "Ph.D. in Crop Science, 14+ Yrs Agritex Field Research",
    bio: "Former senior agronomist at the Department of Agricultural Technical and Extension Services (Agritex). Specialist in drought-tolerant seed varieties, regional soil nitrogen dynamics, and participatory rural extension.",
  },
  {
    name: "Farai Chitsva",
    role: "Chief Technology Officer & AI Lead",
    credentials: "M.Sc. Machine Learning, Edge CV Specialist",
    bio: "10+ years architecting low-bandwidth mobile applications and computer vision classifiers. Built mobile-first computer vision models capable of running inferences on low-power devices and compressed WhatsApp media.",
  },
  {
    name: "Nyasha Sibanda",
    role: "Head of Market Linkages & Commercial Off-Take",
    credentials: "Ex-Director Grain Aggregation & Supply Chain",
    bio: "12 years managing commercial agricultural trading, FMCG procurement contracts, and rural aggregation hubs. Maintains direct relationships with major millers, food manufacturers, and supermarket chains in Zimbabwe.",
  }
];

export const THE_ASK_DATA = {
  amount: "US$112,000",
  timeline: "7-Month Launch & Validation Phase",
  purpose: "Catalytic launch funding to finalize telco USSD integration, train the regional crop computer vision model on Zimbabwean varieties, and onboard our first 25,000 verified smallholders in Mashonaland.",
  breakdown: [
    { category: "AI Advisory Engine & USSD Telco Infrastructure", pct: "40%", amount: "$44,800" },
    { category: "Field Extension, Farmer Training & Cooperative Onboarding", pct: "30%", amount: "$33,600" },
    { category: "Off-Taker Marketplace & Aggregation Hub Network", pct: "18%", amount: "$20,160" },
    { category: "Regulatory Compliance, Field Operations & Governance", pct: "12%", amount: "$13,440" }
  ],
  pillars: [
    {
      title: "Funding Partners",
      subtitle: "Grants, Catalytic Capital & Seed Equity",
      desc: "Impact funds, angel investors, and challenge grant foundations (MassChallenge, USAID, agritech accelerators) seeking measurable climate and poverty alleviation outcomes.",
      icon: "Coins"
    },
    {
      title: "Technical Partners",
      subtitle: "Telecommunications & Earth Observation",
      desc: "Econet, NetOne, and Telecel for USSD zero-rating; satellite remote sensing providers for high-resolution precipitation and vegetative index telemetry.",
      icon: "Cpu"
    },
    {
      title: "Mentorship & Ecosystem",
      subtitle: "Advisory & Distribution Scale",
      desc: "Agricultural researchers, farmer unions (ZFU), and regional agribusiness leaders to scale field adoption and commercial off-taker contracts.",
      icon: "Sparkles"
    }
  ]
};
