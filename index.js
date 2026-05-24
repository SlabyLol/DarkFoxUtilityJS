// --- EXISTING v1.4.2 CORES ---
export { debounce, throttle, sleep } from './performance.js';
export { generatePassword, generateFoxId, escapeHtml } from './security.js';
export { foxStorage } from './storage.js';
export { shuffleArray, removeDuplicates, truncateText, deepClone } from './data.js';
export { randomRange, formatNumberShort } from './math.js';
export { initSMTGrid } from './smt-grid.js';
export { DFWebAI } from './webai.js';

// --- NEW v1.5.0 MODULAR EXPORTS ---
export { safeJson, foxFetch } from './network.js';
export { $, $$, el, on } from './dom.js';
export { hexToRgb, rgbToHex, rgbToHsl, generateGradient, generatePalette } from './color.js';
export { formatTime, relativeTime, FoxTimer } from './time.js';
export { isEmail, isUrl, checkPasswordStrength } from './validate.js';

// Zentraler Logger
export const foxLog = {
  success: (msg) => console.log(`%c[DarkFox SUCCESS]%c ${msg}`, 'color: #10b981; font-weight: bold;', ''),
  info: (msg) => console.log(`%c[DarkFox INFO]%c ${msg}`, 'color: #00bcd4; font-weight: bold;', ''),
  warn: (msg) => console.log(`%c[DarkFox WARN]%c ${msg}`, 'color: #ff9800; font-weight: bold;', ''),
  error: (msg) => console.error(`%c[DarkFox ERROR]%c ${msg}`, 'color: #f44336; font-weight: bold;', '')
};
