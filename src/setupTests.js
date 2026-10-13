// Adds custom jest matchers such as toBeInTheDocument().
// See https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// jsdom implements none of these, and all of them run on first paint.
window.scrollTo = () => {};
window.matchMedia =
  window.matchMedia ||
  ((query) => ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  }));

class StubIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = window.IntersectionObserver || StubIntersectionObserver;
global.IntersectionObserver = global.IntersectionObserver || StubIntersectionObserver;
