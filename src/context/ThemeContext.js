import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // const light = {
  //   primary: "#e46a4b",
  //   secondary: "#9a2305",
  //   backGround: "#482e28 ",
  // };
  // const dark = {
  //   primary: "#482e28 ",
  //   secondary: "#9a2305",
  //   backGround: "#e46a4b",
  // };
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
