# Karave Koushalya

The Kannada / English website for the Karave Koushalya initiative under Karnataka Rakshana Vedike. Built with React, TypeScript and Vite.

## Run locally

Requires Node.js 22.18 or newer and npm.

```sh
npm ci
npm run dev -- --port 5178 --strictPort
```

Open `http://127.0.0.1:5178`. Kannada is the default language. The English/Kannada links preserve the selected language in the URL, across reloads and browser history. A saved browser preference is used for older hash links.

## Website structure

- **Home:** a concise introduction, a transparent portrait of T. A. Narayana Gowda (ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು), vision, mission and three program summaries.
- **About us:** the initiative’s purpose, leadership, principles and optional future direction.
- **Our programs:** skills and certification, career guidance and mentorship, employment and entrepreneurship. Further details expand on request.
- **Get involved:** three public options—people seeking guidance, mentors, and companies/partners. Guidance and mentor registration open their supplied Google Forms. Administrator access stays in the footer.

Older career-pathway and mentorship links still open the relevant program information.

All dark surfaces and navy accents share `#0a132c`, including the header, footer, invitation section, portrait frames, headings and home page primary action. The existing semantic navy/blue colour tokens resolve to that shared shade; shadows retain their opacity. The home introduction now contrasts it with light pearl, warm ivory and mist blue, navy headings and emphasis with dark slate body text. The home page's navy primary action, white sections and light blue-grey program area keep the palette restrained. **Karave / ಕರವೇ is yellow; Koushalya / ಕೌಶಲ್ಯ is red**, in the header and footer. The larger, warm gold organisation subtitle has a gold accent beside it; responsive sizes keep the logo, name, subtitle and navigation aligned. English uses locally bundled Inter; Kannada uses Noto Sans Kannada. The supplied Kannada “ಕ” / gear logo and transparent portrait remain the brand assets. The supplied Gemini reference informed the initial visual theme; the current light home page follows the user's subsequent direction.

The presentation uses a compact header with aligned controls and a gold underline for the active page. Larger supporting text, balanced section spacing and quieter secondary actions improve readability. Guidance registration receives the primary action style on the Get involved page; partner and administrator options retain their coming-soon dialogs. The light home page background and unified dark colour remain unchanged.

## Current scope

Guidance registration links to `https://forms.gle/GD4aqzcX7ezvwxQj7`, and mentor registration links to `https://forms.gle/YnSzaPG25uEhjYDS9`. Both open in a new tab; registration details are handled by their external Google Forms. Partner and footer administrator options display **The option coming soon**. The website itself has no registration forms, accounts, analytics or database storage. Only the language preference is stored in the browser.

Services and partnerships remain plans in development. No existing enrollment totals, unconfirmed partners, government approvals, guaranteed jobs or funding approvals are presented as achievements.

## Build and check

```sh
npm run build
npm run build:project
npm test
npm run test:deployment
npm run preview
```

Production files are written to `dist/`. The React views are rendered at build time into complete HTML documents for `/kn/`, `/en/` and each language’s `about/`, `programs/` and `join/` paths. GitHub Pages serves the directory indexes directly, so no SPA fallback or server runtime is required. The root landing page has `/kn/` as its canonical. Existing `#/home`, `#/about`, `#/programs`, `#/join`, `#/pathways` and `#/mentorship` links migrate to the matching clean language URL.

`npm run build:project` creates an independent compatibility build in `dist-project/` with `/karavekoushalya/` as its asset and navigation base. Only `dist/` is published to the custom domain.

Browser checks cover desktop and mobile layouts, header alignment, Kannada/English persistence, leadership/vision/mission content, expandable program information, legacy links, registration dialogs, focus handling and automated accessibility. If needed, install the browser with `npx playwright install chromium`. The configuration can reuse an installed Chromium cache or `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`.

The deployment checks serve `dist/` and `dist-project/` at isolated origins without a missing-file fallback. They verify all eight pages with JavaScript disabled, canonical and reciprocal language links, structured data, sharing metadata, the sitemap, robots.txt, security policy, real 404 responses, asset loading, client navigation, reloads, browser history and registration behaviour. Build both outputs before running these checks. The temporary test servers use ports 4174 and 4175; they are not production servers.

The requested yellow/red wordmark is a logotype. Accessibility checks apply the WCAG 1.4.3 logotype contrast exemption only to the marked name text; navigation, organisation subtitles, body text and all other accessibility rules remain checked.

## GitHub Pages

The repository is `https://github.com/raagu/karavekoushalya`. Keep **Settings → Pages → Build and deployment → Source** set to **GitHub Actions**.

`.github/workflows/deploy.yml` installs the locked dependencies with Node.js 24, builds the website, checks the desktop/mobile app and production assets, then uploads only `dist/` and deploys it to the `github-pages` environment. Pushes to `main` deploy after the checks pass. Pull requests run the checks without publishing. The workflow can also be run manually from the Actions tab on `main`.

The public website address is `https://karavekoushalya.com/`. The earlier `https://raagu.github.io/karavekoushalya/` address redirects through GitHub Pages to the custom domain. Deployment progress and the final website URL appear in the Actions run. No personal access token is required by the workflow; its deployment job uses GitHub's short-lived token with Pages and identity permissions.

