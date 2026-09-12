# Visit Bay Area

A San Francisco–to–Big Sur companion built on the **same architecture as Route 66** (Pruthvi Studios).

Named stops, a drivable Leaflet map, hidden-gem scoring, trip saves, and a static GitHub Pages mirror so the map stays public if a live host is down.

**84 stops** (third batch): SF food + views (including Mensho), Marin sunsets (Presidio / Mt. Tam), San Jose, Santa Cruz, 17-Mile Drive, Monterey, Carmel-by-the-Sea, and Big Sur.

## Public sites

| Site | URL |
|---|---|
| **Custom domain** | [sf.route66drive.com](https://sf.route66drive.com) — CNAME `sf` on the Porkbun `route66drive.com` zone |
| **Custom domain** | [virangi.route66drive.com](https://virangi.route66drive.com) — CNAME `virangi` → `visitbayarea.grok.me` on the Porkbun `route66drive.com` zone |
| **Live app** | [visitbayarea.grok.me](https://visitbayarea.grok.me) |
| **Map mirror** (no login, GitHub Pages) | [pruthvirajg.github.io/visitbayarea](https://pruthvirajg.github.io/visitbayarea/) |
| Source | [github.com/pruthvirajg/visitbayarea](https://github.com/pruthvirajg/visitbayarea) |
| Sister app (Route 66) | [route66drive.com](https://route66drive.com) |

To attach **sf.route66drive.com**: Porkbun DNS `CNAME` host `sf` → `cname.vercel-dns.com` (full app) or `pruthvirajg.github.io` (static map), then add the hostname on the Grok/Vercel project or GitHub Pages. Do not point `sf` at `route66drive.com` itself.

To attach **virangi.route66drive.com**: Porkbun DNS `CNAME` host `virangi` → `visitbayarea.grok.me` (added). Grok Build's custom-domain step still needs the hostname added on its side before traffic is actually served.

## Architecture (same as Route 66)

There is **no `stops` table**. Every pin is a TypeScript tuple in `src/lib/stops.ts`, compiled into the client and exported to `site/stops.json`.

```
Research JSON (inbox/new-stops.json)
        |
        v
src/lib/stops.ts     <- source of truth
        |
        +-- npm run site:export  ->  site/stops.json
                                    site/index.html map
```

Hard rules copied from Route 66:

- No Google Maps JavaScript API (named Drive links only)
- Coordinates are authored, never guessed by a generic geocoder
- Pages mirror has no login; accounts / photos / desk stay on a future live host
- Seller: **Pruthvi Studios**

See [ARCHITECTURE.md](ARCHITECTURE.md) and [BRANCHING.md](BRANCHING.md).

## Run the public map

```bash
cd site
python3 -m http.server 8766
```

Open http://localhost:8766

## Identity

| Field | Value |
|---|---|
| App name | Visit Bay Area |
| Developer | Pruthvi Studios |
| Bundle id | `studio.pruthvi.visitbayarea` |
| URL scheme | `visitbayarea://` |
