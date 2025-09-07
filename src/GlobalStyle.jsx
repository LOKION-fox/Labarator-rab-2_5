import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function GlobalStyles({ children }) {
  const { theme } = useContext(ThemeContext);

  const appStyles = {
    backgroundColor: theme === "dark" ? "#1e1e1e" : "#ffffff",
    color: theme === "dark" ? "#f5f5f5" : "#111111",
    width: "100%",
    minHeight: "100vh",
    padding: "20px",
    margin: 0,
    transition: "background-color .2s ease, color .2s ease",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  };

  return <div style={appStyles}>{children}</div>;
}

export default GlobalStyles;
