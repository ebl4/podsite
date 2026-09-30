# [PROJECT_NAME] Constitution

This document captures the minimal, non-negotiable requirements for a static web application created from the project template. Keep this file small — only required constraints and delivery expectations.

## Purpose
- Provide a small, deployable static website (marketing page, docs, or SPA) built from the template.

## Minimal Requirements
- Static output: The project must produce static assets (HTML, CSS, JS) in a single output directory (e.g. `dist/` or `public/`).
- Entry point: An `index.html` at the site root must be present in the published output.
- Build: A reproducible build step must exist (commonly `npm run build`) that writes the static output to the designated directory.
- Dev: A local development server (`npm run dev` or equivalent) must serve the site for manual testing.
- Assets: Static assets (images, fonts) must be served from relative paths within the output directory.
- Routing: If the site is an SPA, the hosting configuration must support SPA fallback to `index.html`.

## Hosting & Delivery
- Host on any static-hosting provider (Netlify, Vercel, GitHub Pages, S3 + CDN). The hosting must serve files over HTTPS.
- CI: A CI job must run the build and fail on build errors. Deployments must use CI artifacts or the build step in CI.

## Security & Secrets
- No server-side secrets or credentials may be committed to the repository. Any build-time configuration must come from environment variables injected by CI or the hosting platform.

## Quality & Testing
- Smoke: The CI build must verify that the build command completes and that `index.html` exists in the output directory.
- Accessibility: Use semantic HTML and include a viewport meta and meaningful titles; basic accessibility checks should be part of review.

## Governance
- Amendments to these minimal requirements must be committed with a clear rationale and a migration note.

**Version**: 1.0.0 | **Ratified**: [RATIFICATION_DATE]

