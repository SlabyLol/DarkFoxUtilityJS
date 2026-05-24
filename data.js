// Mischt ein Array komplett zufällig durch (Fisher-Yates Algorithmus)
export function shuffleArray(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// Entfernt alle doppelten Werte aus einem Array
export function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Kürzt einen Text elegant und fügt "..." an, falls er zu lang ist
export function truncateText(text, maxLength = 30) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// Kopiert verschachtelte Objekte absolut sauber, ohne Referenzen zu spiegeln
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
