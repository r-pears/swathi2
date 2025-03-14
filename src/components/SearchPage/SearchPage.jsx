import React, { useState } from 'react';
import Header from '../../components/Header/Header'; 
import './SearchPage.css'; 
import { useNavigate } from 'react-router-dom'; 

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate(); 

 
  const fetchMeals = async () => {
    if (!searchQuery) return; 
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      const data = await response.json();
      setRecipes(data.meals || []); 
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

 
  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`); 
  };

  return (
    <div>
     
      <Header />

      <div className="search-page">
        <h2>Find recipes by name, cuisine, ingredients, or category.</h2>
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search"
        />
       
        <button onClick={fetchMeals}>Search</button>

       
        <div>
          <h3>Results:</h3>
          {recipes.length === 0 ? (
            <p>No recipes found. Try another search.</p>
          ) : (
            <div className="recipe-list">
              {recipes.map((recipe) => (
                <div
                  key={recipe.idMeal}
                  className="recipe-card"
                  onClick={() => handleRecipeClick(recipe.idMeal)} 
                >
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                  <h4>{recipe.strMeal}</h4>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
