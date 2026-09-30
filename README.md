# Off Script

A responsive, static podcast website built with Next.js. All episode and FAQ content is mock data embedded in the project; there is no database, live feed, or audio player.

## Run locally

- Install dependencies with `npm install`.
- Start the development server with `npm run dev`.
- Open the local URL printed in the terminal.

## Checks and production build

- `npm run verify:content` checks the 20 distinct episode records and the featured episode.
- `npm run typecheck` checks TypeScript.
- `npm run build` creates the static website in `out/`.
- `npm run verify:export` checks the generated entry point, primary routes, not-found document, and episode pages.
- `npm run check` runs all validations and the production build.

The `out/` directory can be published to an HTTPS static host. Configure the host to use its standard static 404 document for unknown URLs.
