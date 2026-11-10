export type Lang = "en" | "kn";
export type Localized = { en: string; kn: string };
export const tr = (en: string, kn: string): Localized => ({ en, kn });

export const groups = [
  {
    id: "a" as const,
    title: tr(
      "IT, biotechnology & corporate leadership",
      "ಐಟಿ, ಜೈವಿಕ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ನಾಯಕತ್ವ",
    ),
    shortTitle: tr("Technology & leadership", "ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ನಾಯಕತ್ವ"),
    tag: tr(
      "IT, biotechnology, cloud, data & AI",
      "ಐಟಿ, ಜೈವಿಕ ತಂತ್ರಜ್ಞಾನ, ಕ್ಲೌಡ್, ದತ್ತಾಂಶ ಮತ್ತು ಎಐ",
    ),
    audience: tr(
      "For computer science graduates, engineering professionals, biotechnology researchers, data analysts and technology leaders.",
      "ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನ ಪದವೀಧರರು, ಎಂಜಿನಿಯರಿಂಗ್ ವೃತ್ತಿಪರರು, ಜೈವಿಕ ತಂತ್ರಜ್ಞಾನ ಸಂಶೋಧಕರು, ದತ್ತಾಂಶ ವಿಶ್ಲೇಷಕರು ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ನಾಯಕರಿಗಾಗಿ.",
    ),
    domains: [
      tr(
        "Full-stack web & mobile engineering",
        "ಫುಲ್‌ಸ್ಟ್ಯಾಕ್ ವೆಬ್ ಮತ್ತು ಮೊಬೈಲ್ ಅಭಿವೃದ್ಧಿ",
      ),
      tr(
        "Cloud infrastructure · AWS / Azure",
        "ಕ್ಲೌಡ್ ಮೂಲಸೌಕರ್ಯ · AWS / Azure",
      ),
      tr(
        "Data analytics, artificial intelligence & machine learning",
        "ದತ್ತಾಂಶ ವಿಶ್ಲೇಷಣೆ, ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಮತ್ತು ಯಂತ್ರ ಕಲಿಕೆ",
      ),
      tr("Biotechnology operations", "ಜೈವಿಕ ತಂತ್ರಜ್ಞಾನ ಕಾರ್ಯಾಚರಣೆಗಳು"),
      tr("System architecture", "ಸಿಸ್ಟಮ್ ಆರ್ಕಿಟೆಕ್ಚರ್"),
    ],
    focus: tr(
      "Planned focus: technical interviews, system design, code reviews, soft skills and one-to-one mentorship from experienced technology professionals around the world.",
      "ಉದ್ದೇಶಿತ ತರಬೇತಿ: ತಾಂತ್ರಿಕ ಸಂದರ್ಶನಗಳು, ಸಿಸ್ಟಮ್ ವಿನ್ಯಾಸ, ಕೋಡ್ ಪರಿಶೀಲನೆ, ಸಂವಹನ ಕೌಶಲ್ಯ ಮತ್ತು ಜಗತ್ತಿನ ವಿವಿಧೆಡೆ ಇರುವ ಅನುಭವಿ ತಂತ್ರಜ್ಞಾನ ವೃತ್ತಿಪರರಿಂದ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ.",
    ),
  },
  {
    id: "b" as const,
    title: tr(
      "Professional, banking & supervisory careers",
      "ವೃತ್ತಿಪರ, ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣಾ ವೃತ್ತಿಗಳು",
    ),
    shortTitle: tr("Professional careers", "ವೃತ್ತಿಪರ ಉದ್ಯೋಗಗಳು"),
    tag: tr(
      "Banking, accounting, administration & supervision",
      "ಬ್ಯಾಂಕಿಂಗ್, ಲೆಕ್ಕಪತ್ರ, ಆಡಳಿತ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ",
    ),
    audience: tr(
      "For commerce, science and arts graduates, diploma holders, site supervisors and aspiring administrative professionals.",
      "ವಾಣಿಜ್ಯ, ವಿಜ್ಞಾನ ಮತ್ತು ಕಲಾ ಪದವೀಧರರು, ಡಿಪ್ಲೊಮಾ ಪಡೆದವರು, ಕಾಮಗಾರಿ ಮೇಲ್ವಿಚಾರಕರು ಮತ್ತು ಆಡಳಿತ ವೃತ್ತಿ ಬಯಸುವವರಿಗಾಗಿ.",
    ),
    domains: [
      tr(
        "GST & advanced Tally accounting",
        "ಜಿಎಸ್‌ಟಿ ಮತ್ತು ಉನ್ನತ ಟ್ಯಾಲಿ ಲೆಕ್ಕಪತ್ರ",
      ),
      tr(
        "Banking operations & financial services",
        "ಬ್ಯಾಂಕಿಂಗ್ ಕಾರ್ಯಾಚರಣೆ ಮತ್ತು ಹಣಕಾಸು ಸೇವೆಗಳು",
      ),
      tr(
        "Human resources & payroll management",
        "ಮಾನವ ಸಂಪನ್ಮೂಲ ಮತ್ತು ವೇತನ ನಿರ್ವಹಣೆ",
      ),
      tr("Site supervision", "ಕಾಮಗಾರಿ ಸ್ಥಳದ ಮೇಲ್ವಿಚಾರಣೆ"),
      tr(
        "Civil & mechanical CAD drafting",
        "ಸಿವಿಲ್ ಮತ್ತು ಮೆಕ್ಯಾನಿಕಲ್ CAD ಚಿತ್ರರಚನೆ",
      ),
    ],
    focus: tr(
      "Planned focus: professional compliance standards, corporate administration and competitive examination preparation for KPSC, banking and SSC careers.",
      "ಉದ್ದೇಶಿತ ತರಬೇತಿ: ವೃತ್ತಿಪರ ಅನುಸರಣಾ ಮಾನದಂಡಗಳು, ಕಾರ್ಪೊರೇಟ್ ಆಡಳಿತ ಮತ್ತು ಕೆಪಿಎಸ್‌ಸಿ, ಬ್ಯಾಂಕಿಂಗ್ ಹಾಗೂ ಎಸ್‌ಎಸ್‌ಸಿ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳ ಸಿದ್ಧತೆ.",
    ),
  },
  {
    id: "c" as const,
    title: tr(
      "Skilled trades & technical support",
      "ನುರಿತ ವೃತ್ತಿಗಳು ಮತ್ತು ತಾಂತ್ರಿಕ ಸಹಾಯ",
    ),
    shortTitle: tr("Skilled trades", "ನುರಿತ ವೃತ್ತಿಗಳು"),
    tag: tr(
      "Industrial skills, retail, logistics & technical support",
      "ಕೈಗಾರಿಕಾ ಕೌಶಲ್ಯ, ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರ, ಸರಕು ಸಾಗಣೆ ಮತ್ತು ತಾಂತ್ರಿಕ ಸಹಾಯ",
    ),
    audience: tr(
      "For ITI graduates, polytechnic diploma holders, retail professionals and specialist industrial technicians.",
      "ಐಟಿಐ ಪದವೀಧರರು, ಪಾಲಿಟೆಕ್ನಿಕ್ ಡಿಪ್ಲೊಮಾ ಪಡೆದವರು, ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರ ವೃತ್ತಿಪರರು ಮತ್ತು ಪರಿಣತ ಕೈಗಾರಿಕಾ ತಂತ್ರಜ್ಞರಿಗಾಗಿ.",
    ),
    domains: [
      tr("Electrical work", "ವಿದ್ಯುತ್ ತಂತ್ರಜ್ಞರ ಕೆಲಸ"),
      tr("CNC machine operations", "ಸಿಎನ್‌ಸಿ ಯಂತ್ರ ಕಾರ್ಯಾಚರಣೆ"),
      tr(
        "Data entry & office productivity tools",
        "ದತ್ತಾಂಶ ನಮೂದು ಮತ್ತು ಕಚೇರಿ ಉತ್ಪಾದಕತಾ ಸಾಧನಗಳು",
      ),
      tr("Quality assurance testing", "ಗುಣಮಟ್ಟ ಭರವಸೆ ಪರೀಕ್ಷೆ"),
      tr(
        "Logistics & supply chain operations",
        "ಸರಕು ಸಾಗಣೆ ಮತ್ತು ಪೂರೈಕೆ ಸರಪಳಿ ಕಾರ್ಯಾಚರಣೆ",
      ),
      tr("Retail management", "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರ ನಿರ್ವಹಣೆ"),
    ],
    focus: tr(
      "Planned focus: practical skill upgrading, hands-on training, industrial safety standards and shop-floor productivity.",
      "ಉದ್ದೇಶಿತ ತರಬೇತಿ: ಪ್ರಾಯೋಗಿಕ ಕೌಶಲ್ಯವೃದ್ಧಿ, ಕೆಲಸದ ಮೂಲಕ ಕಲಿಕೆ, ಕೈಗಾರಿಕಾ ಸುರಕ್ಷತಾ ಮಾನದಂಡಗಳು ಮತ್ತು ಉತ್ಪಾದನಾ ಘಟಕದ ಕಾರ್ಯಕ್ಷಮತೆ.",
    ),
  },
  {
    id: "d" as const,
    title: tr(
      "Support services & facility operations",
      "ಸಹಾಯಕ ಸೇವೆಗಳು ಮತ್ತು ಸೌಲಭ್ಯ ಕಾರ್ಯಾಚರಣೆ",
    ),
    shortTitle: tr("Services & operations", "ಸೇವೆಗಳು ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ"),
    tag: tr(
      "Driving, security, hospitality & facility services",
      "ವಾಹನ ಚಾಲನೆ, ಭದ್ರತೆ, ಆತಿಥ್ಯ ಮತ್ತು ಸೌಲಭ್ಯ ಸೇವೆಗಳು",
    ),
    audience: tr(
      "For workers in the unorganised sector, commercial drivers, security personnel and facility operations teams.",
      "ಅಸಂಘಟಿತ ವಲಯದ ಕಾರ್ಮಿಕರು, ವಾಣಿಜ್ಯ ವಾಹನ ಚಾಲಕರು, ಭದ್ರತಾ ಸಿಬ್ಬಂದಿ ಮತ್ತು ಸೌಲಭ್ಯ ನಿರ್ವಹಣಾ ತಂಡಗಳಿಗಾಗಿ.",
    ),
    domains: [
      tr(
        "Commercial driving · auto, cab & delivery fleets",
        "ವಾಣಿಜ್ಯ ವಾಹನ ಚಾಲನೆ · ಆಟೋ, ಕ್ಯಾಬ್ ಮತ್ತು ವಿತರಣಾ ವಾಹನಗಳು",
      ),
      tr("Facility management", "ಸೌಲಭ್ಯ ನಿರ್ವಹಣೆ"),
      tr("Professional security operations", "ವೃತ್ತಿಪರ ಭದ್ರತಾ ಕಾರ್ಯಾಚರಣೆ"),
      tr(
        "Housekeeping & hospitality services",
        "ಸ್ವಚ್ಛತಾ ನಿರ್ವಹಣೆ ಮತ್ತು ಆತಿಥ್ಯ ಸೇವೆಗಳು",
      ),
    ],
    focus: tr(
      "Planned focus: basic digital literacy, smart apps and digital tools, understanding English workplace signs, customer service etiquette and awareness of labour rights.",
      "ಉದ್ದೇಶಿತ ತರಬೇತಿ: ಮೂಲಭೂತ ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆ, ಸ್ಮಾರ್ಟ್ ಆ್ಯಪ್‌ಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ಸಾಧನಗಳು, ಕೆಲಸದ ಸ್ಥಳದ ಇಂಗ್ಲಿಷ್ ಸೂಚನೆಗಳ ಅರಿವು, ಗ್ರಾಹಕ ಸೇವಾ ಶಿಷ್ಟಾಚಾರ ಮತ್ತು ಕಾರ್ಮಿಕ ಹಕ್ಕುಗಳ ಜಾಗೃತಿ.",
    ),
  },
];

