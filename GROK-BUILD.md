# Paste this into Grok Build Mode

Project name: visitbayarea
Publish as: public → https://visitbayarea.grok.me
Source of truth: https://github.com/pruthvirajg/visitbayarea (folder `site/`)
Reference product: https://pruthvirajg.github.io/visitbayarea/ and https://route66.grok.me

---

Build a phone-first traveler map called **Visit Bay Area** (Pruthvi Studios).

Architecture (do not invent a new stack):
- Single static site: index.html + app.js + styles.css + stops.json + favicon.svg
- Leaflet + Esri dark gray tiles. **No Google Maps JavaScript API.**
- Drive links: `https://www.google.com/maps/dir/?api=1&destination=NAME,+CITY,+California`
- Trip saves in localStorage key `gem-bucket:visitbayarea`
- Theme: asphalt `#14161b`, cream `#ede6d6`, neon `#3db8a6`, dust `#8a8578`
- Fonts: Bebas Neue + Figtree
- Header shield text: BA
- Tabs/actions: search list on the right (below map on phone), button **My trip** / **The road**

Data: fetch `./stops.json`. 32 stops from Marin through San Francisco, San Jose, Santa Cruz, Monterey/Carmel, Big Sur. Include Mensho Tokyo SF (Michelin Guide listed since 2017 — do not invent a current star), Presidio Visitor Center + Tunnel Tops, Mount Tamalpais East Peak, 17-Mile Drive + Lone Cypress, Pfeiffer Beach.

gem ≥ 65 = Hidden badge + teal pin. gem ≥ 35 = known/cream. else icon/dust.

Do not add accounts, photos, or an admin desk.
Copy layout from Route 66 public map: header bar, map | list, footer links to github.com/pruthvirajg/visitbayarea.

When the preview works, publish public at visitbayarea.grok.me.
