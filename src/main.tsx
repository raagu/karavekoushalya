import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import {
  locationFromPath,
  locationFromLegacyHash,
  rememberedLanguage,
  pagePath,
  basePath,
} from "./routing";
import "./styles.css";

const legacy = locationFromLegacyHash(
  window.location.hash,
  window.location.pathname === basePath
    ? rememberedLanguage()
    : (locationFromPath(window.location.pathname)?.lang ??
        rememberedLanguage()),
);
if (legacy) {
  // replace() avoids leaving the obsolete hash URL in browser history.
  window.location.replace(pagePath(legacy));
} else {
  const location = locationFromPath(
    window.location.pathname,
    window.location.search,
  );
  const root = document.getElementById("root")!;
  if (location) {
    const app = (
      <StrictMode>
        <App initialLocation={location} />
      </StrictMode>
    );
    if (root.hasChildNodes()) hydrateRoot(root, app);
    else createRoot(root).render(app);
  }
}
