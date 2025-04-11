import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleViewRecipesClick = () => {
    navigate('/search');
  };

  return (
    <header className='header'>
      <div className="header-contents">
        <h2>Your Recipes, <br /> Saved for Later</h2>
        <p>Save your favorite recipes in one place and access them anytime. Add dishes you love and come back to cook them whenever you’re ready. It’s that easy!</p>
        <button onClick={handleViewRecipesClick}>View Recipes</button>
      </div>
    </header>
  );
}

export default Header;
