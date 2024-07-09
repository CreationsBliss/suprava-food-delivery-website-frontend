import { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [menuBorder, setMenuBorder] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link
          onClick={() => setMenuBorder("home")}
          className={menuBorder === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenuBorder("menu")}
          className={menuBorder === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenuBorder("contact")}
          className={menuBorder === "contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="basket icon" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
