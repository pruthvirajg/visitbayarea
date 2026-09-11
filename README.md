# Visit Bay Area

A San Francisco–to–Big Sur companion built on the **same architecture as Route 66** (Pruthvi Studios).

Named stops, a drivable Leaflet map, hidden-gem scoring, trip saves, and a static GitHub Pages mirror so the map stays public if a live host is down.

**32 stops** in the first batch: SF food + views (including Mensho), Marin sunsets (Presidio / Mt. Tam), San Jose, Santa Cruz, 17-Mile Drive, Monterey, Carmel-by-the-Sea, and Big Sur.

## Public sites

| Site | URL |
|---|---|
| **Map mirror** (no login, GitHub Pages) | [pruthvirajg.github.io/visitbayarea](https://pruthvirajg.github.io/visitbayarea/) |
| Source | [github.com/pruthvirajg/visitbayarea](https://github.com/pruthvirajg/visitbayarea) |
| Sister app (Route 66) | [route66drive.com](https://route66drive.com) |

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
