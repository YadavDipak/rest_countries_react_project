/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    mainBackground: "bg-veryLightGray",
    textColor: "text-veryDarkBlueText",
    subBackground: "bg-dark_blue_dm",
  });

  const [darkMode, setMode] = useState(true);

  const toggleMode = () => {
    if (darkMode) {
      setMode(false);
      setTheme({
        textColor: "text-white",
        mainBackground: "bg-veryDarkBlueBg",
        subBackground: "bg-darkBlue",
      });
    } else {
      setMode(true);
      setTheme({
        mainBackground: "bg-veryLightGray",
        textColor: "text-veryDarkBlueText",
        subBackground: "bg-dark_blue_dm",
      });
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
