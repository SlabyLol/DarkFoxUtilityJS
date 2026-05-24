// Verhindert das Aufrufen einer Funktion, bis seit dem letzten Aufruf X Millisekunden vergangen sind
export function debounce(func, delay = 300) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Garantiert, dass eine Funktion maximal einmal alle X Millisekunden ausgeführt wird
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

// Pausiert die Code-Ausführung asynchron (Syntax: await sleep(1000);)
export const sleep = (ms) => new Promise(res => setTimeout(res, ms));