export const skillFeatures: {
  title: Localized;
  description: Localized;
  items?: Localized[];
}[] = [
  {
    title: tr(
      "Skill assessments & digital credentials",
      "ಕೌಶಲ್ಯ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಡಿಜಿಟಲ್ ಪ್ರಮಾಣಪತ್ರಗಳು",
    ),
    description: tr(
      "Standardised assessments are planned for every Group A–D pathway, with a proposed “KaRaVe Certified Kannadiga Talent” digital credential and a dynamic QR code for employer verification. Accreditation and external recognition are goals to establish; credentials are not being issued yet.",
      "ಪ್ರತಿ ಗ್ರೂಪ್ A–D ಮಾರ್ಗಕ್ಕೂ ಪ್ರಮಾಣಿತ ಮೌಲ್ಯಮಾಪನವನ್ನು ಯೋಜಿಸಲಾಗಿದೆ. ಉದ್ಯೋಗದಾತರ ಪರಿಶೀಲನೆಗಾಗಿ ಡೈನಾಮಿಕ್ ಕ್ಯೂಆರ್ ಕೋಡ್ ಹೊಂದಿರುವ “ಕರವೇ ಪ್ರಮಾಣೀಕೃತ ಕನ್ನಡಿಗ ಪ್ರತಿಭೆ” ಡಿಜಿಟಲ್ ಪ್ರಮಾಣಪತ್ರ ಪ್ರಸ್ತಾವಿತವಾಗಿದೆ. ಮಾನ್ಯತೆ ಮತ್ತು ಬಾಹ್ಯ ಗುರುತಿಸುವಿಕೆಯನ್ನು ಸ್ಥಾಪಿಸುವುದು ಗುರಿಯಾಗಿದೆ; ಪ್ರಮಾಣಪತ್ರ ವಿತರಣೆ ಇನ್ನೂ ಆರಂಭವಾಗಿಲ್ಲ.",
    ),
  },
  {
    title: tr("Koushalya student chapters", "ಕೌಶಲ್ಯ ವಿದ್ಯಾರ್ಥಿ ಘಟಕಗಳು"),
    description: tr(
      "Proposed chapters in ITIs, polytechnics, diploma, degree and engineering colleges across Karnataka will bring learning closer to students, with final-year skill bootcamps ahead of campus placements.",
      "ಕರ್ನಾಟಕದ ಐಟಿಐ, ಪಾಲಿಟೆಕ್ನಿಕ್, ಡಿಪ್ಲೊಮಾ, ಪದವಿ ಮತ್ತು ಎಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜುಗಳಲ್ಲಿ ಪ್ರಸ್ತಾವಿತ ವಿದ್ಯಾರ್ಥಿ ಘಟಕಗಳು ಕಲಿಕೆಯನ್ನು ವಿದ್ಯಾರ್ಥಿಗಳ ಬಳಿಗೆ ತರುವ ಉದ್ದೇಶ ಹೊಂದಿವೆ. ಕ್ಯಾಂಪಸ್ ನೇಮಕಾತಿಗೂ ಮುನ್ನ ಅಂತಿಮ ವರ್ಷದ ಕೌಶಲ್ಯ ತರಬೇತಿ ಶಿಬಿರಗಳನ್ನು ಯೋಜಿಸಲಾಗಿದೆ.",
    ),
  },
  {
    title: tr("Special interest guilds", "ವಿಶೇಷ ಆಸಕ್ತಿ ವೃತ್ತಿಪರ ಬಳಗಗಳು"),
    description: tr(
      "Planned professional networks for continuous learning, peer exchange and domain expertise.",
      "ನಿರಂತರ ಕಲಿಕೆ, ಸಹವೃತ್ತಿಪರರೊಂದಿಗೆ ಜ್ಞಾನ ವಿನಿಮಯ ಮತ್ತು ಕ್ಷೇತ್ರ ಪರಿಣತಿಗಾಗಿ ಯೋಜಿತ ವೃತ್ತಿಪರ ಜಾಲಗಳು.",
    ),
    items: [
      tr(
        "IT & Technology Guild · Group A",
        "ಐಟಿ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಬಳಗ · ಗ್ರೂಪ್ A",
      ),
      tr(
        "Engineering & Manufacturing Guild · Groups B & C",
        "ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ಉತ್ಪಾದನಾ ಬಳಗ · ಗ್ರೂಪ್ B ಮತ್ತು C",
      ),
      tr(
        "Commerce & Banking Guild · Group B",
        "ವಾಣಿಜ್ಯ ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ಬಳಗ · ಗ್ರೂಪ್ B",
      ),
      tr(
        "Logistics & Services Guild · Groups C & D",
        "ಸರಕು ಸಾಗಣೆ ಮತ್ತು ಸೇವೆಗಳ ಬಳಗ · ಗ್ರೂಪ್ C ಮತ್ತು D",
      ),
    ],
  },
  {
    title: tr("Koushalya job & skill fairs", "ಕೌಶಲ್ಯ ಉದ್ಯೋಗ ಮೇಳಗಳು"),
    description: tr(
      "District-level and state-level expos are planned to connect candidates, trainers and corporate recruiters under one roof. Dates and participating organisations will be announced when confirmed.",
      "ಅಭ್ಯರ್ಥಿಗಳು, ತರಬೇತುದಾರರು ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ನೇಮಕಾತಿ ತಂಡಗಳನ್ನು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ ಸೇರಿಸುವ ಜಿಲ್ಲಾ ಮತ್ತು ರಾಜ್ಯ ಮಟ್ಟದ ಮೇಳಗಳನ್ನು ಯೋಜಿಸಲಾಗಿದೆ. ದೃಢೀಕರಣದ ನಂತರ ದಿನಾಂಕಗಳು ಮತ್ತು ಭಾಗವಹಿಸುವ ಸಂಸ್ಥೆಗಳನ್ನು ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.",
    ),
  },
];

