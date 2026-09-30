# Data Model: Podcast Website

## Podcast

Represents the show's static identity and About-page context.

| Field | Type | Rules |
|---|---|---|
| name | string | Required; non-empty |
| tagline | string | Required; non-empty |
| description | string | Required; non-empty |
| host | string | Required; mock name allowed |

## Episode

Represents one entry in the locally embedded catalog and its statically generated detail page.

| Field | Type | Rules |
|---|---|---|
| slug | string | Required, URL-safe, unique |
| number | integer | Required, unique, 1–20 |
| title | string | Required; non-empty |
| summary | string | Required; non-empty |
| publishedAt | ISO date string | Required; valid date |
| duration | string | Required; human-readable duration |
| category | string | Required; non-empty |
| artwork | optional artwork descriptor | May be absent; use consistent fallback |
| featured | boolean | Exactly one record is true |

Catalog invariants: exactly 20 episode records; all slugs unique; all required fields present; exactly one featured episode. The featured pointer must refer to an episode in the catalog.

## FAQ Entry

| Field | Type | Rules |
|---|---|---|
| question | string | Required; non-empty |
| answer | string | Required; non-empty |

FAQ entries are ordered content; no persistence or state transitions are required.
