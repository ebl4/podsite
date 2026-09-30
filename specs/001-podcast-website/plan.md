# Implementation Plan: Podcast Website

**Branch**: `001-podcast-website` | **Date**: 2026-09-30 | **Spec**: [spec.md](spec.md)

**Input**: [Feature specification](spec.md)

## Summary

Deliver a sleek, mobile-ready podcast discovery site using Next.js App Router and static export. Keep exactly 20 fictional episode records and show/FAQ content embedded in source; pre-render all pages at build time. There is no database, real feed, CMS, audio playback, or server runtime.

## Technical Context

**Language/Version**: TypeScript 5, Node.js 22 LTS

**Primary Dependencies**: Next.js 16.3.8, React 19, lucide-react for compact interface icons; CSS Modules/global CSS without a UI framework

**Storage**: None; embedded TypeScript content, exported into static files

**Testing**: Node built-in assertions for content invariants; production static build and output smoke checks; manual responsive and accessibility review

**Target Platform**: Modern desktop and mobile browsers; static hosting over HTTPS

**Project Type**: Single Next.js web application with static export

**Performance Goals**: Render page content immediately from static HTML; no client-side JavaScript required for reading/navigation; locally served assets

**Constraints**: Next.js `output: 'export'`; `out/` includes root `index.html`, static route output, and `404.html`; responsive layouts with no horizontal overflow; no remote image dependency or committed secrets

**Scale/Scope**: Four primary pages, one episode collection, 20 statically generated episode detail pages, About, FAQ, and not-found view

## Constitution Check

- Static output with root `index.html`: PASS — Next.js static export writes pages to `out/`.
- Reproducible build and local dev server: PASS — npm scripts for build and dev.
- Relative/local assets: PASS — artwork will be CSS/local SVG or local static assets; no runtime remote dependencies.
- Hosting/CI: PASS — configure build and static-output smoke check in GitHub Actions; hosting-provider deployment remains provider-neutral.
- Secrets: PASS — no credentials or server-side secrets required.
- Accessibility: PASS — semantic elements, meaningful page metadata, viewport metadata, keyboard focus, descriptive image alternatives, responsive CSS.
- SPA fallback: N/A — routes are prerendered static documents; export includes not-found output.

## Project Structure

```text
src/
├── app/
│   ├── about/page.tsx
│   ├── episodes/page.tsx
│   ├── episodes/[slug]/page.tsx
│   ├── faq/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── artwork.tsx
│   ├── episode-card.tsx
│   ├── site-header.tsx
│   └── site-footer.tsx
└── content/
    └── podcast.ts
scripts/
└── verify-content.mjs
.github/workflows/
└── ci.yml
next.config.ts
package.json
```

**Structure Decision**: One Next.js App Router project. Static App Router pages and `generateStaticParams` create route files for every embedded episode; shared content and shell components are separated by responsibility. Plain CSS avoids adding an unnecessary design system dependency.

## Complexity Tracking

No constitution violations or additional architectural complexity are required.