export const mentoringTracks = [
  {
    title: tr(
      "Technology mentorship · Group A",
      "ತಂತ್ರಜ್ಞಾನ ಮಾರ್ಗದರ್ಶನ · ಗ್ರೂಪ್ A",
    ),
    description: tr(
      "A planned one-to-one track with experienced Kannadiga technology professionals to build technical confidence and prepare for industry opportunities.",
      "ತಾಂತ್ರಿಕ ಆತ್ಮವಿಶ್ವಾಸ ಬೆಳೆಸಿ ಉದ್ಯಮದ ಅವಕಾಶಗಳಿಗೆ ಸಿದ್ಧಗೊಳಿಸಲು ಅನುಭವಿ ಕನ್ನಡಿಗ ತಂತ್ರಜ್ಞಾನ ವೃತ್ತಿಪರರೊಂದಿಗೆ ಯೋಜಿತ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ.",
    ),
    items: [
      tr(
        "Technical guidance, code reviews & system design",
        "ತಾಂತ್ರಿಕ ಮಾರ್ಗದರ್ಶನ, ಕೋಡ್ ಪರಿಶೀಲನೆ ಮತ್ತು ಸಿಸ್ಟಮ್ ವಿನ್ಯಾಸ",
      ),
      tr(
        "Resume feedback & mock technical interviews",
        "ರೆಸ್ಯೂಮೆ ಸಲಹೆ ಮತ್ತು ಅಣಕು ತಾಂತ್ರಿಕ ಸಂದರ್ಶನಗಳು",
      ),
      tr(
        "Industry roadmaps & referral readiness",
        "ಉದ್ಯಮದ ವೃತ್ತಿ ಮಾರ್ಗಸೂಚಿಗಳು ಮತ್ತು ಉದ್ಯೋಗ ಶಿಫಾರಸಿಗೆ ಸಿದ್ಧತೆ",
      ),
    ],
  },
  {
    title: tr(
      "Professional mentorship · Group B",
      "ವೃತ್ತಿಪರ ಮಾರ್ಗದರ್ಶನ · ಗ್ರೂಪ್ B",
    ),
    description: tr(
      "A planned one-to-one track for graduates exploring finance, accounting, administration and public-service careers.",
      "ಹಣಕಾಸು, ಲೆಕ್ಕಪತ್ರ, ಆಡಳಿತ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸೇವಾ ವೃತ್ತಿಗಳನ್ನು ಬಯಸುವ ಪದವೀಧರರಿಗಾಗಿ ಯೋಜಿತ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ.",
    ),
    items: [
      tr(
        "Career roadmaps in finance & accounting",
        "ಹಣಕಾಸು ಮತ್ತು ಲೆಕ್ಕಪತ್ರ ಕ್ಷೇತ್ರದ ವೃತ್ತಿ ಮಾರ್ಗಸೂಚಿಗಳು",
      ),
      tr(
        "Government examination strategy",
        "ಸರ್ಕಾರಿ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳ ತಂತ್ರ",
      ),
      tr(
        "Resume feedback, interview practice & professional networks",
        "ರೆಸ್ಯೂಮೆ ಸಲಹೆ, ಸಂದರ್ಶನ ಅಭ್ಯಾಸ ಮತ್ತು ವೃತ್ತಿಪರ ಸಂಪರ್ಕಗಳು",
      ),
    ],
  },
  {
    title: tr(
      "Workplace workshops · Groups C & D",
      "ಕೆಲಸದ ಸ್ಥಳದ ಕಾರ್ಯಾಗಾರಗಳು · ಗ್ರೂಪ್ C ಮತ್ತು D",
    ),
    description: tr(
      "Planned group mentorship and practical workshops to help workers navigate workplace expectations and progress in their careers.",
      "ಕೆಲಸದ ಸ್ಥಳದ ನಿರೀಕ್ಷೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು ವೃತ್ತಿಯಲ್ಲಿ ಬೆಳೆಯಲು ಯೋಜಿತ ಗುಂಪು ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಕಾರ್ಯಾಗಾರಗಳು.",
    ),
    items: [
      tr(
        "Workplace communication & customer interaction",
        "ಕೆಲಸದ ಸ್ಥಳದ ಸಂವಹನ ಮತ್ತು ಗ್ರಾಹಕರೊಂದಿಗೆ ವ್ಯವಹಾರ",
      ),
      tr(
        "Rights awareness & workplace confidence",
        "ಹಕ್ಕುಗಳ ಜಾಗೃತಿ ಮತ್ತು ಕೆಲಸದ ಸ್ಥಳದ ಆತ್ಮವಿಶ್ವಾಸ",
      ),
      tr(
        "Career advancement & continued learning",
        "ವೃತ್ತಿ ಪ್ರಗತಿ ಮತ್ತು ನಿರಂತರ ಕಲಿಕೆ",
      ),
    ],
  },
];

