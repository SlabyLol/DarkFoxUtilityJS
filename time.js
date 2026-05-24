/**
 * DarkFoxUtilityJS - Chronos Engine (v1.5.0)
 */

// Formatiert Datums-Objekte oder Timestamps lesbar (HH:MM:SS)
export function formatTime(date = new Date()) {
  const d = new Date(date);
  return d.toTimeString().split(' ')[0];
}

/**
 * Berechnet relative Zeitdifferenzen ("Just now", "5 minutes ago")
 */
export function relativeTime(timestamp) {
  const ms = Date.now() - new Date(timestamp).getTime();
  const sec = Math.floor(ms / 1000);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const days = Math.floor(hr / 24);

  if (sec < 5) return "Just now";
  if (sec < 60) return `${sec} seconds ago`;
  if (min < 60) return `${min} minute${min > 1 ? 's' : ''} ago`;
  if (hr < 24) return `${hr} hour${hr > 1 ? 's' : ''} ago`;
  return `${days} day${days > 1 ? 's' : ''} ago`;
}

/**
 * Hochpräziser Performance Timer für Benchmarks
 */
export class FoxTimer {
  constructor() { this.startTime = 0; this.endTime = 0; }
  start() { this.startTime = performance.now(); }
  stop() { 
    this.endTime = performance.now(); 
    return parseFloat((this.endTime - this.startTime).toFixed(2)); // ms
  }
}
