import { renderToString } from "react-dom/server";
import App from "./App";
import { renderMetadata, contentSecurityPolicy, canonicalUrl } from "./seo";
import { pages, type SiteLocation } from "./routing";

export const staticPages = (["kn", "en"] as const).flatMap((lang) =>
  pages.map((page) => ({ lang, page })),
);

export { canonicalUrl };

export function render(location: SiteLocation) {
  return {
    html: renderToString(<App initialLocation={location} />),
    head: renderMetadata(location),
    contentSecurityPolicy,
  };
}
