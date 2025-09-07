import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useCart } from "./CartC";

function Menu() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { itemsCount } = useCart();

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? (theme === "dark" ? "#ffd166" : "#d90429") : theme === "dark" ? "#fff" : "#000",
    fontWeight: isActive ? "700" : "500",
    textDecoration: "none",
    marginRight: "12px",
  });

  const linkStyle = {
    color: theme === "dark" ? "#fff" : "#000",
    marginRight: "12px",
    textDecoration: "none",
  };

  return (
    <nav style={{marginBottom: "20px", padding: "10px", borderRadius: 12, backgroundColor: theme === "dark" ? "#2a2a2a" : "#f3f3f3",
    display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8,}}>
        
      <NavLink to="/" end style={navLinkStyle}> Главная </NavLink>
      <NavLink to="/about" style={navLinkStyle}> О нас </NavLink>
      <NavLink to="/dashboard" style={navLinkStyle}> Dashboard </NavLink>
      <Link to="/login" style={linkStyle}> Вход </Link>
      <NavLink to="/cart" style={navLinkStyle}> Корзина: {itemsCount} </NavLink>

      <button onClick={toggleTheme} style={{ marginLeft: "auto" }}>
        Переключить тему ({theme})
      </button>
    </nav>
  );
}

export default Menu;
