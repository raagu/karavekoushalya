# Karave Koushalya

The Kannada / English website for the Karave Koushalya initiative under Karnataka Rakshana Vedike. Built with React, TypeScript and Vite.

## Run locally

Requires Node.js 22.18 or newer and npm.

```sh
npm ci
npm run dev -- --port 5178 --strictPort
```

Open `http://127.0.0.1:5178`. Kannada is the default language. The English/Kannada toggle remembers the visitor’s choice in that browser.

## Website structure

- **Home:** a concise introduction, a transparent portrait of T. A. Narayana Gowda (ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು), vision, mission and three program summaries.
- **About us:** the initiative’s purpose, leadership, principles and optional future direction.
- **Our programs:** skills and certification, career guidance and mentorship, employment and entrepreneurship. Further details expand on request.
- **Get involved:** three public options—people seeking guidance, mentors, and companies/partners. Guidance registration opens the supplied Google Form. Administrator access stays in the footer.

Older career-pathway and mentorship links still open the relevant program information.

All dark surfaces and navy accents share `#0a132c`, including the header, footer, invitation section, portrait frames, headings and home page primary action. The existing semantic navy/blue colour tokens resolve to that shared shade; shadows retain their opacity. The home introduction now contrasts it with light pearl, warm ivory and mist blue, navy headings and emphasis with dark slate body text. The home page's navy primary action, white sections and light blue-grey program area keep the palette restrained. **Karave / ಕರವೇ is yellow; Koushalya / ಕೌಶಲ್ಯ is red**, in the header and footer. The larger, warm gold organisation subtitle has a gold accent beside it; responsive sizes keep the logo, name, subtitle and navigation aligned. English uses locally bundled Inter; Kannada uses Noto Sans Kannada. The supplied Kannada “ಕ” / gear logo and transparent portrait remain the brand assets. The supplied Gemini reference informed the initial visual theme; the current light home page follows the user's subsequent direction.

## Current scope

Guidance registration links to `https://forms.gle/GD4aqzcX7ezvwxQj7` in a new tab. Registration details are handled by that external Google Form. Mentor, partner and footer administrator options display **The option coming soon**. The website itself has no registration forms, accounts, analytics or database storage. Only the language preference is stored in the browser.

Services and partnerships remain plans in development. No existing enrollment totals, unconfirmed partners, government approvals, guaranteed jobs or funding approvals are presented as achievements.

## Build and check

```sh
npm run build
npm test
npm run preview
```

Production files are written to `dist/`. The site uses hash routes, so static hosting needs no route rewrite rules.

Browser checks cover desktop and mobile layouts, header alignment, Kannada/English persistence, leadership/vision/mission content, expandable program information, legacy links, registration dialogs, focus handling and automated accessibility. If needed, install the browser with `npx playwright install chromium`. The configuration can reuse an installed Chromium cache or `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`.

The requested yellow/red wordmark is a logotype. Accessibility checks apply the WCAG 1.4.3 logotype contrast exemption only to the marked name text; navigation, organisation subtitles, body text and all other accessibility rules remain checked.

## Content and assets

- `src/siteContent.ts`: concise bilingual content used by the current website.
- `src/App.tsx`: views, navigation and registration dialogs.
- `src/styles.css`: the corporate theme and responsive layouts.
- `src/content.ts`: the earlier detailed program reference, retained for future development.
- `public/images/narayana-gowda.jpeg`: the supplied original portrait, retained as a source asset.
- `public/images/narayana-gowda-transparent.png`: a transparent-background derivative used directly on the home page with unframed leadership details, and within the navy About-page portrait frame.
- `public/images/karave-koushalya-logo-v3.png`: the Kannada-and-skill logo.

The source vision is the user-provided `karave_koushalya.md`. The current Kannada name is **ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು**, as corrected by the user. Fonts are bundled locally with their SIL Open Font Licenses in `public/fonts/`. The website makes no third-party font or image requests.

The previous website source is preserved in `backups/karave-koushalya-before-redesign-2026-11-10.zip`. Restore those source files and rebuild to return to that version.

The source files changed for the Gemini-inspired theme are preserved in `backups/karave-koushalya-before-gemini-theme-2026-11-10.zip`. Restore those files and rebuild to return to the previous theme.

The source files from immediately before the royal blue header and home page update are in `backups/karave-koushalya-before-blue-header-2026-11-10.zip`.

The source files from before the light home page refinement are in `backups/karave-koushalya-before-light-home-2026-11-10.zip`.

Hosting/domain setup, native registration, authentication, website data storage and operational monitoring are future work. Guidance registration currently uses the linked Google Form.
