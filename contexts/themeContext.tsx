import { createContext, useContext } from "react";
import { ThemeType } from "../interfaces/theme";


interface ThemeColors {
  backgroundColor: string;
  textColor: string;
  primaryButton: string;
}

interface ThemeContextProps {
  theme: ThemeType;
  colors: ThemeColors;
  toggleTheme: () => void;
}

export const lightTheme: ThemeColors = {
  backgroundColor: "#ffffff",
  textColor: "#000000",
  primaryButton: "#6200ea",
};

export const darkTheme: ThemeColors = {
  backgroundColor: "#121212",
  textColor: "#ffffff",
  primaryButton: "#bb86fc",
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
};
