// Generiert eine Zufallszahl in einer Spanne von Min bis Max (inklusive)
export function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Komprimiert große Zahlen lesbar (z.B. 1500 -> 1.5k, 2500000 -> 2.5M)
export function formatNumberShort(num) {
  if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(1) + 'k';
  return num.toString();
}

// Rechnet HEX-Farben in einsatzbereites RGBA um (wichtig für dynamische UI-Themes)
export function hexToRgb(hex, alpha = 1) {
  let c = hex.substring(1);
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return { r, g, b, alpha, css: `rgba(${r}, ${g}, ${b}, ${alpha})` };
}
