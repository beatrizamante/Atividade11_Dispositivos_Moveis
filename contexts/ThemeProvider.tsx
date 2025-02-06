import { useState } from "react";
import {
  ThemeContext,
  lightTheme,
  darkTheme,
  lightThemeImages,
  darkThemeImages,
  ThemeType,
} from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeColors = theme === "light" ? lightTheme : darkTheme;
  const themeImages = theme === "light" ? lightThemeImages : darkThemeImages;

  return (
    <ThemeContext.Provider
      value={{ theme, colors: themeColors, images: themeImages, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
