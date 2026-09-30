import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/content/podcast.ts", import.meta.url), "utf8");
const slugs = [...source.matchAll(/^\s*\["([a-z0-9-]+)",\s*"([^"]+)"/gm)].map((match) => ({ slug: match[1], title: match[2] }));
const requiredFields = ["slug", "number", "title", "summary", "publishedAt", "duration", "category", "artwork", "featured"];

assert.equal(slugs.length, 20, `Expected exactly 20 episodes; found ${slugs.length}`);
assert.equal(new Set(slugs.map((episode) => episode.slug)).size, 20, "Episode slugs must be unique");
for (const field of requiredFields) assert.match(source, new RegExp(`\\b${field}\\b`), `Missing required episode field: ${field}`);
assert.match(source, /featured:\s*index\s*===\s*0/, "Exactly one episode should be featured");
assert.match(source, /export const faqs\s*=\s*\[/, "FAQ content is required");
assert.ok(slugs.every((episode) => episode.title.length > 0), "Episode titles must not be empty");
console.log("Content check passed: 20 unique episodes, one featured episode, required fields, and FAQ content.");
