import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Css/SearchResults.css";

const SearchResults = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=d82f87fa2b49482e9eb63100085f53c1`
      )
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="search-results">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="recipe-list">
        {results.map((recipe) => (
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

export default SearchResults;
