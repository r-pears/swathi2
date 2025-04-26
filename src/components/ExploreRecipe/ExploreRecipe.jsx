import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExploreRecipe.css";

const ExploreRecipe = () => {
  const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryRecipes, setCategoryRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(URL);
        // check if response is ok
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        if (data.categories) {
          setRecipes(data.categories.slice(0, 16));
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const fetchCategoryRecipes = async (categoryName) => {
    const categoryUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
    try {
      const res = await fetch(categoryUrl);
      // check if response is ok
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      if (data.meals) {
        setCategoryRecipes(data.meals);
      } else {
        setCategoryRecipes([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchCategoryRecipes(category);
  };

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <section className="container">
      <header className="wrapper">
        {/* should be h2 */}
        <h2>Explore Recipes by Category</h2>
        <div className="recipes">
          {/* for readability break the recipes out */}
          {recipes?.map((recipe) => (
            <article
              key={recipe.strCategory}
              className="recipe"
              onClick={() => handleCategoryClick(recipe.strCategory)}
            >
              <img
                src={recipe.strCategoryThumb || "default-image-url.jpg"}
                alt={recipe.strCategory || "default category"}
              />
              <h3>{recipe.strCategory || "Unknown Category"}</h3>
            </article>
          ))}
        </div>
      </header>

      {selectedCategory && (
        <section className="category-recipes">
          <h3>Recipes for {selectedCategory}</h3>
          <div className="recipe-list">
            {/* for readability break categories out */}
            {categoryRecipes?.map((meal) => (
              <article
                key={meal.idMeal}
                className="recipe-card"
                onClick={() => handleRecipeClick(meal.idMeal)}
              >
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h4>{meal.strMeal}</h4>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default ExploreRecipe;
