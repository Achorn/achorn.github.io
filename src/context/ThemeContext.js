import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        if (colorScheme === "light") {
          setLightMode();
        } else setDarkMode();
      });
  }, []);

  const [dark, setDark] = useState(false);

  function toggleTheme(on) {
    if (on) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }

  function setDarkMode() {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setDark(true);
  }

  function setLightMode() {
    document.querySelector("body").setAttribute("data-theme", "light");
    setDark(false);
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
