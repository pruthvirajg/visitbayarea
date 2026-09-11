export type StopCategory =
  | "landmark"
  | "diner"
  | "museum"
  | "muffler_man"
  | "gas_station"
  | "roadside"
  | "bridge"
  | "park"
  | "motel"
  | "ruin"
  | "neon";

export type StopTier = "hidden" | "known" | "icon";
export type RegionCode = "mrn" | "sf" | "scl" | "scz" | "mty" | "bsr";

export type Stop = {
  id: string;
  name: string;
  city: string;
  state: "CA";
  lat: number;
  lon: number;
  mile: number;
  cat: StopCategory;
  gem: number;
  blurb: string;
  caution: string;
};

export const REGION_ORDER: RegionCode[] = ["mrn", "sf", "scl", "scz", "mty", "bsr"];

export const REGION_NAMES: Record<RegionCode, string> = {
  mrn: "Marin",
  sf: "San Francisco",
  scl: "San Jose / South Bay",
  scz: "Santa Cruz",
  mty: "Monterey & Carmel",
  bsr: "Big Sur",
};

export function tierOf(stop: Stop): StopTier {
  if (stop.gem >= 65) return "hidden";
  if (stop.gem >= 35) return "known";
  return "icon";
}

export const MAJOR_CITIES = [
  "Mill Valley",
  "San Francisco",
  "San Jose",
  "Santa Cruz",
  "Monterey",
  "Carmel-by-the-Sea",
  "Big Sur",
] as const;

/** First-batch pins also live in site/stops.json and the north/south splits. */
export const STOPS: Stop[] = [
  { id: "sf-001", name: "Mensho Tokyo SF", city: "San Francisco", state: "CA", lat: 37.7867, lon: -122.4145, mile: 21, cat: "diner", gem: 26, blurb: "Michelin Guide listed since 2017. Tori paitan that still costs like dinner.", caution: "Dinner only. Line on weekends." },
  { id: "sf-002", name: "Presidio Visitor Center + Tunnel Tops", city: "San Francisco", state: "CA", lat: 37.8005, lon: -122.4578, mile: 22, cat: "landmark", gem: 26, blurb: "GG sunset plus the bridge in frame.", caution: "Fog happens." },
  { id: "mrn-003", name: "Mount Tamalpais East Peak", city: "Mill Valley", state: "CA", lat: 37.9291, lon: -122.5776, mile: 3, cat: "park", gem: 26, blurb: "Short plank-walk to the lookout. Inversion days sit above the fog.", caution: "Lot fee often cash." },
];
