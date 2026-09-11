/** App Store / Play Store identity. Legal owner is still PruthviRaj G. */
import { CUSTOM_DOMAIN_URL, GROK_LIVE_URL } from "@/lib/hosts";

export const PUBLISHER = {
  developerName: "Pruthvi Studios",
  legalName: "PruthviRaj G",
  appName: "Visit Bay Area",
  appSubtitle: "SF ↔ Big Sur",
  bundleId: "studio.pruthvi.visitbayarea",
  scheme: "visitbayarea",
  liveUrl: GROK_LIVE_URL,
  publicUrl: CUSTOM_DOMAIN_URL,
  githubUrl: "https://github.com/pruthvirajg/visitbayarea",
  studioGithubUrl: "https://github.com/pruthvirajg/visitbayarea-studio",
  sisterMapUrl: "https://route66drive.com",
  privacyPath: "/privacy",
  supportPath: "/support",
  privacyUrl: `${CUSTOM_DOMAIN_URL}/privacy`,
  supportUrl: `${CUSTOM_DOMAIN_URL}/support`,
  issuesUrl: "https://github.com/pruthvirajg/visitbayarea/issues",
  instagramHandle: "a_travelling_machine",
  instagramUrl: "https://www.instagram.com/a_travelling_machine/",
  category: "Travel",
  themeColor: "#14161b",
  cream: "#ede6d6",
  neon: "#3db8a6",
} as const;
