/** Production hostnames this app answers on. */
export const GROK_LIVE_HOST = "visitbayarea.grok.me";
export const CUSTOM_DOMAIN = "sf.route66drive.com";

/** Full app hosts (HTTPS). Used by auth trusted origins and publisher copy. */
export const PRODUCTION_HOSTS: string[] = [GROK_LIVE_HOST, CUSTOM_DOMAIN];

export const GROK_LIVE_URL = `https://${GROK_LIVE_HOST}`;
export const CUSTOM_DOMAIN_URL = `https://${CUSTOM_DOMAIN}`;
