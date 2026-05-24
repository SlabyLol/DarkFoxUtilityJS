/**
 * DarkFoxUtilityJS - Network Module (v1.5.0)
 * Advanced Fetch Wrapper with timeouts and automatic retry logic.
 */

// Hilfsfunktion für JSON-Payloads, um try/catch im Hauptcode zu sparen
export function safeJson(str) {
  try { return JSON.parse(str); } 
  catch (e) { return null; }
}

/**
 * Robust HTTP Request Client
 * @param {string} url - Target endpoint
 * @param {Object} options - Fetch options + custom (timeout, retries)
 */
export async function foxFetch(url, options = {}) {
  const { timeout = 8000, retries = 3, ...fetchOptions } = options;
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    
    try {
      const response = await fetch(url, { ...fetchOptions, signal: controller.signal });
      clearTimeout(id);
      
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response;
    } catch (err) {
      clearTimeout(id);
      if (attempt === retries) {
        console.error(`[DarkFox Network] Request failed after ${retries} attempts.`);
        throw err;
      }
      console.warn(`[DarkFox Network] Attempt ${attempt} failed. Retrying...`);
    }
  }
}
