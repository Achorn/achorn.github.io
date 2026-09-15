import { createTheme } from "@mui/material";
import { fonts, palettes } from "./tokens";

/**
 * Builds the MUI theme for a colour mode from the tokens.
 *
 * Three rules keep the look coherent:
 *   - One typeface. Hierarchy comes from size, weight and leading, never
 *     from a second family.
 *   - Headings, nav and buttons are lowercase. Prose keeps its real casing,
 *     so "Three.js" and "iMac" stay readable.
 *   - Corners are square and elevation is a hairline border, never a shadow.
 *
 * Monospace needs more air than a proportional face to stay readable at
 * paragraph length, which is why line heights here run high.
 */
const createAppTheme = (mode = "light") => {
  const c = palettes[mode] ?? palettes.light;

  return createTheme({
    palette: {
      mode,
      primary: { main: c.accent, contrastText: c.accentContrast },
      background: { default: c.bg, paper: c.surface },
      text: { primary: c.text, secondary: c.muted },
      divider: c.rule,
    },

    shape: { borderRadius: 0 },

    typography: {
      fontFamily: fonts.mono,
      /*
       * The scale is fluid: each size interpolates between its phone value and
       * its large-desktop value, so the site reads correctly on a laptop and on
       * a 27" display without a breakpoint jump in between. Monospace runs
       * visually smaller than a proportional face at the same px, so these sit
       * a step above what a sans would use.
       */
      h1: { fontSize: "clamp(1.875rem, 1.35rem + 1.7vw, 2.625rem)", fontWeight: 500, lineHeight: 1.18, letterSpacing: "-0.028em", textTransform: "lowercase" },
      h2: { fontSize: "clamp(1.5rem, 1.2rem + 1vw, 2rem)", fontWeight: 500, lineHeight: 1.24, letterSpacing: "-0.025em", textTransform: "lowercase" },
      h3: { fontSize: "clamp(1.1875rem, 1.03rem + 0.5vw, 1.4375rem)", fontWeight: 500, lineHeight: 1.32, letterSpacing: "-0.02em", textTransform: "lowercase" },
      h4: { fontSize: "clamp(1.0625rem, 0.99rem + 0.24vw, 1.1875rem)", fontWeight: 500, lineHeight: 1.38, letterSpacing: "-0.016em", textTransform: "lowercase" },
      h5: { fontSize: "clamp(1rem, 0.96rem + 0.16vw, 1.0625rem)", fontWeight: 500, lineHeight: 1.44, letterSpacing: "-0.012em", textTransform: "lowercase" },
      h6: { fontSize: "0.9375rem", fontWeight: 500, lineHeight: 1.5, letterSpacing: "-0.01em", textTransform: "lowercase" },
      // Generous leading is what makes monospace prose readable at length.
      body1: { fontSize: "clamp(0.9375rem, 0.9rem + 0.16vw, 1.0625rem)", lineHeight: 1.72, letterSpacing: "0.003em" },
      body2: { fontSize: "clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)", lineHeight: 1.68, letterSpacing: "0.003em" },
      overline: {
        fontSize: "clamp(0.6875rem, 0.67rem + 0.08vw, 0.75rem)",
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      },
      button: { fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)", fontWeight: 500, letterSpacing: "0.01em", textTransform: "lowercase" },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "*": { scrollMarginTop: "96px" },
          body: { backgroundColor: c.bg },
          "::selection": { background: c.accent, color: c.accentContrast },
          img: { maxWidth: "100%" },
        },
      },

      MuiButton: {
        defaultProps: { disableElevation: true, disableRipple: true },
        styleOverrides: {
          root: { padding: "9px 16px", borderRadius: 0 },
          outlined: {
            borderColor: c.accent,
            color: c.accent,
            "&:hover": {
              borderColor: c.accent,
              backgroundColor: c.accent,
              color: c.accentContrast,
            },
          },
          text: {
            padding: "7px 10px",
            "&:hover": { backgroundColor: "transparent", color: c.text },
          },
        },
      },

      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            border: `1px solid ${c.rule}`,
            backgroundColor: c.ruleSoft,
            backgroundImage: "none",
            borderRadius: 0,
          },
        },
      },

      MuiAppBar: {
        defaultProps: { elevation: 0, color: "transparent" },
        styleOverrides: {
          root: {
            backgroundColor: c.bg,
            backgroundImage: "none",
            borderBottom: `1px solid ${c.rule}`,
          },
        },
      },

      MuiDivider: { styleOverrides: { root: { borderColor: c.rule } } },

      MuiIconButton: {
        defaultProps: { disableRipple: true },
        styleOverrides: { root: { borderRadius: 0 } },
      },

      MuiLink: {
        defaultProps: { underline: "none" },
        styleOverrides: {
          root: {
            color: c.accent,
            "&:hover": { textDecoration: "underline", textUnderlineOffset: 3 },
          },
        },
      },

      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: fonts.mono,
            fontSize: "0.625rem",
            letterSpacing: "0.08em",
            textTransform: "lowercase",
            borderRadius: 0,
            backgroundColor: c.text,
            color: c.bg,
          },
        },
      },
    },
  });
};

export default createAppTheme;
