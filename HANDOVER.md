# HANDOVER — Visit Bay Area on Grok Build

Goal: a live traveler map at **https://visitbayarea.grok.me** (same role as `route66.grok.me`), built from this repo.

Owner: Pruthvi Studios / PruthviRaj G.
Repo: https://github.com/pruthvirajg/visitbayarea
Already live (Pages mirror): https://pruthvirajg.github.io/visitbayarea/
Sister product: Route 66 → https://route66.grok.me

## What this repo is

The **traveler map**. Not the studio desk.

```
site/                 ← what Grok Build should host
  index.html          map + list chrome
  app.js              Leaflet, search, My trip (localStorage)
  styles.css          asphalt / cream / sea-glass (Route 66 tokens, teal neon)
  stops.json          32 authored pins
  favicon.svg
src/lib/stops.ts      TypeScript source of truth (tuple shape = Route 66)
src/lib/publisher.ts  Pruthvi Studios identity
scripts/export-public-site.mjs
```

There is **no stops table**. Pins are data. Drive buttons are named Google Maps URLs. No Maps JS API key.

## What Grok Build must ship (v1)

Must match the live Pages map:

- Dark map (Esri dark gray / Carto), Leaflet, no Google Maps JS
- Header: shield **BA**, title **Visit Bay Area**, count `32 stops · SF to Big Sur`
- Search box + scrollable stop list
- Pins colored by gem: teal ≥65 hidden, cream ≥35 known, dust = icon
- Popup: name, city, blurb, **Drive**, **Save**
- **My trip** toggle (localStorage key `gem-bucket:visitbayarea`)
- Regions in the list: Marin, SF, San Jose, Santa Cruz, Monterey, Big Sur

Do **not** add login, photos, or a Director’s cut on this host unless you open a separate `visitbayarea-studio` project.

## Stops that must exist

Keep these exact names (ids in `site/stops.json`):

- SF food: Mensho Tokyo SF, Swan Oyster Depot, San Tung
- SF sunsets: Presidio Visitor Center + Tunnel Tops, Immigrant Point, Golden Gate Overlook, Baker Beach, Lands End Labyrinth, Grand View Park, 16th Avenue Tiled Steps, Twin Peaks
- Marin: Battery Spencer, Hawk Hill, Mount Tamalpais East Peak, Trojan Point
- San Jose: Japantown, Municipal Rose Garden, Almaden Quicksilver, Hue
- Santa Cruz: West Cliff / Steamer Lane, Natural Bridges, Shark Fin Cove
- Monterey / Carmel: 17-Mile Drive + Lone Cypress, Spanish Bay bagpiper, Point Lobos, Carmel Beach, Monterey Bay Aquarium
- Big Sur: Garrapata Bluff, Bixby, Nepenthe, Pfeiffer Beach, McWay Falls

Mensho copy rule: **Michelin Guide listed since 2017**. Do not invent a current star count.

## How to build it in Grok Build Mode

Do this on grok.com (web) or the iOS app. You are already in SuperGrok.

### 1. New Build thread

Open Grok → switch to **Build** mode → new project.
Name: `visitbayarea`.
Publish slug you want: `visitbayarea` so the host is `visitbayarea.grok.me`.

### 2. First prompt (paste as-is)

Use the prompt in [GROK-BUILD.md](GROK-BUILD.md).

### 3. Point it at this repo

If Build can import GitHub:

- Import `pruthvirajg/visitbayarea`
- Root for the hosted site = `site/`
- Do not run `npm run build` — there is no Vite app in this repo yet

If Build only accepts a description, paste GROK-BUILD.md and say:

> Rebuild `site/index.html` + `site/app.js` + `site/styles.css` + `site/stops.json` from github.com/pruthvirajg/visitbayarea. Host that folder. Publish public to visitbayarea.grok.me.

### 4. Publish

- Visibility: **Public**
- Subdomain: `visitbayarea`
- After it is live, set `PUBLISHER.liveUrl` in `src/lib/publisher.ts` to `https://visitbayarea.grok.me`

### 5. Check the preview

- Map fits Marin → Big Sur
- Search `mensho` opens the Geary pin
- Search `sunset` still shows Presidio + Tam + Pfeiffer
- Save a pin, refresh, **My trip** still has it
- Drive opens Google Maps with a **place name**, not raw lat/lon

## What not to copy from Route 66 studio

Do not paste cue cards, camera, shoot scripts, or `/studio` into this public Build. That stays in `route66-studio`.

## After grok.me is up

1. Update README public-sites table to list `visitbayarea.grok.me` first
2. Keep GitHub Pages as the $0 mirror
3. Only then consider Capacitor (`studio.pruthvi.visitbayarea`) pointed at the grok.me URL — same WebView rule as Route 66
