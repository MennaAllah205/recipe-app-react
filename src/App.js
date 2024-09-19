import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./Components/RecipeDetails";
import SearchResults from "./Components/SearchResults";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <NavBar />;
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
};

export default App;
