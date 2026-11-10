import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Compass,
  Handshake,
  Languages,
  Menu,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import {
  copy,
  futureSteps,
  guidanceRegistrationUrl,
  intro,
  leadershipDescription,
  mission,
  programAreas,
  roles,
  vision,
  type Lang,
  type Localized,
} from "./siteContent";

type Page = "home" | "about" | "programs" | "join";
type RoleId = (typeof roles)[number]["id"];
type Route = { page: Page; focus?: string };
type LanguageProps = { lang: Lang };
const nav = {
  home: copy("Home", "ಮುಖಪುಟ"),
  about: copy("About us", "ನಮ್ಮ ಬಗ್ಗೆ"),
  programs: copy("Our programs", "ಕಾರ್ಯಕ್ರಮಗಳು"),
  join: copy("Get involved", "ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ"),
};
const programIcons = [BookOpen, Users, BriefcaseBusiness];
const roleIcons = {
  mentee: Compass,
  mentor: Users,
  corporate: Building2,
  admin: ShieldCheck,
};
const logo = `${import.meta.env.BASE_URL}images/karave-koushalya-logo-v3.png`;

function readRoute(): Route {
  const [name, query = ""] = window.location.hash
    .replace(/^#\/?/, "")
    .split("?");
  if (name === "pathways") return { page: "programs", focus: "skills" };
  if (name === "mentorship") return { page: "programs", focus: "guidance" };
  const page = (["home", "about", "programs", "join"] as string[]).includes(
    name,
  )
    ? (name as Page)
    : "home";
  const focus = new URLSearchParams(query).get("focus");
  return {
    page,
    focus: programAreas.some((program) => program.id === focus)
      ? focus!
      : undefined,
  };
}

function readLanguage(): Lang {
  try {
    return localStorage.getItem("karave-language") === "en" ? "en" : "kn";
  } catch {
    return "kn";
  }
}

function Brand({ lang, footer = false }: LanguageProps & { footer?: boolean }) {
  return (
    <a
      className={`brand${footer ? " brand-footer" : ""}`}
      href="#/home"
      aria-label={
        lang === "en" ? "Karave Koushalya home" : "ಕರವೇ ಕೌಶಲ್ಯ ಮುಖಪುಟ"
      }
    >
      <span className="brand-icon" aria-hidden="true">
        <img src={logo} width="1254" height="1254" alt="" />
      </span>
      <span className="brand-text">
        <strong className="brand-title" data-brand-logotype="true">
          <span className="brand-karave" data-brand-logotype="true">
            {lang === "en" ? "Karave" : "ಕರವೇ"}
          </span>{" "}
          <span className="brand-koushalya" data-brand-logotype="true">
            {lang === "en" ? "Koushalya" : "ಕೌಶಲ್ಯ"}
          </span>
        </strong>
        <span className="brand-subtitle">
          {lang === "en"
            ? "A Karnataka Rakshana Vedike initiative"
            : "ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಉಪಕ್ರಮ"}
        </span>
      </span>
    </a>
  );
}

function Header({
  lang,
  page,
  onLanguage,
}: LanguageProps & { page: Page; onLanguage: () => void }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [page]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 961px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      const menuHadFocus =
        document.activeElement?.closest("#mobile-navigation");
      setOpen(false);
      if (menuHadFocus)
        document
          .querySelector<HTMLElement>(".site-header a[aria-current='page']")
          ?.focus();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  useEffect(() => {
    if (!open) return;
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand lang={lang} />
        <nav
          className="desktop-nav"
          aria-label={lang === "en" ? "Main navigation" : "ಮುಖ್ಯ ಸಂಚರಣೆ"}
        >
          {(["home", "about", "programs"] as Page[]).map((item) => (
            <a
              key={item}
              href={`#/${item}`}
              aria-current={page === item ? "page" : undefined}
            >
              {nav[item][lang]}
            </a>
          ))}
        </nav>
        <div className="header-controls">
          <button
            className="language-switch"
            onClick={onLanguage}
            lang={lang === "kn" ? "en" : "kn"}
            aria-label={lang === "kn" ? "English" : "ಕನ್ನಡ"}
          >
            <Languages size={16} aria-hidden="true" />
            <span>{lang === "kn" ? "English" : "ಕನ್ನಡ"}</span>
          </button>
          <a
            href="#/join"
            className="button button-primary header-cta"
            aria-current={page === "join" ? "page" : undefined}
          >
            {nav.join[lang]}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            ref={menuRef}
            className="menu-button"
            aria-label={
              lang === "en"
                ? open
                  ? "Close menu"
                  : "Open menu"
                : open
                  ? "ಮೆನು ಮುಚ್ಚಿ"
                  : "ಮೆನು ತೆರೆಯಿರಿ"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={23} aria-hidden="true" />
            ) : (
              <Menu size={23} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label={lang === "en" ? "Mobile navigation" : "ಮೊಬೈಲ್ ಸಂಚರಣೆ"}
        >
          <div className="container">
            {(Object.keys(nav) as Page[]).map((item) => (
              <a
                key={item}
                href={`#/${item}`}
                onClick={() => {
                  setOpen(false);
                  menuRef.current?.focus();
                }}
                aria-current={page === item ? "page" : undefined}
              >
                {nav[item][lang]}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <p className={`section-label${light ? " label-light" : ""}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

function LeadershipPortrait({
  lang,
  large = false,
  transparent = false,
}: LanguageProps & { large?: boolean; transparent?: boolean }) {
  return (
    <figure
      className={`leadership-portrait${large ? " leadership-portrait-large" : ""}${transparent ? " leadership-portrait-transparent" : ""}`}
    >
      {!transparent && (
        <div className="portrait-top">
          <span className="mini-flag" aria-hidden="true" />
          <span>
            {lang === "en"
              ? "KARNATAKA RAKSHANA VEDIKE"
              : "ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ"}
          </span>
        </div>
      )}
      <div className="portrait-photo">
        <img
          src={`${import.meta.env.BASE_URL}images/narayana-gowda-transparent.png`}
          width="400"
          height="400"
          fetchPriority="high"
          alt={
            lang === "en"
              ? "Portrait of T. A. Narayana Gowda"
              : "ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರ ಭಾವಚಿತ್ರ"
          }
        />
      </div>
      <figcaption>
        <span>
          {lang === "en" ? "UNDER THE LEADERSHIP OF" : "ಇವರ ನೇತೃತ್ವದಲ್ಲಿ"}
        </span>
        <h2>{lang === "en" ? "T. A. Narayana Gowda" : "ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು"}</h2>
        <p>
          {lang === "en"
            ? "Karnataka Rakshana Vedike"
            : "ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ"}
        </p>
      </figcaption>
    </figure>
  );
}

function Purpose({
  lang,
  compact = false,
}: LanguageProps & { compact?: boolean }) {
  return (
    <section
      className={`purpose-section section${compact ? " purpose-compact" : ""}`}
      aria-labelledby="purpose-heading"
    >
      <div className="container">
        <div className="section-heading purpose-heading">
          <div>
            <SectionLabel>
              {lang === "en" ? "OUR PURPOSE" : "ನಮ್ಮ ಉದ್ದೇಶ"}
            </SectionLabel>
            <h2 id="purpose-heading">
              {lang === "en"
                ? "Our vision and mission."
                : "ನಮ್ಮ ಧ್ಯೇಯ ಮತ್ತು ಕಾರ್ಯೋದ್ದೇಶ."}
            </h2>
          </div>
          <p>
            {lang === "en"
              ? "A focused commitment to the people and future of Karnataka."
              : "ಕರ್ನಾಟಕದ ಜನರು ಮತ್ತು ಅವರ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಒಂದು ಸ್ಪಷ್ಟ ಬದ್ಧತೆ."}
          </p>
        </div>
        <div className="purpose-grid">
          <article>
            <span className="purpose-icon">
              <Target size={25} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div>
              <h3>{lang === "en" ? "Our vision" : "ನಮ್ಮ ಧ್ಯೇಯ"}</h3>
              <p>{vision[lang]}</p>
            </div>
          </article>
          <article>
            <span className="purpose-icon">
              <Compass size={25} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div>
              <h3>{lang === "en" ? "Our mission" : "ನಮ್ಮ ಕಾರ್ಯೋದ್ದೇಶ"}</h3>
              <p>{mission[lang]}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ProgramOverview({ lang }: LanguageProps) {
  return (
    <section
      className="section programs-overview"
      aria-labelledby="programs-heading"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel>
              {lang === "en" ? "WHAT WE DO" : "ನಮ್ಮ ಕಾರ್ಯಕ್ಷೇತ್ರ"}
            </SectionLabel>
            <h2 id="programs-heading">
              {lang === "en"
                ? "Skills. Guidance. Career support."
                : "ಕೌಶಲ್ಯ. ಮಾರ್ಗದರ್ಶನ. ವೃತ್ತಿ ಬೆಂಬಲ."}
            </h2>
          </div>
          <a className="text-link" href="#/programs">
            {lang === "en"
              ? "Explore our programs"
              : "ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ತಿಳಿಯಿರಿ"}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="program-grid">
          {programAreas.map((program, index) => {
            const Icon = programIcons[index];
            return (
              <article className="program-card" key={program.id}>
                <div className="program-card-top">
                  <span className="program-icon">
                    <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="program-index">0{index + 1}</span>
                </div>
                <h3>{program.title[lang]}</h3>
                <p>{program.intro[lang]}</p>
                <a
                  className="text-link"
                  href={`#/programs?focus=${program.id}`}
                >
                  {lang === "en" ? "Learn more" : "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ"}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
        <p className="section-footnote">
          {lang === "en"
            ? "Our programs are being developed. Explore the registration options in Get involved."
            : "ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ರೂಪಿಸಲಾಗುತ್ತಿದೆ. ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ ವಿಭಾಗದಲ್ಲಿ ನೋಂದಣಿ ಆಯ್ಕೆಗಳನ್ನು ತಿಳಿಯಿರಿ."}
        </p>
      </div>
    </section>
  );
}

function Invitation({ lang }: LanguageProps) {
  return (
    <section className="invitation-section">
      <div className="container invitation-inner">
        <div>
          <SectionLabel light>
            {lang === "en" ? "GROW WITH US" : "ನಮ್ಮೊಂದಿಗೆ ಬೆಳೆಸೋಣ"}
          </SectionLabel>
          <h2>
            {lang === "en"
              ? "Help build Karnataka’s skilled workforce."
              : "ಕೌಶಲ್ಯವಂತ ಕರ್ನಾಟಕಕ್ಕಾಗಿ ಕೈಜೋಡಿಸಿ."}
          </h2>
          <p>
            {lang === "en"
              ? "Whether you want to learn, mentor or partner with us, there is a role for you."
              : "ಕಲಿಯಲು, ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಅಥವಾ ಸಹಭಾಗಿಯಾಗಲು ಬಯಸುವ ನಿಮ್ಮೆಲ್ಲರಿಗೂ ಇಲ್ಲಿ ಅವಕಾಶವಿದೆ."}
          </p>
        </div>
        <a href="#/join" className="button button-gold">
          {nav.join[lang]}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function HomePage({ lang }: LanguageProps) {
  return (
    <>
      <section className="hero">
        <div className="hero-decoration" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <SectionLabel>
              {lang === "en"
                ? "LEARNING · SKILLS · OPPORTUNITY"
                : "ಕಲಿಕೆ · ಕೌಶಲ್ಯ · ಉದ್ಯೋಗ"}
            </SectionLabel>
            <h1>
              {lang === "en" ? (
                <>
                  Skills for a<br />
                  <span>stronger Karnataka.</span>
                </>
              ) : (
                <>
                  ಕನ್ನಡಿಗರ ಕೌಶಲ್ಯಕ್ಕೆ ಬಲ.
                  <br />
                  <span>ಉಜ್ವಲ ಭವಿಷ್ಯಕ್ಕೆ ದಾರಿ.</span>
                </>
              )}
            </h1>
            <p className="hero-intro">{intro[lang]}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#/programs">
                {lang === "en"
                  ? "Discover our programs"
                  : "ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಅರಿಯಿರಿ"}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#/about">
                {lang === "en" ? "About the initiative" : "ಉಪಕ್ರಮದ ಬಗ್ಗೆ"}
              </a>
            </div>
            <div className="hero-commitment">
              <span aria-hidden="true" />
              <p>
                {lang === "en"
                  ? "Rooted in Karnataka. Committed to its people."
                  : "ಕರ್ನಾಟಕದ ನೆಲೆಯಲ್ಲಿ. ಕನ್ನಡಿಗರ ಸಬಲೀಕರಣಕ್ಕಾಗಿ."}
              </p>
            </div>
          </div>
          <div className="hero-leader">
            <LeadershipPortrait lang={lang} large transparent />
          </div>
        </div>
      </section>
      <Purpose lang={lang} compact />
      <ProgramOverview lang={lang} />
      <section className="audience-section">
        <div className="container audience-inner">
          <div>
            <SectionLabel>
              {lang === "en" ? "WHO WE SERVE" : "ಯಾರಿಗಾಗಿ"}
            </SectionLabel>
            <h2>
              {lang === "en"
                ? "For every stage of your journey."
                : "ನಿಮ್ಮ ಪಯಣದ ಪ್ರತಿ ಹಂತಕ್ಕೂ."}
            </h2>
          </div>
          <p>
            {lang === "en"
              ? "Students and job seekers. Working professionals. Skilled and service workers. Aspiring entrepreneurs. Our purpose is to make learning and opportunity more accessible to Kannadigas."
              : "ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಉದ್ಯೋಗಾಕಾಂಕ್ಷಿಗಳು. ವೃತ್ತಿಪರರು. ನುರಿತ ಕೆಲಸಗಾರರು ಮತ್ತು ಸೇವಾ ಸಿಬ್ಬಂದಿ. ಉದ್ಯಮ ಆರಂಭಿಸಲು ಬಯಸುವವರು. ಕನ್ನಡಿಗರಿಗೆ ಕಲಿಕೆ ಮತ್ತು ಅವಕಾಶಗಳು ಸುಲಭವಾಗಿ ತಲುಪುವುದು ನಮ್ಮ ಉದ್ದೇಶ."}
          </p>
        </div>
      </section>
      <Invitation lang={lang} />
    </>
  );
}

function PageIntro({
  lang,
  label,
  title,
  description,
}: LanguageProps & {
  label: Localized;
  title: Localized;
  description: Localized;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="breadcrumbs">
          <a href="#/home">{nav.home[lang]}</a>
          <span aria-hidden="true">/</span>
          <span>{label[lang]}</span>
        </p>
        <h1>{title[lang]}</h1>
        <p className="page-description">{description[lang]}</p>
      </div>
    </section>
  );
}

function AboutPage({ lang }: LanguageProps) {
  return (
    <>
      <PageIntro
        lang={lang}
        label={nav.about}
        title={copy(
          "Our vision for Karnataka.",
          "ಕರ್ನಾಟಕದ ಭವಿಷ್ಯಕ್ಕಾಗಿ ನಮ್ಮ ಧ್ಯೇಯ.",
        )}
        description={copy(
          "An initiative that brings learning, guidance and opportunity closer to Kannadigas.",
          "ಕನ್ನಡಿಗರಿಗೆ ಕಲಿಕೆ, ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಅವಕಾಶಗಳನ್ನು ಹತ್ತಿರ ತರುವ ಉಪಕ್ರಮ.",
        )}
      />
      <section className="section about-leadership">
        <div className="container about-grid">
          <LeadershipPortrait lang={lang} />
          <div>
            <SectionLabel>
              {lang === "en"
                ? "LEADERSHIP & COMMITMENT"
                : "ನಾಯಕತ್ವ ಮತ್ತು ಬದ್ಧತೆ"}
            </SectionLabel>
            <h2>
              {lang === "en"
                ? "A commitment to Kannada. An investment in people."
                : "ಕನ್ನಡದ ಬದ್ಧತೆ. ಕನ್ನಡಿಗರ ಸಬಲೀಕರಣ."}
            </h2>
            <p>{leadershipDescription[lang]}</p>
            <p>
              {lang === "en"
                ? "Karave Koushalya carries this purpose forward through practical learning, career guidance and connections with the world of work. It welcomes people from different education levels and professional backgrounds."
                : "ಪ್ರಾಯೋಗಿಕ ಕಲಿಕೆ, ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಉದ್ಯೋಗ ಜಗತ್ತಿನ ಸಂಪರ್ಕಗಳ ಮೂಲಕ ಈ ಉದ್ದೇಶವನ್ನು ಮುಂದುವರಿಸುವುದು ಕರವೇ ಕೌಶಲ್ಯದ ಆಶಯ. ವಿವಿಧ ಶಿಕ್ಷಣ ಮತ್ತು ವೃತ್ತಿ ಹಿನ್ನೆಲೆಯ ಜನರನ್ನು ಇದು ಒಳಗೊಳ್ಳುತ್ತದೆ."}
            </p>
            <div className="leadership-signature">
              <strong>
                {lang === "en" ? "T. A. Narayana Gowda" : "ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು"}
              </strong>
              <span>
                {lang === "en"
                  ? "Karnataka Rakshana Vedike"
                  : "ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ"}
              </span>
            </div>
          </div>
        </div>
      </section>
      <Purpose lang={lang} />
      <section className="section principles-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <SectionLabel>
                {lang === "en" ? "OUR APPROACH" : "ನಮ್ಮ ವಿಧಾನ"}
              </SectionLabel>
              <h2>
                {lang === "en"
                  ? "Practical. Inclusive. Connected."
                  : "ಪ್ರಾಯೋಗಿಕ. ಎಲ್ಲರನ್ನೂ ಒಳಗೊಂಡ. ಸಂಪರ್ಕದ ಸೇತು."}
              </h2>
            </div>
          </div>
          <div className="principle-grid">
            {[
              {
                icon: BookOpen,
                title: copy(
                  "Learning for real work",
                  "ಕೆಲಸಕ್ಕೆ ನೆರವಾಗುವ ಕಲಿಕೆ",
                ),
                description: copy(
                  "Focus on useful skills and confident preparation for the workplace.",
                  "ಕೆಲಸಕ್ಕೆ ಅಗತ್ಯವಾದ ಕೌಶಲ್ಯ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸದ ಸಿದ್ಧತೆಗೆ ಆದ್ಯತೆ.",
                ),
              },
              {
                icon: Users,
                title: copy("An opportunity for everyone", "ಎಲ್ಲರಿಗೂ ಅವಕಾಶ"),
                description: copy(
                  "Support people across education levels, communities and career stages.",
                  "ವಿವಿಧ ಶಿಕ್ಷಣ ಹಂತ, ಸಮುದಾಯ ಮತ್ತು ವೃತ್ತಿ ಹಂತಗಳ ಜನರಿಗೆ ಬೆಂಬಲ.",
                ),
              },
              {
                icon: Handshake,
                title: copy(
                  "Progress through partnership",
                  "ಸಹಕಾರದ ಮೂಲಕ ಪ್ರಗತಿ",
                ),
                description: copy(
                  "Bring learners, experienced professionals and employers together.",
                  "ಕಲಿಯುವವರು, ಅನುಭವಿ ವೃತ್ತಿಪರರು ಮತ್ತು ಉದ್ಯೋಗದಾತರನ್ನು ಒಟ್ಟುಗೂಡಿಸುವುದು.",
                ),
              },
            ].map(({ icon: Icon, title, description }) => (
              <article key={title.en}>
                <Icon size={27} strokeWidth={1.6} aria-hidden="true" />
                <h3>{title[lang]}</h3>
                <p>{description[lang]}</p>
              </article>
            ))}
          </div>
          <details className="future-details">
            <summary>
              {lang === "en" ? "How we plan to grow" : "ನಮ್ಮ ಬೆಳವಣಿಗೆಯ ಯೋಜನೆ"}
              <ChevronDown size={19} aria-hidden="true" />
            </summary>
            <div className="future-grid">
              {futureSteps.map((step, index) => (
                <article key={step.title.en}>
                  <span>0{index + 1}</span>
                  <h3>{step.title[lang]}</h3>
                  <p>{step.description[lang]}</p>
                </article>
              ))}
            </div>
          </details>
        </div>
      </section>
      <Invitation lang={lang} />
    </>
  );
}

function ProgramsPage({ lang }: LanguageProps) {
  return (
    <>
      <PageIntro
        lang={lang}
        label={nav.programs}
        title={copy(
          "Skills, guidance and opportunity.",
          "ಕೌಶಲ್ಯ, ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಅವಕಾಶಗಳು.",
        )}
        description={copy(
          "Three clear areas of support, designed to help you prepare for your next step.",
          "ನಿಮ್ಮ ಮುಂದಿನ ಹೆಜ್ಜೆಗೆ ಸಿದ್ಧತೆ ಕಲ್ಪಿಸಲು ಮೂರು ಸರಳ ಬೆಂಬಲ ಕ್ಷೇತ್ರಗಳು.",
        )}
      />
      <section className="section program-section">
        <div className="container">
          <div className="availability-note">
            <span aria-hidden="true" />
            <p>
              {lang === "en"
                ? "Our programs are being developed. Visit Get involved for registration options."
                : "ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ರೂಪಿಸಲಾಗುತ್ತಿದೆ. ನೋಂದಣಿ ಆಯ್ಕೆಗಳಿಗಾಗಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ ವಿಭಾಗ ನೋಡಿ."}
            </p>
          </div>
          <div className="program-list">
            {programAreas.map((program, index) => {
              const Icon = programIcons[index];
              return (
                <article
                  className="program-detail"
                  id={`area-${program.id}`}
                  key={program.id}
                >
                  <div className="program-summary">
                    <span className="program-icon">
                      <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div className="program-summary-copy">
                      <span className="small-label">
                        {lang === "en"
                          ? `PROGRAM AREA 0${index + 1}`
                          : `ಕಾರ್ಯಕ್ರಮ ವಿಭಾಗ 0${index + 1}`}
                      </span>
                      <h2>{program.title[lang]}</h2>
                      <p>{program.summary[lang]}</p>
                      <div className="program-audience">
                        <Users size={16} aria-hidden="true" />
                        <span>{program.audience[lang]}</span>
                      </div>
                    </div>
                  </div>
                  <details
                    className="program-expansion"
                    id={`details-${program.id}`}
                    data-testid={`program-details-${program.id}`}
                  >
                    <summary>
                      {lang === "en"
                        ? "Explore this program"
                        : "ಈ ಕಾರ್ಯಕ್ರಮವನ್ನು ತಿಳಿಯಿರಿ"}
                      <ChevronDown size={19} aria-hidden="true" />
                    </summary>
                    <div className="program-feature-grid">
                      {program.features.map((feature) => (
                        <div key={feature.title.en}>
                          <h3>{feature.title[lang]}</h3>
                          <p>{feature.description[lang]}</p>
                        </div>
                      ))}
                    </div>
                    <a className="text-link" href="#/join">
                      {lang === "en"
                        ? "Registration options"
                        : "ನೋಂದಣಿ ಆಯ್ಕೆಗಳು"}
                      <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  </details>
                </article>
              );
            })}
          </div>
          <div className="programs-help">
            <div>
              <h2>
                {lang === "en"
                  ? "Find the right place to begin."
                  : "ನಿಮಗೆ ಸೂಕ್ತವಾದ ಆರಂಭದ ದಾರಿ."}
              </h2>
              <p>
                {lang === "en"
                  ? "Explore the options for people seeking guidance, mentors and partner organisations."
                  : "ಮಾರ್ಗದರ್ಶನ ಬಯಸುವವರು, ಮಾರ್ಗದರ್ಶಕರು ಮತ್ತು ಸಹಭಾಗಿ ಸಂಸ್ಥೆಗಳ ಆಯ್ಕೆಗಳನ್ನು ತಿಳಿಯಿರಿ."}
              </p>
            </div>
            <a href="#/join" className="button button-primary">
              {nav.join[lang]}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function JoinPage({
  lang,
  onRegister,
}: LanguageProps & { onRegister: (role: RoleId) => void }) {
  return (
    <>
      <PageIntro
        lang={lang}
        label={nav.join}
        title={copy("Be part of Karave Koushalya.", "ಕರವೇ ಕೌಶಲ್ಯದ ಭಾಗವಾಗಿ.")}
        description={copy(
          "Choose how you would like to learn, contribute or partner with the initiative.",
          "ಕಲಿಯಲು, ಕೊಡುಗೆ ನೀಡಲು ಅಥವಾ ಸಹಭಾಗಿಯಾಗಲು ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
        )}
      />
      <section className="section join-section">
        <div className="container">
          <div className="availability-note">
            <span aria-hidden="true" />
            <p>
              {lang === "en"
                ? "Guidance registration is open through Google Forms. Mentor and partner registration is coming soon."
                : "ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ Google Forms ಮೂಲಕ ನೋಂದಾಯಿಸಬಹುದು. ಮಾರ್ಗದರ್ಶಕರು ಮತ್ತು ಸಹಭಾಗಿಗಳ ನೋಂದಣಿ ಶೀಘ್ರದಲ್ಲೇ."}
            </p>
          </div>
          <div className="role-grid">
            {roles
              .filter((role) => role.id !== "admin")
              .map((role) => {
                const Icon = roleIcons[role.id];
                return (
                  <article className="role-card" key={role.id}>
                    <span className="role-icon">
                      <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <h2>{role.title[lang]}</h2>
                    <p>{role.description[lang]}</p>
                    {role.id === "mentee" ? (
                      <a
                        className="text-link"
                        href={guidanceRegistrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="register-mentee"
                      >
                        {role.action[lang]}
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </a>
                    ) : (
                      <button
                        className="text-link"
                        onClick={() => onRegister(role.id)}
                        data-testid={`register-${role.id}`}
                      >
                        {role.action[lang]}
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </button>
                    )}
                  </article>
                );
              })}
          </div>
          <p className="privacy-note">
            <ArrowUpRight size={15} aria-hidden="true" />
            {lang === "en"
              ? "Guidance registration opens in a new tab on Google Forms."
              : "ಮಾರ್ಗದರ್ಶನದ ನೋಂದಣಿ Google Forms ನಲ್ಲಿ ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ ತೆರೆಯುತ್ತದೆ."}
          </p>
        </div>
      </section>
    </>
  );
}

function Footer({
  lang,
  onRegister,
}: LanguageProps & { onRegister: (role: RoleId) => void }) {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-intro">
          <Brand lang={lang} footer />
          <p>
            {lang === "en"
              ? "Learning, skills and opportunities for Kannadigas. A shared commitment to Karnataka’s future."
              : "ಕನ್ನಡಿಗರ ಕಲಿಕೆ, ಕೌಶಲ್ಯ ಮತ್ತು ಅವಕಾಶಗಳಿಗಾಗಿ. ಕರ್ನಾಟಕದ ಭವಿಷ್ಯಕ್ಕೆ ಸಾಮೂಹಿಕ ಬದ್ಧತೆ."}
          </p>
        </div>
        <div className="footer-links">
          <h2>{lang === "en" ? "Explore" : "ತಿಳಿಯಿರಿ"}</h2>
          {(Object.keys(nav) as Page[]).map((item) => (
            <a key={item} href={`#/${item}`}>
              {nav[item][lang]}
            </a>
          ))}
        </div>
        <div className="footer-organisation">
          <span className="small-label">
            {lang === "en" ? "AN INITIATIVE OF" : "ಈ ಸಂಸ್ಥೆಯ ಉಪಕ್ರಮ"}
          </span>
          <p>
            {lang === "en"
              ? "Karnataka Rakshana Vedike"
              : "ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆ"}
          </p>
          <span className="footer-domain">karavekoushalya.com</span>
          <span className="footer-flag" aria-hidden="true" />
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()}{" "}
          {lang === "en" ? "Karave Koushalya" : "ಕರವೇ ಕೌಶಲ್ಯ"}
        </span>
        <span>
          {lang === "en"
            ? "Learning. Skills. Opportunity."
            : "ಕಲಿಕೆ. ಕೌಶಲ್ಯ. ಉದ್ಯೋಗ."}
        </span>
        <button
          onClick={() => onRegister("admin")}
          data-testid="register-admin"
        >
          {lang === "en" ? "Administrator access" : "ನಿರ್ವಾಹಕರ ಪ್ರವೇಶ"}
          <ArrowUpRight size={13} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}

function RegistrationDialog({
  lang,
  role,
  onClose,
}: LanguageProps & { role: RoleId | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const selected = roles.find((item) => item.id === role);
  useEffect(() => {
    const dialog = ref.current;
    if (role && dialog && !dialog.open) dialog.showModal();
    if (!role && dialog?.open) dialog.close();
  }, [role]);
  return (
    <dialog
      ref={ref}
      className="registration-dialog"
      aria-labelledby="registration-title"
      aria-describedby="registration-description"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) ref.current?.close();
      }}
    >
      <div className="dialog-inner">
        <button
          className="dialog-close"
          aria-label={lang === "en" ? "Close" : "ಮುಚ್ಚಿ"}
          onClick={() => ref.current?.close()}
        >
          <X size={21} aria-hidden="true" />
        </button>
        <span className="dialog-symbol">
          <Sparkles size={28} strokeWidth={1.6} aria-hidden="true" />
        </span>
        <p className="small-label">{selected?.title[lang]}</p>
        <h2 id="registration-title" lang="en">
          The option coming soon
        </h2>
        <p id="registration-description">
          {lang === "en"
            ? "We are preparing to welcome you. Registration for this role will open in a future release."
            : "ನಿಮ್ಮನ್ನು ಸ್ವಾಗತಿಸಲು ಸಿದ್ಧರಾಗುತ್ತಿದ್ದೇವೆ. ಈ ಪಾತ್ರದ ನೋಂದಣಿ ಮುಂದಿನ ಆವೃತ್ತಿಯಲ್ಲಿ ಆರಂಭವಾಗಲಿದೆ."}
        </p>
        <p className="dialog-note">
          {lang === "en"
            ? "No personal information has been collected."
            : "ಯಾವುದೇ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಸಂಗ್ರಹಿಸಿಲ್ಲ."}
        </p>
        <button
          className="button button-primary"
          onClick={() => ref.current?.close()}
        >
          {lang === "en" ? "Got it" : "ಸರಿ, ಅರ್ಥವಾಯಿತು"}
          <Check size={18} aria-hidden="true" />
        </button>
      </div>
    </dialog>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>(readLanguage);
  const [route, setRoute] = useState<Route>(readRoute);
  const [registration, setRegistration] = useState<RoleId | null>(null);
  const mainRef = useRef<HTMLElement>(null);
  const firstRoute = useRef(true);
  useEffect(() => {
    const update = () => setRoute(readRoute());
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `${nav[route.page][lang]} · ${lang === "en" ? "Karave Koushalya" : "ಕರವೇ ಕೌಶಲ್ಯ"}`;
    try {
      localStorage.setItem("karave-language", lang);
    } catch {
      /* The toggle works without browser storage. */
    }
  }, [lang, route.page]);
  useEffect(() => {
    if (route.focus) {
      const details = document.getElementById(
        `details-${route.focus}`,
      ) as HTMLDetailsElement | null;
      if (details) {
        details.open = true;
        details.querySelector("summary")?.focus({ preventScroll: true });
        document
          .getElementById(`area-${route.focus}`)
          ?.scrollIntoView({ block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
      if (!firstRoute.current) mainRef.current?.focus({ preventScroll: true });
    }
    firstRoute.current = false;
  }, [route]);
  return (
    <div className={`app locale-${lang}`}>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          mainRef.current?.focus();
          mainRef.current?.scrollIntoView();
        }}
      >
        {lang === "en" ? "Skip to content" : "ವಿಷಯಕ್ಕೆ ತೆರಳಿ"}
      </a>
      <Header
        lang={lang}
        page={route.page}
        onLanguage={() => setLang(lang === "kn" ? "en" : "kn")}
      />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        {route.page === "home" ? (
          <HomePage lang={lang} />
        ) : route.page === "about" ? (
          <AboutPage lang={lang} />
        ) : route.page === "programs" ? (
          <ProgramsPage lang={lang} />
        ) : (
          <JoinPage lang={lang} onRegister={setRegistration} />
        )}
      </main>
      <Footer lang={lang} onRegister={setRegistration} />
      <RegistrationDialog
        lang={lang}
        role={registration}
        onClose={() => setRegistration(null)}
      />
    </div>
  );
}
