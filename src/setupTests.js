// Adds custom jest matchers such as toBeInTheDocument().
// See https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// jsdom implements neither of these, and both run on first paint.
window.scrollTo = () => {};
window.matchMedia =
  window.matchMedia ||
  ((query) => ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  }));
