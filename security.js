// Generiert ein hoch-entropisches, sicheres Zufallspasswort
export function generatePassword(len = 16) {
  const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
  return Array.from({length: len}, () => c[Math.floor(Math.random() * c.length)]).join('');
}

// Erstellt eine Krypto-ähnliche, eindeutige ID mit anpassbarem Präfix
export function generateFoxId(prefix = 'df') {
  const randomPart = Math.random().toString(16).substring(2, 10);
  return `${prefix}_${randomPart}_${Date.now().toString().slice(-4)}`;
}

// Wandelt HTML-Tags um, um bösartige XSS-Skript-Injektionen unschädlich zu machen
export function escapeHtml(str) {
  const p = {'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;'};
  return str.replace(/[&<>"']/g, m => p[m]);
}
