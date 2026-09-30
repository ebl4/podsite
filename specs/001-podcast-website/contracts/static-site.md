# Static Site Contract

This application publishes a static directory. It exposes no API endpoints and requires no runtime server.

## Routes

- `/` — show landing page with one featured episode.
- `/episodes/` — complete 20-item episode catalog.
- `/episodes/{slug}/` — generated detail page for a known episode slug.
- `/about/` — show and host context.
- `/faq/` — listener FAQ.
- Unknown paths — static not-found experience.

## Export contract

The production build writes all deployable files under `out/`. The export includes root `index.html`, a not-found document, all primary routes, and all 20 episode detail documents. Internal links use root-relative web paths and are served by static hosting.
