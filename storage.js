export const foxStorage = {
  // Speichert Daten mit einem Ablaufdatum in Millisekunden (TTL)
  set: (key, val, ttl = null) => {
    localStorage.setItem(key, JSON.stringify({ data: val, exp: ttl ? Date.now() + ttl : null }));
  },
  // Holt Daten und löscht sie automatisch, falls die Zeit abgelaufen ist
  get: (key) => {
    const item = JSON.parse(localStorage.getItem(key));
    if (!item) return null;
    if (item.exp && Date.now() > item.exp) { 
      localStorage.removeItem(key); 
      return null; 
    }
    return item.data;
  },
  // Löscht einen spezifischen Key
  remove: (key) => localStorage.removeItem(key),
  // Leert den gesamten LocalStorage
  clear: () => localStorage.clear()
};
