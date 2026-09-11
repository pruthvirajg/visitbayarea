# Architecture — Visit Bay Area (Pruthvi Studios)

Same system design as Route 66 (`pruthvirajg/route66-studio`), retargeted at the Bay Area and the coast south to Big Sur.

## 1. What this is

A phone-first companion for **San Francisco food + views**, plus day-trip pins in Marin, San Jose, Santa Cruz, Monterey, Carmel-by-the-Sea, and Big Sur.

## 2. Two products (same split as Route 66)

| | Traveler map (this repo) | Future studio |
|---|---|---|
| GitHub | `pruthvirajg/visitbayarea` | `visitbayarea-studio` when accounts ship |
| What ships | Map, list, Drive here, local bucket | Login, photos, owner desk |
| Host | GitHub Pages from `site/` | Live host + DATABASE_URL |
| Auth | None | Better Auth + members |

Phone apps, when they exist, are a Capacitor WebView of the live URL — not a second map codebase.

## 3. Data model — STOPS is the database

Tuple shape (identical to Route 66):

```
[id, name, city, state, lat, lon, mile, cat, gem, blurb, caution]
```

Regions: `mrn` Marin, `sf` San Francisco, `scl` San Jose / South Bay, `scz` Santa Cruz, `mty` Monterey & Carmel, `bsr` Big Sur.

`gem >= 65` hidden, `>= 35` known, else icon.

## 4. Map

Leaflet + dark Esri tiles. No Google Maps JS. Drive buttons build a named destination URL.
