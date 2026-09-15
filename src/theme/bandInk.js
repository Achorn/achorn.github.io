/**
 * Text colours for a project band.
 *
 * Bands are sampled from the artwork, so they range from a pale sky to a deep
 * indigo. Two things follow. Neutral black and white would read as unrelated
 * to the band, so the ink is the band's own hue driven to one end of the
 * scale. And a fixed luminance cutoff for choosing light or dark ink is
 * fragile — a band landing just the wrong side of it flips to light text on a
 * mid tone — so the ink is whichever of the two actually reads better.
 */

const parse = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const toHex = (rgb) => `#${rgb.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));

const luminance = (rgb) => {
  const [r, g, b] = rgb
    .map((v) => v / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const SHADOW = [0x12, 0x12, 0x14];
const LIGHT = [0xff, 0xfd, 0xf8];

/**
 * Keeps mixing `from` toward `towards` until the result clears `floor`
 * against the band. Used in both directions: to darken an ink until it reads,
 * and to lift a muted tone off the band only as far as it has to go.
 */
const until = (band, from, towards, floor) => {
  for (let i = 0; i <= 100; i += 2) {
    const candidate = mix(from, towards, i / 100);
    if (contrast(candidate, band) >= floor) return candidate;
  }
  return towards;
};

const bandInk = (tint) => {
  const band = parse(tint);
  const dark = contrast(LIGHT, band) > contrast(SHADOW, band);
  const end = dark ? LIGHT : SHADOW;

  // The ink keeps a trace of the band rather than going fully neutral, then
  // is pushed the rest of the way only if the heading needs the contrast.
  const tinted = mix(band, end, 0.88);
  const ink = until(band, tinted, end, 7);

  return {
    onDark: dark,
    ink: toHex(ink),
    muted: toHex(until(band, band, ink, 4.6)),
    // The oak accent is unreadable on a deep band, so links borrow the ink.
    accent: toHex(until(band, band, ink, 5.2)),
  };
};

export default bandInk;