export const flagships = [
  {
    id: "sanjeevini",
    title: tr("Karave Udyoga Sanjeevini", "ಕರವೇ ಉದ್ಯೋಗ ಸಂಜೀವಿನಿ"),
    kannadaName: "ಕಲಿಕೆ ಉದ್ಯೋಗ ಕೊಂಡಿ",
    subtitle: tr("Learning into experience", "ಕಲಿಕೆಯಿಂದ ಕೆಲಸದ ಅನುಭವದತ್ತ"),
    description: tr(
      "A proposed fast-track paid apprenticeship and internship program that helps first-time job seekers cross the “no experience, no job” barrier.",
      "ಮೊದಲ ಉದ್ಯೋಗ ಬಯಸುವವರು “ಅನುಭವವಿಲ್ಲದೆ ಉದ್ಯೋಗವಿಲ್ಲ” ಎಂಬ ಅಡೆತಡೆ ದಾಟಲು ನೆರವಾಗುವ ಪ್ರಸ್ತಾವಿತ ಗೌರವಧನ ಸಹಿತ ಅಪ್ರೆಂಟಿಸ್‌ಶಿಪ್ ಮತ್ತು ಇಂಟರ್ನ್‌ಶಿಪ್ ಕಾರ್ಯಕ್ರಮ.",
    ),
    features: [
      {
        title: tr(
          "3–6 month paid internships",
          "3–6 ತಿಂಗಳ ಗೌರವಧನ ಸಹಿತ ಇಂಟರ್ನ್‌ಶಿಪ್",
        ),
        description: tr(
          "Stipend-shared opportunities are planned with local MSMEs, manufacturing plants, startups and technology firms across Karnataka. Host partnerships and placements are yet to be established.",
          "ಕರ್ನಾಟಕದ ಸ್ಥಳೀಯ ಸೂಕ್ಷ್ಮ, ಸಣ್ಣ ಮತ್ತು ಮಧ್ಯಮ ಉದ್ಯಮಗಳು, ಉತ್ಪಾದನಾ ಘಟಕಗಳು, ನವೋದ್ಯಮಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆಗಳೊಂದಿಗೆ ಗೌರವಧನ ಹಂಚಿಕೆ ಆಧಾರಿತ ಅವಕಾಶಗಳನ್ನು ಯೋಜಿಸಲಾಗಿದೆ. ಆತಿಥೇಯ ಸಹಭಾಗಿತ್ವಗಳು ಮತ್ತು ನೇಮಕಾತಿಗಳನ್ನು ಇನ್ನೂ ಸ್ಥಾಪಿಸಬೇಕಿದೆ.",
        ),
      },
      {
        title: tr("Learning on the job", "ಕೆಲಸದ ಮೂಲಕ ಕಲಿಕೆ"),
        description: tr(
          "The proposed model connects classroom skills with supervised, practical work experience so freshers can build a stronger foundation for employment.",
          "ಪ್ರಸ್ತಾವಿತ ಮಾದರಿಯು ತರಗತಿಯ ಕೌಶಲ್ಯವನ್ನು ಮೇಲ್ವಿಚಾರಣೆಯಲ್ಲಿನ ಪ್ರಾಯೋಗಿಕ ಕೆಲಸದ ಅನುಭವದೊಂದಿಗೆ ಜೋಡಿಸಿ, ಹೊಸ ಅಭ್ಯರ್ಥಿಗಳ ಉದ್ಯೋಗ ಸಿದ್ಧತೆಗೆ ಬಲವಾದ ಅಡಿಪಾಯ ಒದಗಿಸುವ ಉದ್ದೇಶ ಹೊಂದಿದೆ.",
        ),
      },
      {
        title: tr(
          "Government scheme alignment to explore",
          "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆಯ ಪರಿಶೀಲನೆ",
        ),
        description: tr(
          "The vision proposes exploring alignment with Yuva Nidhi and GTTC apprenticeship initiatives, including possible co-certification. No government integration, approval or co-certification is confirmed.",
          "ಯುವ ನಿಧಿ ಮತ್ತು ಜಿಟಿಟಿಸಿ ಅಪ್ರೆಂಟಿಸ್‌ಶಿಪ್ ಉಪಕ್ರಮಗಳೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆ ಹಾಗೂ ಸಾಧ್ಯವಾದ ಜಂಟಿ ಪ್ರಮಾಣೀಕರಣವನ್ನು ಪರಿಶೀಲಿಸಲು ದೃಷ್ಟಿಪತ್ರ ಸೂಚಿಸುತ್ತದೆ. ಸರ್ಕಾರಿ ಏಕೀಕರಣ, ಅನುಮೋದನೆ ಅಥವಾ ಜಂಟಿ ಪ್ರಮಾಣೀಕರಣ ಇನ್ನೂ ದೃಢಪಟ್ಟಿಲ್ಲ.",
        ),
      },
    ],
  },
  {
    id: "udyami",
    title: tr(
      "Karave Swayam Udyoga & Udyami",
      "ಕರವೇ ಸ್ವಯಂ ಉದ್ಯೋಗ ಮತ್ತು ಉದ್ಯಮಿ",
    ),
    kannadaName: "ಸ್ವಯಂ ಉದ್ಯೋಗ ಮತ್ತು ಉದ್ಯಮಿ ಯೋಜನೆ",
    subtitle: tr("Turn an idea into a livelihood", "ಕಲ್ಪನೆಯಿಂದ ಜೀವನೋಪಾಯದತ್ತ"),
    description: tr(
      "A proposed incubation and business-support program for Kannadiga entrepreneurs and small businesses, from local services to technology ventures.",
      "ಸ್ಥಳೀಯ ಸೇವೆಗಳಿಂದ ತಂತ್ರಜ್ಞಾನ ಉದ್ಯಮಗಳವರೆಗೆ ಕನ್ನಡಿಗ ಉದ್ಯಮಿಗಳು ಮತ್ತು ಸಣ್ಣ ವ್ಯವಹಾರಗಳಿಗಾಗಿ ಪ್ರಸ್ತಾವಿತ ಉದ್ಯಮ ಪೋಷಣೆ ಮತ್ತು ಬೆಂಬಲ ಕಾರ್ಯಕ್ರಮ.",
    ),
    features: [
      {
        title: tr("Practical business incubation", "ಪ್ರಾಯೋಗಿಕ ಉದ್ಯಮ ಪೋಷಣೆ"),
        description: tr(
          "Planned guidance for electrical contracting, logistics fleets, retail franchises, software consultancies, food processing and other locally relevant ventures.",
          "ವಿದ್ಯುತ್ ಗುತ್ತಿಗೆ, ಸರಕು ಸಾಗಣೆ ವಾಹನಗಳು, ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರ ಫ್ರಾಂಚೈಸಿಗಳು, ಸಾಫ್ಟ್‌ವೇರ್ ಸಲಹಾ ಸಂಸ್ಥೆಗಳು, ಆಹಾರ ಸಂಸ್ಕರಣೆ ಮತ್ತು ಇತರ ಸ್ಥಳೀಯವಾಗಿ ಪ್ರಸ್ತುತವಾದ ಉದ್ಯಮಗಳಿಗೆ ಯೋಜಿತ ಮಾರ್ಗದರ್ಶನ.",
        ),
      },
      {
        title: tr(
          "Finance & loan application guidance",
          "ಹಣಕಾಸು ಮತ್ತು ಸಾಲ ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶನ",
        ),
        description: tr(
          "Proposed information and application guidance on Mudra loans, Stand-Up India, KVIC and MSME subsidies. Availability, eligibility and approval depend on the relevant scheme and lender; funding is not guaranteed.",
          "ಮುದ್ರಾ ಸಾಲ, ಸ್ಟ್ಯಾಂಡ್ ಅಪ್ ಇಂಡಿಯಾ, ಕೆವಿಐಸಿ ಮತ್ತು ಎಂಎಸ್‌ಎಂಇ ಸಹಾಯಧನಗಳ ಕುರಿತು ಪ್ರಸ್ತಾವಿತ ಮಾಹಿತಿ ಮತ್ತು ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶನ. ಲಭ್ಯತೆ, ಅರ್ಹತೆ ಮತ್ತು ಮಂಜೂರಾತಿ ಸಂಬಂಧಿತ ಯೋಜನೆ ಹಾಗೂ ಸಾಲದಾತರ ನಿಯಮಗಳಿಗೆ ಒಳಪಟ್ಟಿವೆ; ಹಣಕಾಸಿನ ಭರವಸೆ ನೀಡಲಾಗುವುದಿಲ್ಲ.",
        ),
      },
      {
        title: tr(
          "Vendor & supply chain connections",
          "ಪೂರೈಕೆದಾರ ಮತ್ತು ಪೂರೈಕೆ ಸರಪಳಿ ಸಂಪರ್ಕಗಳು",
        ),
        description: tr(
          "A planned network connecting Kannadiga-owned suppliers with corporate supply chains and industrial hubs in Karnataka, subject to future partner participation.",
          "ಭವಿಷ್ಯದ ಸಹಭಾಗಿಗಳ ಭಾಗವಹಿಸುವಿಕೆಗೆ ಒಳಪಟ್ಟು, ಕನ್ನಡಿಗ ಮಾಲೀಕತ್ವದ ಪೂರೈಕೆದಾರರನ್ನು ಕರ್ನಾಟಕದ ಕಾರ್ಪೊರೇಟ್ ಪೂರೈಕೆ ಸರಪಳಿಗಳು ಮತ್ತು ಕೈಗಾರಿಕಾ ಕೇಂದ್ರಗಳೊಂದಿಗೆ ಜೋಡಿಸಲು ಯೋಜಿತ ಸಂಪರ್ಕ ಜಾಲ.",
        ),
      },
    ],
  },
  {
    id: "fluency",
    title: tr(
      "Karave Basha & Corporate Fluency Hub",
      "ಕರವೇ ಭಾಷಾ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಸಂವಹನ ಕೇಂದ್ರ",
    ),
    kannadaName: "ಕಾರ್ಪೊರೇಟ್ ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಸೇತು",
    subtitle: tr(
      "Confidence in every conversation",
      "ಪ್ರತಿ ಸಂಭಾಷಣೆಯಲ್ಲೂ ಆತ್ಮವಿಶ್ವಾಸ",
    ),
    description: tr(
      "A proposed soft-skills and professional communication program helping youth adapt to the workplace while staying connected to their Kannada roots.",
      "ಕನ್ನಡದ ಬೇರುಗಳೊಂದಿಗೆ ಸಂಪರ್ಕ ಉಳಿಸಿಕೊಂಡು ಕೆಲಸದ ವಾತಾವರಣಕ್ಕೆ ಹೊಂದಿಕೊಳ್ಳಲು ಯುವಜನರಿಗೆ ನೆರವಾಗುವ ಪ್ರಸ್ತಾವಿತ ಸಂವಹನ ಕೌಶಲ್ಯ ಮತ್ತು ವೃತ್ತಿಪರ ಭಾಷಾ ಕಾರ್ಯಕ್ರಮ.",
    ),
    features: [
      {
        title: tr(
          "Kannada & English for work",
          "ಕೆಲಸಕ್ಕಾಗಿ ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್",
        ),
        description: tr(
          "Planned training in functional corporate English and professional Kannada business communication, including the needs of HR, public relations and administration.",
          "ಮಾನವ ಸಂಪನ್ಮೂಲ, ಸಾರ್ವಜನಿಕ ಸಂಪರ್ಕ ಮತ್ತು ಆಡಳಿತದ ಅಗತ್ಯಗಳನ್ನೂ ಒಳಗೊಂಡಂತೆ, ಕೆಲಸಕ್ಕೆ ಅಗತ್ಯವಾದ ಕಾರ್ಪೊರೇಟ್ ಇಂಗ್ಲಿಷ್ ಮತ್ತು ವೃತ್ತಿಪರ ಕನ್ನಡ ವ್ಯವಹಾರ ಸಂವಹನದಲ್ಲಿ ಯೋಜಿತ ತರಬೇತಿ.",
        ),
      },
      {
        title: tr(
          "Interview & workplace preparation",
          "ಸಂದರ್ಶನ ಮತ್ತು ಕೆಲಸದ ಸ್ಥಳದ ಸಿದ್ಧತೆ",
        ),
        description: tr(
          "Mock interviews, resume formatting, LinkedIn profile improvement, professional etiquette and adapting to corporate culture are proposed learning topics.",
          "ಅಣಕು ಸಂದರ್ಶನಗಳು, ರೆಸ್ಯೂಮೆ ವಿನ್ಯಾಸ, ಲಿಂಕ್ಡ್‌ಇನ್ ಪ್ರೊಫೈಲ್ ಸುಧಾರಣೆ, ವೃತ್ತಿಪರ ಶಿಷ್ಟಾಚಾರ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಸಂಸ್ಕೃತಿಗೆ ಹೊಂದಿಕೊಳ್ಳುವುದು ಪ್ರಸ್ತಾವಿತ ಕಲಿಕಾ ವಿಷಯಗಳಾಗಿವೆ.",
        ),
      },
      {
        title: tr(
          "Confidence for rural talent",
          "ಗ್ರಾಮೀಣ ಪ್ರತಿಭೆಗೆ ಆತ್ಮವಿಶ್ವಾಸ",
        ),
        description: tr(
          "The program aims to help capable young people from non-metro districts participate confidently in professional opportunities without losing their cultural identity.",
          "ಮಹಾನಗರಗಳ ಹೊರಗಿನ ಜಿಲ್ಲೆಗಳ ಸಮರ್ಥ ಯುವಜನರು ತಮ್ಮ ಸಾಂಸ್ಕೃತಿಕ ಗುರುತನ್ನು ಉಳಿಸಿಕೊಂಡು ವೃತ್ತಿಪರ ಅವಕಾಶಗಳಲ್ಲಿ ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಪಾಲ್ಗೊಳ್ಳಲು ನೆರವಾಗುವುದು ಕಾರ್ಯಕ್ರಮದ ಉದ್ದೇಶ.",
        ),
      },
    ],
  },
];

