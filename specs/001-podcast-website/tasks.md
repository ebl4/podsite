# Tasks: Podcast Website

**Input**: Design documents from [specs/001-podcast-website/](.)

**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [quickstart.md](quickstart.md)

## Phase 1: Setup

**Purpose**: Establish a static Next.js project foundation.

- [X] T001 Initialize Next.js App Router project with TypeScript and npm in package.json, next.config.ts, tsconfig.json, and src/app/.
- [X] T002 [P] Add Node/Next build-output ignores in .gitignore.
- [X] T003 Configure static export, metadata defaults, build scripts, and icon dependencies in next.config.ts, src/app/layout.tsx, and package.json.

## Phase 2: Foundational

**Purpose**: Shared content model, visual foundation, and accessibility shell.

- [X] T004 [P] Define show, FAQ, and 20 validated episode records in src/content/podcast.ts.
- [X] T005 [P] Build responsive global editorial design tokens and baseline styles in src/app/globals.css.
- [X] T006 Implement root layout, metadata, skip link, shared navigation, and footer in src/app/layout.tsx, src/components/site-header.tsx, and src/components/site-footer.tsx.
- [X] T007 Add automated content invariants for count, unique slugs, required metadata, and featured record in scripts/verify-content.mjs.

## Phase 3: User Story 1 - Discover the featured episode (Priority: P1)

**Goal**: Introduce the show and guide visitors to the one featured episode.

**Independent Test**: Home shows one featured episode and opens its corresponding detail page, with readable layout at mobile and desktop widths.

- [X] T008 [US1] Implement featured landing page with exactly one primary episode promotion in src/app/page.tsx.
- [X] T009 [P] [US1] Create reusable cover artwork and fallback treatment in src/components/artwork.tsx.

## Phase 4: User Story 2 - Browse and inspect episodes (Priority: P1)

**Goal**: Present all 20 distinct episodes and individual static detail views.

**Independent Test**: Episodes page presents all 20 entries; each opens matching title, summary, date, and duration; an unknown slug has a helpful not-found view.

- [X] T010 [P] [US2] Create responsive episode card with title, summary, date, duration, and artwork in src/components/episode-card.tsx.
- [X] T011 [US2] Implement the complete 20-entry episode collection page in src/app/episodes/page.tsx.
- [X] T012 [US2] Generate static episode detail pages for every slug and use the not-found experience for invalid identifiers in src/app/episodes/[slug]/page.tsx.
- [X] T013 [US2] Add accessible static not-found content and route back to Episodes in src/app/not-found.tsx.

## Phase 5: User Story 3 - Learn about the show and get answers (Priority: P2)

**Goal**: Supply show context and scannable listener FAQ content.

**Independent Test**: Visitors can navigate to About and FAQ from the shared header and understand the supplied mock content.

- [X] T014 [P] [US3] Implement About content and host/show context in src/app/about/page.tsx.
- [X] T015 [P] [US3] Implement scannable FAQ question-and-answer content in src/app/faq/page.tsx.

## Phase 6: Polish and Cross-Cutting Concerns

**Purpose**: Verify static delivery, accessibility, and responsive behavior.

- [X] T016 Add content and static output smoke scripts to package.json and scripts/verify-export.mjs.
- [X] T017 [P] Add CI workflow for build, content validation, and root index.html check in .github/workflows/ci.yml.
- [X] T018 Run build and content/export checks; manually review all routes at mobile and desktop widths, keyboard focus, and semantic structure in quickstart.md.
- [X] T019 Document local development, validation, and static publishing in README.md.

## Dependencies & Execution Order

- Setup tasks are first; content, styling, and shared shell form the blocking foundation.
- User Story 1 and User Story 2 are P1; with the shared foundation complete, the story-specific page tasks can proceed independently except that Story 2 details depend on the episode data.
- User Story 3 pages depend on the shared layout and content definitions.
- Polish tasks depend on page completion.

## Parallel Opportunities

- T004, T005, T006, and T007 touch separate files and can be done concurrently after project setup.
- T008 and T009 can proceed in parallel after content and style foundations.
- T010 and About/FAQ pages (T014–T015) use separate files; episode list/detail depend on dataset readiness.
- CI workflow (T017) is independent of export smoke implementation (T016).

## Implementation Strategy

1. Complete project setup and shared foundations.
2. Deliver Home as the initial MVP and verify the featured journey.
3. Deliver the episode catalog and details, then About and FAQ.
4. Complete automated static export checks, CI validation, and responsive/accessibility review.
