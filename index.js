// --- MODULARE EXPORTS ---
export { debounce, throttle, sleep } from './performance.js';
export { generatePassword, generateFoxId, escapeHtml } from './security.js';
export { foxStorage } from './storage.js';
export { shuffleArray, removeDuplicates, truncateText, deepClone } from './data.js';
export { randomRange, formatNumberShort, hexToRgb } from './math.js';
export { initSMTGrid } from './smt-grid.js';
export { DFWebAI } from './webai.js';

// --- ZENTRALES LOGGING SYSTEM ---
export const foxLog = {
  info: (msg) => console.log(`%c[DarkFox INFO]%c ${msg}`, 'color: #00bcd4; font-weight: bold;', ''),
  success: (msg) => console.log(`%c[DarkFox SUCCESS]%c ${msg}`, 'color: #4caf50; font-weight: bold;', ''),
  warn: (msg) => console.log(`%c[DarkFox WARN]%c ${msg}`, 'color: #ff9800; font-weight: bold;', ''),
  error: (msg) => console.error(`%c[DarkFox ERROR]%c ${msg}`, 'color: #f44336; font-weight: bold;', '')
};
