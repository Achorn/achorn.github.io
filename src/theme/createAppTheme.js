import { createTheme } from "@mui/material";

/**
 * Builds the MUI theme for a given color mode.
 *
 * This is deliberately thin for now — it keeps the existing JetBrains Mono
 * look and only adds the palette values the dark mode needs. The wider visual
 * cleanup happens on top of this function, so pages never hardcode a color.
 */
const createAppTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: { default: "#ffffff", paper: "#ffffff" },
            text: { primary: "#222222", secondary: "#5b6472" },
          }
        : {
            background: { default: "#292c32", paper: "#31353c" },
            text: { primary: "#c5cfd8", secondary: "#93a1b0" },
          }),
    },
    typography: {
      fontFamily: `"JetBrains Mono", monospace`,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          // Anchors offset for the fixed app bar.
          "*": { scrollMarginTop: "100px" },
        },
      },
    },
  });

export default createAppTheme;