export const stakeholders = [
  {
    title: tr("Kannadiga youth", "ಕನ್ನಡಿಗ ಯುವಜನರು"),
    description: tr(
      "The vision brings together free or subsidised upskilling, individual mentorship, proposed skill credentials, paid internships and job referrals. Availability and program terms will be announced at launch.",
      "ಉಚಿತ ಅಥವಾ ಸಹಾಯಧನದ ಕೌಶಲ್ಯವೃದ್ಧಿ, ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ, ಪ್ರಸ್ತಾವಿತ ಕೌಶಲ್ಯ ಪ್ರಮಾಣಪತ್ರಗಳು, ಗೌರವಧನ ಸಹಿತ ಇಂಟರ್ನ್‌ಶಿಪ್ ಮತ್ತು ಉದ್ಯೋಗ ಶಿಫಾರಸುಗಳನ್ನು ಒಂದೆಡೆ ತರುವುದು ಉದ್ದೇಶ. ಲಭ್ಯತೆ ಮತ್ತು ಕಾರ್ಯಕ್ರಮದ ಷರತ್ತುಗಳನ್ನು ಆರಂಭದ ವೇಳೆ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.",
    ),
  },
  {
    title: tr(
      "Corporates & HR teams",
      "ಕಾರ್ಪೊರೇಟ್ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಮಾನವ ಸಂಪನ್ಮೂಲ ತಂಡಗಳು",
    ),
    description: tr(
      "A proposed route to assessed local talent and structured employee-volunteering opportunities, helping employers engage with Karnataka’s workforce development goals.",
      "ಮೌಲ್ಯಮಾಪನಗೊಂಡ ಸ್ಥಳೀಯ ಪ್ರತಿಭೆ ಮತ್ತು ವ್ಯವಸ್ಥಿತ ಉದ್ಯೋಗಿ ಸ್ವಯಂಸೇವಾ ಅವಕಾಶಗಳ ಪ್ರಸ್ತಾವಿತ ಮಾರ್ಗವು ಕರ್ನಾಟಕದ ಉದ್ಯೋಗಿ ಅಭಿವೃದ್ಧಿ ಗುರಿಗಳಲ್ಲಿ ಸಂಸ್ಥೆಗಳು ಪಾಲ್ಗೊಳ್ಳಲು ನೆರವಾಗುವ ಉದ್ದೇಶ ಹೊಂದಿದೆ.",
    ),
  },
  {
    title: tr(
      "Investors & CSR partners",
      "ಹೂಡಿಕೆದಾರರು ಮತ್ತು ಸಿಎಸ್‌ಆರ್ ಸಹಭಾಗಿಗಳು",
    ),
    description: tr(
      "Planned opportunities to support employability and industrial productivity through skill-bootcamp sponsorship, employee mentors and youth-development initiatives. CSR eligibility must be evaluated for each engagement.",
      "ಕೌಶಲ್ಯ ಶಿಬಿರಗಳ ಪ್ರಾಯೋಜಕತ್ವ, ಉದ್ಯೋಗಿ ಮಾರ್ಗದರ್ಶಕರು ಮತ್ತು ಯುವಜನ ಅಭಿವೃದ್ಧಿ ಉಪಕ್ರಮಗಳ ಮೂಲಕ ಉದ್ಯೋಗಾರ್ಹತೆ ಹಾಗೂ ಕೈಗಾರಿಕಾ ಉತ್ಪಾದಕತೆಯನ್ನು ಬೆಂಬಲಿಸಲು ಯೋಜಿತ ಅವಕಾಶಗಳು. ಪ್ರತಿ ಪಾಲುದಾರಿಕೆಗೆ ಸಿಎಸ್‌ಆರ್ ಅರ್ಹತೆಯನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಪರಿಶೀಲಿಸಬೇಕಿದೆ.",
    ),
  },
  {
    title: tr("Karnataka Rakshana Vedike", "ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ"),
    description: tr(
      "A vision to turn advocacy into practical economic empowerment and build a skilled grassroots network across the document’s intended scope of all 31 Karnataka districts.",
      "ಆಗ್ರಹವನ್ನು ಪ್ರಾಯೋಗಿಕ ಆರ್ಥಿಕ ಸಬಲೀಕರಣವಾಗಿ ಪರಿವರ್ತಿಸಿ, ದೃಷ್ಟಿಪತ್ರದ ಉದ್ದೇಶಿತ ವ್ಯಾಪ್ತಿಯಾದ ಕರ್ನಾಟಕದ ಎಲ್ಲ 31 ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಕೌಶಲ್ಯ ಹೊಂದಿದ ತಳಮಟ್ಟದ ಜಾಲ ಕಟ್ಟುವ ಆಶಯ.",
    ),
  },
];

