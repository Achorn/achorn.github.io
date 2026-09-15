/**
 * Design tokens. Everything visual traces back to this file.
 *
 * Direction: JetBrains Mono as the entire identity, refined rather than
 * replaced — lowercase headings, a tight type scale, generous leading, and
 * hairline rules in place of drop-shadowed cards.
 *
 * Palette is "ink + oak": near-monochrome, with a single oak-green accent
 * taken from the acorn mark in the footer. The neutrals are warmed very
 * slightly toward that green so the accent reads as chosen, not bolted on.
 */

export const fonts = {
  mono: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
};

export const palettes = {
  light: {
    bg: "#fafaf8",
    surface: "#ffffff",
    text: "#1b1d1a",
    muted: "#6a6e66",
    rule: "#e4e5df",
    ruleSoft: "#eeefe9",
    accent: "#55672f",
    accentContrast: "#ffffff",
  },
  dark: {
    bg: "#121410",
    surface: "#181b15",
    text: "#e9ebe4",
    muted: "#969a8f",
    rule: "#2a2e26",
    ruleSoft: "#21251d",
    accent: "#a8bf76",
    accentContrast: "#121410",
  },
};

/**
 * Reading measure. Monospace runs wide per character, so this is tighter in
 * ch than a proportional face would want.
 */
export const MEASURE = "62ch";
