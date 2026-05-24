/**
 * DarkFoxUtilityJS - DOM Query & Mutation Shortcuts (v1.5.0)
 */

// Query Shortcuts
export const $ = (selector, context = document) => context.querySelector(selector);
export const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

/**
 * Tiny Element Creator with Attributes & Children
 */
export function el(tag, attributes = {}, ...children) {
  const element = document.createElement(tag);
  for (const [key, val] of Object.entries(attributes)) {
    if (key === 'style' && typeof val === 'object') {
      Object.assign(element.style, val);
    } else {
      element.setAttribute(key, val);
    }
  }
  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement) {
      element.appendChild(child);
    }
  });
  return element;
}

/**
 * Event Delegation Utility
 */
export function on(element, event, selector, handler) {
  const target = typeof element === 'string' ? $(element) : element;
  if (!target) return;
  
  if (!handler) {
    // Normaler Event Listener
    target.addEventListener(event, selector);
  } else {
    // Event Delegation (für dynamische Elemente)
    target.addEventListener(event, (e) => {
      const match = e.target.closest(selector);
      if (match && target.contains(match)) {
        handler.call(match, e, match);
      }
    });
  }
}
