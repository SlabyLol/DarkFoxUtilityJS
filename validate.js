/**
 * DarkFoxUtilityJS - Data Validation Gatekeeper (v1.5.0)
 */

// Prüft E-Mail Syntax
export function isEmail(str) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(str);
}

// Prüft URL Syntax (HTTP/HTTPS)
export function isUrl(str) {
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (_) {
    return false;
  }
}

/**
 * Stärke-Check für Passwörter
 * Kriterien: Min 8 Zeichen, 1 Großbuchstabe, 1 Kleinbuchstabe, 1 Zahl, 1 Sonderzeichen
 */
export function checkPasswordStrength(str) {
  if (str.length < 8) return { secure: false, score: 1, msg: "Too short" };
  
  let score = 0;
  if (/[a-z]/.test(str)) score++;
  if (/[A-Z]/.test(str)) score++;
  if (/[0-9]/.test(str)) score++;
  if (/[^A-Za-z0-9]/.test(str)) score++;

  return {
    secure: score >= 4 && str.length >= 10,
    score: score, // Wert von 1 bis 4
    msg: score === 4 ? "Strong" : score === 3 ? "Medium" : "Weak"
  };
}
