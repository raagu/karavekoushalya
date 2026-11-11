import { intro, leadershipDescription, type Lang } from "./siteContent";
import { pagePath, type SiteLocation, type Page } from "./routing";

export const siteOrigin = "https://karavekoushalya.com";
export const crawlPolicy =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
export const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  "upgrade-insecure-requests",
].join("; ");

const labels: Record<Page, Record<Lang, string>> = {
  home: { en: "Home", kn: "ಮುಖಪುಟ" },
  about: { en: "About us", kn: "ನಮ್ಮ ಬಗ್ಗೆ" },
  programs: { en: "Our programs", kn: "ಕಾರ್ಯಕ್ರಮಗಳು" },
  join: { en: "Get involved", kn: "ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ" },
};

const titles: Record<Page, Record<Lang, string>> = {
  home: {
    en: "Karave Koushalya | Skills & Career Guidance for Kannadigas",
    kn: "ಕರವೇ ಕೌಶಲ್ಯ | ಕನ್ನಡಿಗರಿಗೆ ಕೌಶಲ್ಯ ಮತ್ತು ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ",
  },
  about: {
    en: "About Karave Koushalya | Karnataka Rakshana Vedike Initiative",
    kn: "ಕರವೇ ಕೌಶಲ್ಯದ ಬಗ್ಗೆ | ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಉಪಕ್ರಮ",
  },
  programs: {
    en: "Skills, Career Guidance & Mentorship Programs | Karave Koushalya",
    kn: "ಕೌಶಲ್ಯ ಮತ್ತು ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ ಕಾರ್ಯಕ್ರಮಗಳು | ಕರವೇ ಕೌಶಲ್ಯ",
  },
  join: {
    en: "Guidance & Mentor Registration | Karave Koushalya",
    kn: "ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಮಾರ್ಗದರ್ಶಕರ ನೋಂದಣಿ | ಕರವೇ ಕೌಶಲ್ಯ",
  },
};

const descriptions: Record<Page, Record<Lang, string>> = {
  home: intro,
  about: leadershipDescription,
  programs: {
    en: "Explore Karave Koushalya’s planned skills and certification, career guidance and mentorship, employment and entrepreneurship programs for Kannadigas.",
    kn: "ಕನ್ನಡಿಗರಿಗಾಗಿ ಕರವೇ ಕೌಶಲ್ಯದ ಪ್ರಸ್ತಾವಿತ ಕೌಶಲ್ಯ ಮತ್ತು ಪ್ರಮಾಣೀಕರಣ, ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ, ಉದ್ಯೋಗ ಮತ್ತು ಉದ್ಯಮಶೀಲತೆ ಕಾರ್ಯಕ್ರಮಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.",
  },
  join: {
    en: "Register for career guidance or contribute as a mentor through Karave Koushalya’s Google Forms. Company and partner registration is coming soon.",
    kn: "ಕರವೇ ಕೌಶಲ್ಯದ Google Forms ಮೂಲಕ ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಅಥವಾ ಮಾರ್ಗದರ್ಶಕರಾಗಿ ನೋಂದಾಯಿಸಿ. ಕಂಪನಿಗಳು ಮತ್ತು ಸಹಭಾಗಿಗಳ ನೋಂದಣಿ ಶೀಘ್ರದಲ್ಲೇ.",
  },
};

export function canonicalUrl(location: SiteLocation): string {
  return `${siteOrigin}${pagePath({ ...location, focus: undefined }, "/")}`;
}

export function metadata(location: SiteLocation) {
  const { lang, page } = location;
  const canonical = canonicalUrl(location);
  const organizationId = `${siteOrigin}/#organization`;
  const websiteId = `${siteOrigin}/#website`;
  const image = `${siteOrigin}/images/karave-koushalya-social.png`;
  const alternates = (["kn", "en", "x-default"] as const).map((language) => ({
    language,
    href: canonicalUrl({ ...location, lang: language === "en" ? "en" : "kn" }),
  }));
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Karave Koushalya",
        alternateName: "ಕರವೇ ಕೌಶಲ್ಯ",
        url: `${siteOrigin}/`,
        logo: image,
        description: intro[lang],
        parentOrganization: {
          "@type": "Organization",
          name: "Karnataka Rakshana Vedike",
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${siteOrigin}/`,
        name: "Karave Koushalya",
        alternateName: "ಕರವೇ ಕೌಶಲ್ಯ",
        inLanguage: ["kn", "en"],
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: titles[page][lang],
        description: descriptions[page][lang],
        inLanguage: lang,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
      },
      ...(page === "home"
        ? []
        : [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: labels.home[lang],
                  item: canonicalUrl({ lang, page: "home" }),
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: labels[page][lang],
                  item: canonical,
                },
              ],
            },
          ]),
    ],
  };
  return {
    title: titles[page][lang],
    description: descriptions[page][lang],
    canonical,
    image,
    alternates,
    structuredData,
    lang,
  };
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ]!,
  );
}

// The build and client navigation share exactly the same metadata.
export function renderMetadata(location: SiteLocation): string {
  const data = metadata(location);
  const meta = (attribute: string, name: string, value: string) =>
    `<meta ${attribute}="${name}" content="${escapeHtml(value)}" data-seo>`;
  return [
    `<title>${escapeHtml(data.title)}</title>`,
    meta("name", "description", data.description),
    meta("name", "robots", crawlPolicy),
    `<link rel="canonical" href="${data.canonical}" data-seo>`,
    ...data.alternates.map(
      ({ language, href }) =>
        `<link rel="alternate" hreflang="${language}" href="${href}" data-seo>`,
    ),
    meta("property", "og:type", "website"),
    meta("property", "og:site_name", "Karave Koushalya"),
    meta("property", "og:title", data.title),
    meta("property", "og:description", data.description),
    meta("property", "og:url", data.canonical),
    meta("property", "og:locale", data.lang === "kn" ? "kn_IN" : "en_IN"),
    meta(
      "property",
      "og:locale:alternate",
      data.lang === "kn" ? "en_IN" : "kn_IN",
    ),
    meta("property", "og:image", data.image),
    meta("property", "og:image:width", "512"),
    meta("property", "og:image:height", "512"),
    meta(
      "property",
      "og:image:alt",
      data.lang === "kn" ? "ಕರವೇ ಕೌಶಲ್ಯ ಲಾಂಛನ" : "Karave Koushalya logo",
    ),
    meta("name", "twitter:card", "summary"),
    meta("name", "twitter:title", data.title),
    meta("name", "twitter:description", data.description),
    meta("name", "twitter:image", data.image),
    `<script type="application/ld+json" data-seo>${JSON.stringify(data.structuredData).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
}

export function updateMetadata(location: SiteLocation): void {
  // Only trusted, build-owned metadata is parsed; visitor input is never HTML.
  const head = new DOMParser().parseFromString(
    `<head>${renderMetadata(location)}</head>`,
    "text/html",
  ).head;
  document.head
    .querySelectorAll("[data-seo], title")
    .forEach((node) => node.remove());
  document.head.append(...Array.from(head.children));
  document.documentElement.lang = location.lang;
}
