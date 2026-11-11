import { programAreas, type Lang } from "./siteContent";

export const pages = ["home", "about", "programs", "join"] as const;
export type Page = (typeof pages)[number];
export type SiteLocation = {
  lang: Lang;
  page: Page;
  focus?: string;
};

export const basePath = import.meta.env.BASE_URL;

export function pagePath(location: SiteLocation, base = basePath): string {
  const path = `${base}${location.lang}/${location.page === "home" ? "" : `${location.page}/`}`;
  return location.focus
    ? `${path}?focus=${encodeURIComponent(location.focus)}`
    : path;
}

function validFocus(search: string): string | undefined {
  const focus = new URLSearchParams(search).get("focus");
  return programAreas.some((program) => program.id === focus)
    ? focus!
    : undefined;
}

export function locationFromPath(
  pathname: string,
  search = "",
): SiteLocation | null {
  if (!pathname.startsWith(basePath)) return null;
  const path = pathname.slice(basePath.length).replace(/\/+$/, "");
  if (!path || path === "index.html") return { lang: "kn", page: "home" };
  const [lang, name = "", ...remaining] = path.split("/");
  if ((lang !== "kn" && lang !== "en") || remaining.length) return null;
  const page = name === "" ? "home" : name;
  if (!pages.includes(page as Page) || name === "home") return null;
  return { lang, page: page as Page, focus: validFocus(search) };
}

// Preserve previously shared hash links without advertising them to crawlers.
export function locationFromLegacyHash(
  hash: string,
  lang: Lang,
): SiteLocation | null {
  if (!/^#\/?(home|about|programs|join|pathways|mentorship)(\?|$)/.test(hash))
    return null;
  const [name, search = ""] = hash.replace(/^#\/?/, "").split("?");
  if (name === "pathways") return { lang, page: "programs", focus: "skills" };
  if (name === "mentorship")
    return { lang, page: "programs", focus: "guidance" };
  return { lang, page: name as Page, focus: validFocus(search) };
}

export function rememberedLanguage(): Lang {
  try {
    return localStorage.getItem("karave-language") === "en" ? "en" : "kn";
  } catch {
    return "kn";
  }
}
