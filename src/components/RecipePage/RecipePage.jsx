import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RecipePage.css';

const RecipePage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null); 

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setRecipe(data.meals[0]); 
    };
    fetchRecipeDetails();
  }, [id]);

  const goBack = () => {
    navigate('/search'); 
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <article className="recipe-page">
      <header>
        <h2>{recipe.strMeal}</h2>
        <img className="recipe-image" src={recipe.strMealThumb} alt={recipe.strMeal} />
      </header>

      <section className="ingredients-section">
        <h3>Ingredients</h3>
        <ul className="ingredients-list">
          {Object.keys(recipe).map((key) => {
            if (key.includes('strIngredient') && recipe[key]) {
              return (
                <li key={key}>
                  {recipe[key]} {recipe[`strMeasure${key.replace('strIngredient', '')}`] && ` - ${recipe[`strMeasure${key.replace('strIngredient', '')}`]}`}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </section>

      <section className="instructions-section">
        <h3>Instructions</h3>
        <ul className="instructions-list"> 
          {recipe.strInstructions.split('.').map((step, index) => (
            <li key={index}>{step.trim()}</li>
          ))}
        </ul>
      </section>

      <button className="go-back-button" 
      onClick={goBack}>Back to Search</button>
    </article>
  );
};

export default RecipePage;
