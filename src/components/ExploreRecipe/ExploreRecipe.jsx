import React, { useEffect, useState } from 'react';
import './ExploreRecipe.css'; 

const ExploreRecipe = () => {
    const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const [recipes, setRecipes] = useState([]); 

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch(URL);
                const data = await res.json();
                console.log(data);
                if (data.categories) {
                    setRecipes(data.categories.slice(0, 8));  
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchRecipes();
    }, []);  

    return (
        <div className="container"> 
            <div className="wrapper">
                <div className="titles">
                    <h3>Explore Recipes by Category</h3>
                    <div className="recipes">
                        {recipes?.map((recipe) => (
                            <div key={recipe.strCategory || recipe.idCategory} className="recipe">
                                <img 
                                    src={recipe.strCategoryThumb || 'default-image-url.jpg'} 
                                    alt={recipe.strCategory || 'default category'} 
                                />
                                <h3>{recipe.strCategory || 'Unknown Category'}</h3> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreRecipe;