export const roadmap = [
  {
    phase: "01",
    period: tr(
      "Phase 1 · Q1–Q2 planning reference",
      "ಹಂತ 1 · ಮೊದಲ–ಎರಡನೇ ತ್ರೈಮಾಸಿಕದ ಯೋಜನಾ ಉಲ್ಲೇಖ",
    ),
    title: tr("Build the foundation", "ಅಡಿಪಾಯ ನಿರ್ಮಾಣ"),
    description: tr(
      "Proposed platform launch, an initial Group A–D candidate cohort and corporate-mentor onboarding. These are the vision document’s 2026–2027 targets, not completed milestones or confirmed launch dates.",
      "ಪ್ರಸ್ತಾವಿತ ವೇದಿಕೆಯ ಆರಂಭ, ಗ್ರೂಪ್ A–D ಅಭ್ಯರ್ಥಿಗಳ ಮೊದಲ ತಂಡ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಮಾರ್ಗದರ್ಶಕರ ಸೇರ್ಪಡೆ. ಇವು ದೃಷ್ಟಿಪತ್ರದ 2026–2027 ಗುರಿಗಳಾಗಿವೆ; ಪೂರ್ಣಗೊಂಡ ಸಾಧನೆಗಳೂ ಅಲ್ಲ, ದೃಢಪಟ್ಟ ಆರಂಭ ದಿನಾಂಕಗಳೂ ಅಲ್ಲ.",
    ),
    targets: [
      {
        value: "10,000",
        label: tr("candidate enrollment target", "ಅಭ್ಯರ್ಥಿಗಳ ನೋಂದಣಿ ಗುರಿ"),
      },
      {
        value: "100+",
        label: tr("corporate mentor target", "ಕಾರ್ಪೊರೇಟ್ ಮಾರ್ಗದರ್ಶಕರ ಗುರಿ"),
      },
    ],
  },
  {
    phase: "02",
    period: tr(
      "Phase 2 · Q3 planning reference",
      "ಹಂತ 2 · ಮೂರನೇ ತ್ರೈಮಾಸಿಕದ ಯೋಜನಾ ಉಲ್ಲೇಖ",
    ),
    title: tr(
      "Connect learning to industry",
      "ಕಲಿಕೆಯನ್ನು ಉದ್ಯಮದೊಂದಿಗೆ ಜೋಡಿಸುವುದು",
    ),
    description: tr(
      "Proposed rollout of Karave Udyoga Sanjeevini apprenticeships and college student chapters. Partnerships and chapter locations remain to be established.",
      "ಕರವೇ ಉದ್ಯೋಗ ಸಂಜೀವಿನಿ ಅಪ್ರೆಂಟಿಸ್‌ಶಿಪ್‌ಗಳು ಮತ್ತು ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿ ಘಟಕಗಳ ಪ್ರಸ್ತಾವಿತ ವಿಸ್ತರಣೆ. ಸಹಭಾಗಿತ್ವಗಳು ಮತ್ತು ಘಟಕಗಳ ಸ್ಥಳಗಳನ್ನು ಇನ್ನೂ ಸ್ಥಾಪಿಸಬೇಕಿದೆ.",
    ),
    targets: [
      {
        value: "500+",
        label: tr("MSME partner target", "ಎಂಎಸ್‌ಎಂಇ ಸಹಭಾಗಿಗಳ ಗುರಿ"),
      },
      {
        value: "50",
        label: tr("student chapter target", "ವಿದ್ಯಾರ್ಥಿ ಘಟಕಗಳ ಗುರಿ"),
      },
    ],
  },
  {
    phase: "03",
    period: tr(
      "Phase 3 · Q4 planning reference",
      "ಹಂತ 3 · ನಾಲ್ಕನೇ ತ್ರೈಮಾಸಿಕದ ಯೋಜನಾ ಉಲ್ಲೇಖ",
    ),
    title: tr(
      "Grow opportunity across Karnataka",
      "ಕರ್ನಾಟಕದಾದ್ಯಂತ ಅವಕಾಶಗಳ ವಿಸ್ತರಣೆ",
    ),
    description: tr(
      "Proposed Swayam Udyoga entrepreneurship incubator and a wider candidate network. The document does not assign individual years to its planning quarters; the schedule is indicative.",
      "ಪ್ರಸ್ತಾವಿತ ಸ್ವಯಂ ಉದ್ಯೋಗ ಉದ್ಯಮ ಪೋಷಣಾ ಕೇಂದ್ರ ಮತ್ತು ವಿಶಾಲ ಅಭ್ಯರ್ಥಿ ಜಾಲ. ದೃಷ್ಟಿಪತ್ರವು ಯೋಜನಾ ತ್ರೈಮಾಸಿಕಗಳಿಗೆ ಪ್ರತ್ಯೇಕ ವರ್ಷಗಳನ್ನು ನಿಗದಿಪಡಿಸಿಲ್ಲ; ವೇಳಾಪಟ್ಟಿ ಸೂಚನಾತ್ಮಕವಾಗಿದೆ.",
    ),
    targets: [
      {
        value: "100,000+",
        label: tr("candidate network target", "ಅಭ್ಯರ್ಥಿ ಜಾಲದ ಗುರಿ"),
      },
      {
        value: "31",
        label: tr(
          "districts of intended reach",
          "ಉದ್ದೇಶಿತ ವ್ಯಾಪ್ತಿಯ ಜಿಲ್ಲೆಗಳು",
        ),
      },
    ],
  },
];