Vite’s default asset base is `/`. The compatibility build uses `SITE_BASE_PATH=/karavekoushalya/` and a separate output directory. Application links, images and font assets all use the selected base. Canonical and language-alternative URLs always identify the HTTPS custom-domain pages.

### Technical SEO and browser security

Every generated page contains its existing visible content, a language-specific title and description, a canonical URL, reciprocal `kn`/`en`/`x-default` language links, Open Graph/Twitter preview metadata and accurate Organization/WebSite/WebPage structured data. Inner pages also contain breadcrumb structured data. No unsupported certifications, affiliations, reviews, dates or operating-program claims are added. `sitemap.xml` lists the eight canonical pages without invented update dates; `robots.txt` permits crawling and advertises the sitemap. Program focus queries use the main program page as their canonical.

The delivery images use transparent lossless WebP encoding with responsive sizes; originals are retained. `scripts/optimize-images.py` reproduces the assets with Pillow in an isolated maintenance environment. No image-generation service or image-processing dependency is needed to build or run the website.

Generated documents include a restrictive Content Security Policy and referrer policy. The policy permits this site’s scripts, styles, fonts and images, disables plugins and native form submissions, and upgrades insecure subresource requests. Development builds omit the production CSP so Vite’s development tooling can work. A meta CSP does not provide server-side rate limiting, DDoS protection, HSTS or clickjacking headers.

`.github/workflows/site-health.yml` checks the published language pages, sitemap, crawler file, redirects and certificate expiry daily at 08:00 India time and on manual dispatch. `npm run check:live` runs the same read-only check locally. A missing HTTPS redirect or certificate issue correctly causes a failed health check; it must be fixed in the hosting account rather than hidden in application code. GitHub controls scheduled workflow execution and account notification preferences.

### Domain-owner actions outside the website source

1. In [GitHub Pages settings](https://github.com/raagu/karavekoushalya/settings/pages), enable **Enforce HTTPS**. The connected repository token used during implementation could read the settings but lacked administration permission to change them. Verify HTTP and the old GitHub URL redirect to HTTPS, and that `https://www.karavekoushalya.com/` has a valid certificate and redirects to the apex domain. DNS already points the apex to GitHub’s four Pages addresses and `www` to `raagu.github.io`; do not remove the existing domain-verification TXT record.
2. In Google Search Console, verify the domain if necessary, submit `https://karavekoushalya.com/sitemap.xml`, and inspect representative Kannada/English URLs. Verification and indexing reports require the owner’s Google account. Eligibility, indexing and rankings are separate; no application change can guarantee a particular Google position.
3. For configurable bot filtering and rate limits, an edge-service account and domain connection are required. No Cloudflare account is connected. When adding one, import and review all current DNS records, preserve email and verification records, use strict origin TLS, allow verified Google/Bing crawlers, and test both languages and both registration links. Select rules using the available plan and actual traffic. GitHub Pages’ origin remains a consideration when evaluating protection against direct-origin traffic.
4. Configure header-only protections at the hosting/edge layer, including `X-Content-Type-Options: nosniff` and a `Content-Security-Policy` header with `frame-ancestors 'none'`. Enable HSTS only after HTTPS works for every address it covers. An `_headers` file is not used as a pretend GitHub Pages configuration.
5. Review Google Forms’ own response access and spam settings separately. A website WAF does not protect submissions made directly to Google Forms. Requiring Google sign-in limits access and needs an explicit accessibility/usability decision.

To roll back a site change, revert the relevant source commit and push the revert to `main`; the same checks and deployment run again.

## Content and assets

- `src/siteContent.ts`: concise bilingual content used by the current website.
- `src/App.tsx`: views, navigation and registration dialogs.
- `src/styles.css`: the corporate theme and responsive layouts.
- `src/content.ts`: the earlier detailed program reference, retained for future development.
- `public/images/narayana-gowda.jpeg`: the supplied original portrait, retained as a source asset.
- `public/images/narayana-gowda-transparent.png`: the transparent source retained for the responsive WebP delivery versions on the Home and About pages.
- `public/images/karave-koushalya-logo-v3.png`: the Kannada-and-skill logo.

The source vision is the user-provided `karave_koushalya.md`. The current Kannada name is **ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು**, as corrected by the user. Fonts are bundled locally with their SIL Open Font Licenses in `public/fonts/`. The website makes no third-party font or image requests.

The previous website source is preserved in `backups/karave-koushalya-before-redesign-2026-11-10.zip`. Restore those source files and rebuild to return to that version.

The source files changed for the Gemini-inspired theme are preserved in `backups/karave-koushalya-before-gemini-theme-2026-11-10.zip`. Restore those files and rebuild to return to the previous theme.

The source files from immediately before the royal blue header and home page update are in `backups/karave-koushalya-before-blue-header-2026-11-10.zip`.

The source files from before the light home page refinement are in `backups/karave-koushalya-before-light-home-2026-11-10.zip`.

Native registration, authentication, website data storage and configurable edge bot protection remain future work. The custom domain is configured; the owner must complete the account actions above. Guidance and mentor registration currently use the linked Google Forms.
