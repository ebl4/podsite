# Research: Podcast Website

## Decision 1: Next.js App Router with static export

- **Decision**: Use the current stable Next.js release (16.3.8 at planning time) with App Router and `output: 'export'`. Render all pages to static output; use `generateStaticParams` to enumerate the 20 episode slugs.
- **Rationale**: Meets the user's Next.js request and the constitution's static-only hosting requirements without a server or database. Static detail pages are shareable and available on direct navigation through host-served files.
- **Alternatives considered**: Server-rendered Next.js (requires a runtime and exceeds scope); SPA-only routing (requires host fallback and weakens direct static route behavior); a different static site framework (conflicts with user direction).

## Decision 2: Embedded local content

- **Decision**: Store podcast identity, FAQ items, and exactly 20 episode records as typed source data. Mark exactly one record as featured. Validate uniqueness, total count, and required fields during verification.
- **Rationale**: The user explicitly requested mock content and no real feed or database.
- **Alternatives considered**: CMS/database or real RSS/Atom integration (out of scope and unnecessary for fixed mock content).

## Decision 3: Server-rendered static UI and plain CSS

- **Decision**: Use server components by default, CSS for responsive layout and visual system, and minimal lightweight icons only where useful.
- **Rationale**: Provides static HTML content without requiring client-side state and keeps dependencies modest.
- **Alternatives considered**: Client-heavy UI framework and utility CSS framework (not needed for the small static surface).

## Decision 4: Provider-neutral deployment workflow

- **Decision**: Add GitHub Actions to install dependencies, build, and assert that `out/index.html` and `out/404.html` exist. Do not add a deployment action until a host is selected.
- **Rationale**: Enforces the constitution's CI build and static entry-point smoke check without assuming a hosting provider.
- **Alternatives considered**: Provider-specific deploy workflow (requires unspecified account/project configuration and potentially secrets).
