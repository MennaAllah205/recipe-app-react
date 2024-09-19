import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Css/Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?number=20&apiKey=d82f87fa2b49482e9eb63100085f53c1"
      )
      .then((response) => {
        setRecipes(response.data.recipes);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="home">
      <h1>Featured Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <h2>{recipe.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
