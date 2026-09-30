# Quickstart: Podcast Website

## Prerequisites

- Node.js 22 or later and npm.
- Dependencies installed from the repository root with `npm install`.

## Local development

1. Run `npm run dev`.
2. Open the local URL printed by Next.js (normally `http://localhost:3000`).
3. Verify Home, Episodes, About, FAQ, and a detail URL such as `/episodes/the-art-of-the-first-take`.

## Validate embedded content

- Run `npm run verify:content`.
- Expected: success message confirming 20 unique episode slugs, exactly one featured episode, required metadata, and FAQ content.

## Validate static export

1. Run `npm run build`.
2. Expected: exported site appears in `out/`, with `index.html`, `404.html`, primary page output, and one static detail document for each episode.
3. Optionally serve `out/` with a static file server and check `/`, `/episodes/`, `/about/`, `/faq/`, one valid episode slug, and an unknown URL.
4. Unknown dynamic slugs are not generated pages; verify the friendly unknown-path experience against the exported `out/404.html` using a static host/server.

## Manual quality review

- Check narrow mobile (about 375 px) and desktop (about 1440 px) layouts; no horizontal scrolling.
- Use keyboard-only navigation to verify landmarks, links, skip navigation, and visible focus.
- Check titles, heading hierarchy, image alternatives, and missing-artwork fallback.
