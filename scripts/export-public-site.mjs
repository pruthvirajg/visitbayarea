import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const text = readFileSync(join(root, "src/lib/stops.ts"), "utf8");
const body = text.match(/const RAW: Raw\[\] = \[([\s\S]*)\n\];/)?.[1];
if (!body) throw new Error("Could not find RAW stops");

const rows = [];
let i = 0;
while (i < body.length) {
  const start = body.indexOf("[", i);
  if (start < 0) break;
  let depth = 0;
  let k = start;
  for (; k < body.length; k++) {
    if (body[k] === "[") depth++;
    else if (body[k] === "]") {
      depth--;
      if (depth === 0) {
        const chunk = body.slice(start, k + 1);
        try {
          const row = Function(`"use strict"; return (${chunk});`)();
          if (Array.isArray(row) && typeof row[0] === "string" && row[0].includes("-")) {
            rows.push(row);
          }
        } catch {}
        i = k + 1;
        break;
      }
    }
  }
  if (k >= body.length) break;
}

const stops = rows.map((r) => ({
  id: r[0], name: r[1], city: r[2], state: r[3], lat: r[4], lon: r[5],
  mile: r[6], cat: r[7], gem: r[8], blurb: r[9], caution: r[10] || "",
}));

const payload = {
  updated: new Date().toISOString().slice(0, 10),
  app: "https://pruthvirajg.github.io/visitbayarea/",
  github: "https://github.com/pruthvirajg/visitbayarea",
  pages: "https://pruthvirajg.github.io/visitbayarea/",
  count: stops.length,
  stops,
};

const site = join(root, "site");
mkdirSync(site, { recursive: true });
writeFileSync(join(site, "stops.json"), JSON.stringify(payload, null, 2) + "\n");
console.log(`wrote site/stops.json (${stops.length} stops)`);
