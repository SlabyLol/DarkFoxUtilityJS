/**
 * DarkFoxUtilityJS - Full Suite Engine v1.3.0
 * Includes: Performance, Security, Storage, UI & Adaptive WebAI
 */

// --- 1. CORE & LOGGING ---
export const foxLog = {
  info: (msg) => console.log(`%c[DarkFox INFO]%c ${msg}`, 'color: #00bcd4; font-weight: bold;', ''),
  success: (msg) => console.log(`%c[DarkFox SUCCESS]%c ${msg}`, 'color: #4caf50; font-weight: bold;', ''),
  warn: (msg) => console.log(`%c[DarkFox WARN]%c ${msg}`, 'color: #ff9800; font-weight: bold;', ''),
  error: (msg) => console.error(`%c[DarkFox ERROR]%c ${msg}`, 'color: #f44336; font-weight: bold;', '')
};

export const sleep = (ms) => new Promise(res => setTimeout(res, ms));

// --- 2. PERFORMANCE ---
export function debounce(func, delay = 300) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

export function throttle(func, limit = 300) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// --- 3. SECURITY & DATA ---
export function generatePassword(len = 16) {
  const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  return Array.from({length: len}, () => c[Math.floor(Math.random()*c.length)]).join('');
}

export function escapeHtml(str) {
  const p = {'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;'};
  return str.replace(/[&<>"']/g, m => p[m]);
}

export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// --- 4. SMART STORAGE ---
export const foxStorage = {
  set: (key, val, ttl = null) => {
    localStorage.setItem(key, JSON.stringify({ data: val, exp: ttl ? Date.now() + ttl : null }));
  },
  get: (key) => {
    const item = JSON.parse(localStorage.getItem(key));
    if (!item) return null;
    if (item.exp && Date.now() > item.exp) { localStorage.removeItem(key); return null; }
    return item.data;
  }
};

// --- 5. ADAPTIVE WEBAI ENGINE ---
export class DFWebAI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`;
    this.history = [];
    this.instruct = "You are an adaptive AI by DarkFox Co. Mirror the user's language, tone, and style perfectly.";
  }

  async sendMessage(msg) {
    this.history.push({ role: "user", parts: [{ text: msg }] });
    try {
      const resp = await fetch(this.apiUrl, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: this.history, systemInstruction: { parts: [{ text: this.instruct }] }})
      });
      const data = await resp.json();
      const reply = data.candidates[0].content.parts[0].text;
      this.history.push({ role: "model", parts: [{ text: reply }] });
      return reply;
    } catch (e) { return `Error: ${e.message}`; }
  }
}
