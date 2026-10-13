import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createAppTheme from "./createAppTheme";

const STORAGE_KEY = "color-mode";

const ColorModeContext = createContext({ mode: "light", toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

/** Stored choice wins; otherwise follow the OS. */
const getInitialMode = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch (error) {
    // Private browsing or blocked storage — fall through to the OS preference.
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch (error) {
      // Nothing to do — the choice just will not survive a reload.
    }
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [mode]
  );

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeContext;
