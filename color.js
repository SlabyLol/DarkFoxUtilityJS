/**
 * DarkFoxUtilityJS - Color Processing Matrix (v1.5.0)
 */

// HEX-String zu RGB-Objekt
export function hexToRgb(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

// RGB zu HEX-String
export function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// RGB zu HSL-Objekt
export function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) { h = s = 0; } 
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

/**
 * Generiert CSS Linear-Gradient Code
 */
export function generateGradient(colorA, colorB, angle = 135) {
  return `linear-gradient(${angle}deg, ${colorA}, ${colorB})`;
}

/**
 * Generiert eine harmonische Farbpalette aus einer Basisfarbe (HEX)
 */
export function generatePalette(baseHex) {
  const rgb = hexToRgb(baseHex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  
  return {
    base: baseHex,
    light: `hsl(${hsl.h}, ${hsl.s}%, ${Math.min(hsl.l + 20, 95)}%)`,
    dark: `hsl(${hsl.h}, ${hsl.s}%, ${Math.max(hsl.l - 20, 10)}%)`,
    alpha: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`
  };
}
