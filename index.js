/**
 * DarkFox Co. Advanced Utility Library
 * Enhanced Edition - Pure JS (Browser & Node.js compatible)
 */

// ==========================================
// 1. SYSTEM & LOGGING
// ==========================================
export const foxLog = {
  info: (msg) => console.log(`%c[DarkFox INFO]%c ${msg}`, 'color: #00bcd4; font-weight: bold;', ''),
  success: (msg) => console.log(`%c[DarkFox SUCCESS]%c ${msg}`, 'color: #4caf50; font-weight: bold;', ''),
  warn: (msg) => console.log(`%c[DarkFox WARN]%c ${msg}`, 'color: #ff9800; font-weight: bold;', ''),
  error: (msg) => console.error(`%c[DarkFox ERROR]%c ${msg}`, 'color: #f44336; font-weight: bold;', '')
};

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ==========================================
// 2. SECURITY & STRINGS
// ==========================================

// Generates a random secure-looking string ID
export function generateFoxId(prefix = 'df') {
  const randomPart = Math.random().toString(16).substring(2, 10);
  return `${prefix}_${randomPart}_${Date.now().toString().slice(-4)}`;
}

// Generate a random, strong password with numbers and symbols
export function generatePassword(length = 16) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Escapes HTML tags to prevent XSS injection attacks
export function escapeHtml(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

// ==========================================
// 3. DATA & ARRAYS
// ==========================================

// Shuffles an array completely random (Fisher-Yates algorithm)
export function shuffleArray(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// Removes all duplicate values from an array
export function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Truncates a long text and adds "..." if it exceeds the limit
export function truncateText(text, maxLength = 30) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// ==========================================
// 4. MATH & UTILS
// ==========================================

// Generates a random number between min and max (inclusive)
export function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Formats big numbers (e.g., 1500 -> 1.5k, 2500000 -> 2.5M)
export function formatNumberShort(num) {
  if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(1) + 'k';
  return num.toString();
}
