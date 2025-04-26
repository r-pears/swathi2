import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
    setMenu("home");
  };

  const handleNavigateRecipes = () => {
    navigate("/search");
    setMenu("recipes");
  };

  return (
    // should be wrapped in a nav tag
    <nav className="navbar">
      <img
        src={assets.logo}
        alt="Logo"
        className="logo"
        onClick={handleNavigateHome}
      />
      <ul className="navbar-menu">
        <li
          onClick={handleNavigateHome}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={handleNavigateRecipes}
          className={menu === "recipes" ? "active" : ""}
        >
          Recipes
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>

      <div className="navbar-right">
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
