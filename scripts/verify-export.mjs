import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";

const root = new URL("../out/", import.meta.url);
const exists = async (path) => access(new URL(path, root)).then(() => true, () => false);

assert.ok(await exists("index.html"), "Static export must contain root index.html");
assert.ok(await exists("404.html"), "Static export must contain a not-found document");
for (const path of ["episodes/index.html", "about/index.html", "faq/index.html"]) {
  assert.ok(await exists(path), `Static export is missing ${path}`);
}
const episodeDirectories = await readdir(new URL("episodes/", root), { withFileTypes: true });
const detailDirectories = episodeDirectories.filter((entry) => entry.isDirectory() && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.name));
assert.equal(detailDirectories.length, 20, `Expected 20 generated episode pages; found ${detailDirectories.length}`);
for (const directory of detailDirectories) {
  const path = `episodes/${directory.name}/index.html`;
  const html = await readFile(new URL(path, root), "utf8");
  assert.match(html, /<h1[^>]*>/, `Generated episode page has no page heading: ${directory.name}`);
}
console.log("Export check passed: index, 404, primary routes, and 20 episode detail pages exist.");