export const roles = [
  {
    id: "candidate" as const,
    title: tr("Candidate", "ಅಭ್ಯರ್ಥಿ"),
    description: tr(
      "Explore a career pathway that matches your education, experience and ambitions.",
      "ನಿಮ್ಮ ಶಿಕ್ಷಣ, ಅನುಭವ ಮತ್ತು ಆಶಯಗಳಿಗೆ ಹೊಂದುವ ವೃತ್ತಿ ಮಾರ್ಗವನ್ನು ಅನ್ವೇಷಿಸಿ.",
    ),
    benefits: [
      tr(
        "Group A–D skill-development pathways",
        "ಗ್ರೂಪ್ A–D ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿ ಮಾರ್ಗಗಳು",
      ),
      tr(
        "Proposed assessments, credentials & career preparation",
        "ಪ್ರಸ್ತಾವಿತ ಮೌಲ್ಯಮಾಪನ, ಪ್ರಮಾಣಪತ್ರ ಮತ್ತು ವೃತ್ತಿ ಸಿದ್ಧತೆ",
      ),
      tr(
        "Planned internships, fairs & job referrals",
        "ಯೋಜಿತ ಇಂಟರ್ನ್‌ಶಿಪ್, ಮೇಳಗಳು ಮತ್ತು ಉದ್ಯೋಗ ಶಿಫಾರಸುಗಳು",
      ),
    ],
    action: tr("Register as a candidate", "ಅಭ್ಯರ್ಥಿಯಾಗಿ ನೋಂದಣಿ"),
  },
  {
    id: "corporate" as const,
    title: tr("Corporate / employer", "ಕಾರ್ಪೊರೇಟ್ ಸಂಸ್ಥೆ / ಉದ್ಯೋಗದಾತ"),
    description: tr(
      "Explore ways to connect local talent with industry needs and support workforce development.",
      "ಸ್ಥಳೀಯ ಪ್ರತಿಭೆಯನ್ನು ಉದ್ಯಮದ ಅಗತ್ಯಗಳೊಂದಿಗೆ ಜೋಡಿಸಿ ಉದ್ಯೋಗಿ ಅಭಿವೃದ್ಧಿಯನ್ನು ಬೆಂಬಲಿಸುವ ಮಾರ್ಗಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
    ),
    benefits: [
      tr(
        "Future access to assessed local talent",
        "ಮೌಲ್ಯಮಾಪನಗೊಂಡ ಸ್ಥಳೀಯ ಪ್ರತಿಭೆಗೆ ಭವಿಷ್ಯದ ಸಂಪರ್ಕ",
      ),
      tr(
        "Proposed internships & recruitment participation",
        "ಪ್ರಸ್ತಾವಿತ ಇಂಟರ್ನ್‌ಶಿಪ್ ಮತ್ತು ನೇಮಕಾತಿಯಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆ",
      ),
      tr(
        "Employee volunteering & skill-bootcamp sponsorship",
        "ಉದ್ಯೋಗಿಗಳ ಸ್ವಯಂಸೇವೆ ಮತ್ತು ಕೌಶಲ್ಯ ಶಿಬಿರಗಳ ಪ್ರಾಯೋಜಕತ್ವ",
      ),
    ],
    action: tr("Register your organisation", "ನಿಮ್ಮ ಸಂಸ್ಥೆಯ ನೋಂದಣಿ"),
  },
  {
    id: "mentor" as const,
    title: tr("Mentor", "ಮಾರ್ಗದರ್ಶಕ"),
    description: tr(
      "Share your experience as a Kannadiga technology professional, HR leader, manager or civil servant. The proposed commitment is 1–2 hours per month.",
      "ಕನ್ನಡಿಗ ತಂತ್ರಜ್ಞಾನ ವೃತ್ತಿಪರ, ಮಾನವ ಸಂಪನ್ಮೂಲ ನಾಯಕ, ವ್ಯವಸ್ಥಾಪಕ ಅಥವಾ ನಾಗರಿಕ ಸೇವಾ ಅಧಿಕಾರಿಯಾಗಿ ನಿಮ್ಮ ಅನುಭವ ಹಂಚಿಕೊಳ್ಳಿ. ಪ್ರಸ್ತಾವಿತ ಸಮಯದ ಕೊಡುಗೆ ತಿಂಗಳಿಗೆ 1–2 ಗಂಟೆಗಳು.",
    ),
    benefits: [
      tr(
        "One-to-one guidance for Group A & B aspirants",
        "ಗ್ರೂಪ್ A ಮತ್ತು B ಆಕಾಂಕ್ಷಿಗಳಿಗೆ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ",
      ),
      tr(
        "Resume feedback, mock interviews & career roadmaps",
        "ರೆಸ್ಯೂಮೆ ಸಲಹೆ, ಅಣಕು ಸಂದರ್ಶನಗಳು ಮತ್ತು ವೃತ್ತಿ ಮಾರ್ಗಸೂಚಿಗಳು",
      ),
      tr(
        "Group workshops & corporate volunteering opportunities",
        "ಗುಂಪು ಕಾರ್ಯಾಗಾರಗಳು ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಸ್ವಯಂಸೇವಾ ಅವಕಾಶಗಳು",
      ),
    ],
    action: tr("Register as a mentor", "ಮಾರ್ಗದರ್ಶಕರಾಗಿ ನೋಂದಣಿ"),
  },
  {
    id: "mentee" as const,
    title: tr("Mentee", "ಮಾರ್ಗದರ್ಶನ ಬಯಸುವವರು"),
    description: tr(
      "Find the direction and professional connections to take your next career step. Individual mentoring is planned for Group A & B aspirants, with group workshops for Groups C & D.",
      "ನಿಮ್ಮ ವೃತ್ತಿಯ ಮುಂದಿನ ಹೆಜ್ಜೆಗೆ ದಿಕ್ಕು ಮತ್ತು ವೃತ್ತಿಪರ ಸಂಪರ್ಕಗಳನ್ನು ಕಂಡುಕೊಳ್ಳಿ. ಗ್ರೂಪ್ A ಮತ್ತು B ಆಕಾಂಕ್ಷಿಗಳಿಗೆ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಹಾಗೂ ಗ್ರೂಪ್ C ಮತ್ತು D ಗಾಗಿ ಗುಂಪು ಕಾರ್ಯಾಗಾರಗಳನ್ನು ಯೋಜಿಸಲಾಗಿದೆ.",
    ),
    benefits: [
      tr(
        "Guidance from experienced professionals",
        "ಅನುಭವಿ ವೃತ್ತಿಪರರಿಂದ ಮಾರ್ಗದರ್ಶನ",
      ),
      tr(
        "Interview confidence & career planning",
        "ಸಂದರ್ಶನದ ಆತ್ಮವಿಶ್ವಾಸ ಮತ್ತು ವೃತ್ತಿ ಯೋಜನೆ",
      ),
      tr(
        "Technical, professional & workplace learning tracks",
        "ತಾಂತ್ರಿಕ, ವೃತ್ತಿಪರ ಮತ್ತು ಕೆಲಸದ ಸ್ಥಳದ ಕಲಿಕಾ ಮಾರ್ಗಗಳು",
      ),
    ],
    action: tr("Register as a mentee", "ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ನೋಂದಣಿ"),
  },
  {
    id: "admin" as const,
    title: tr("Administrator", "ಆಡಳಿತಗಾರ"),
    description: tr(
      "An entry point for future authorised platform administrators and program coordinators. Administrator registration and access are not available yet.",
      "ಭವಿಷ್ಯದ ಅಧಿಕೃತ ವೇದಿಕೆ ಆಡಳಿತಗಾರರು ಮತ್ತು ಕಾರ್ಯಕ್ರಮ ಸಂಯೋಜಕರಿಗಾಗಿ ಪ್ರವೇಶ ಆಯ್ಕೆ. ಆಡಳಿತಗಾರರ ನೋಂದಣಿ ಮತ್ತು ಪ್ರವೇಶ ಇನ್ನೂ ಲಭ್ಯವಿಲ್ಲ.",
    ),
    benefits: [
      tr("Future program coordination", "ಭವಿಷ್ಯದ ಕಾರ್ಯಕ್ರಮ ಸಂಯೋಜನೆ"),
      tr(
        "Future chapter & partner coordination",
        "ಭವಿಷ್ಯದ ವಿದ್ಯಾರ್ಥಿ ಘಟಕ ಮತ್ತು ಸಹಭಾಗಿ ಸಂಯೋಜನೆ",
      ),
      tr(
        "Access arrangements to be defined before launch",
        "ಆರಂಭಕ್ಕೂ ಮುನ್ನ ನಿರ್ಧರಿಸಲಾಗುವ ಪ್ರವೇಶ ವ್ಯವಸ್ಥೆ",
      ),
    ],
    action: tr("Administrator registration", "ಆಡಳಿತಗಾರರ ನೋಂದಣಿ"),
  },
];
