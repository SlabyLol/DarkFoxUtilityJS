/**
 * DarkFox Co. Utility Library
 * Works in Node.js and directly in the Browser!
 */

// 1. Stylized Terminal/Console Logger
export const foxLog = {
  info: (msg) => console.log(`%c[DarkFox INFO]%c ${msg}`, 'color: #00bcd4; font-weight: bold;', ''),
  success: (msg) => console.log(`%c[DarkFox SUCCESS]%c ${msg}`, 'color: #4caf50; font-weight: bold;', ''),
  warn: (msg) => console.log(`%c[DarkFox WARN]%c ${msg}`, 'color: #ff9800; font-weight: bold;', ''),
  error: (msg) => console.error(`%c[DarkFox ERROR]%c ${msg}`, 'color: #f44336; font-weight: bold;', '')
};

// 2. Browser-compatible Unique ID Generator
export function generateFoxId(prefix = 'df') {
  // Uses standard web crypto available in modern browsers and Node.js
  const randomPart = Math.random().toString(16).substring(2, 10);
  return `${prefix}_${randomPart}_${Date.now().toString().slice(-4)}`;
}

// 3. Simple Sleep/Delay helper
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
