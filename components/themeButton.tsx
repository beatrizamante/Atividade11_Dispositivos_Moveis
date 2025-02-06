import { useTheme } from "../contexts/themeContext";

const ThemeToggle: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        margin: "10px",
        backgroundColor: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
        border: "none",
        cursor: "pointer",
      }}
    >
      Mudar para {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
