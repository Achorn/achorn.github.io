import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        console.log(colorScheme); // "dark" or "light"
        // setMode(colorScheme);
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
    setDark(on);
  }

  function setDarkMode() {
    document.querySelector("body").setAttribute("data-theme", "dark");
  }

  function setLightMode() {
    document.querySelector("body").setAttribute("data-theme", "light");
  }

  return (
    <ThemeContext.Provider value={{ theme: dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
