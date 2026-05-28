import { copyFileSync, existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const staticDir = join(root, ".next", "static");
const chunksDir = join(staticDir, "chunks");
const appChunksDir = join(chunksDir, "app");
const cssDir = join(staticDir, "css");
const cssAppDir = join(cssDir, "app");

function copyFirstMatch(fromDir, prefix, suffix, target) {
  if (!existsSync(fromDir)) return;
  const match = readdirSync(fromDir).find(
    (file) => file.startsWith(prefix) && file.endsWith(suffix) && file !== `${prefix}${suffix}`
  );
  if (!match) return;
  copyFileSync(join(fromDir, match), target);
}

mkdirSync(appChunksDir, { recursive: true });
mkdirSync(cssAppDir, { recursive: true });

copyFirstMatch(chunksDir, "main-app-", ".js", join(chunksDir, "main-app.js"));
copyFirstMatch(appChunksDir, "layout-", ".js", join(appChunksDir, "layout.js"));
copyFirstMatch(appChunksDir, "page-", ".js", join(appChunksDir, "page.js"));
copyFirstMatch(cssDir, "", ".css", join(cssAppDir, "layout.css"));

const appInternals = join(chunksDir, "app-pages-internals.js");
if (!existsSync(appInternals)) {
  writeFileSync(appInternals, "// app-pages-internals placeholder\n");
}
