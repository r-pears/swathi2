import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleViewRecipesClick = () => {
    navigate("/search");
  };

  return (
    <header className="header">
      {/* should be section */}
      <section className="header-contents">
        {/* should be h1 */}
        <h1>
          Your Recipes, <br /> Saved for Later
        </h1>
        <p>
          Save your favorite recipes in one place and access them anytime. Add
          dishes you love and come back to cook them whenever you’re ready. It’s
          that easy!
        </p>
        <button onClick={handleViewRecipesClick}>View Recipes</button>
      </section>
    </header>
  );
};

export default Header;
