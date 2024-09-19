import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Css/RecipeDetails.css"; // Make sure the path is correct

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=d82f87fa2b49482e9eb63100085f53c1`
      )
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return recipe ? (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <div className="image-container">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default RecipeDetails;
