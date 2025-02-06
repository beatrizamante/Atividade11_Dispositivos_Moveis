import { createContext, useContext } from "react";
import { ThemeType } from "../types/theme";


interface ThemeColors {
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  backgroundColorFooter: string,
  backgroundInputColor: string,
  textColorPrimary: string;
  textColorSecondary: string;
  textColorFooter: string;
  buttonColor: string;
  themeButtomColor: string;
}

interface ThemeImages {
  loginImage: string;
  buttonImage: string;
  aboutImage: string;
}

interface ThemeContextProps {
  theme: ThemeType;
  colors: ThemeColors;
  images: ThemeImages;
  toggleTheme: () => void;
}

export const lightTheme: ThemeColors = {
  backgroundPrimary: "#30415D",
  backgroundSecondary: "#243046",
  backgroundTertiary: "#FFFFFF",
  backgroundColorFooter: "#F6F1ED",
  backgroundInputColor: "#F6F1ED",
  textColorPrimary: "#FFFFFF",
  textColorSecondary: "#2D2B2B",
  textColorFooter: "#243046",
  buttonColor: "#FFFFFF",
  themeButtomColor: "#243046"
};

export const darkTheme: ThemeColors = {
  backgroundPrimary: "#020822",
  backgroundSecondary: "#1A2538",
  backgroundTertiary: "#243046",
  backgroundColorFooter: "#0D7AC2",
  backgroundInputColor: "#485774",
  textColorPrimary: "#EFF5F8",
  textColorSecondary: "#EFF5F8",
  textColorFooter: "#EFF5F8",
  buttonColor: "#EFF5F8",
  themeButtomColor: "#EFF5F8"
};

export const lightThemeImages: ThemeImages = {
  loginImage: '../assets/images/light/login_light.png',
  buttonImage: '../assets/images/light/image_button.png',
  aboutImage: '../assets/images/light/about_light.png'
};

export const darkThemeImages: ThemeImages = {
  loginImage: '../assets/images/dark/login_dark.png',
  buttonImage: '../assets/images/dark/button_dark.png',
  aboutImage: '../assets/images/dark/about_dark.png'
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
export { ThemeType };

