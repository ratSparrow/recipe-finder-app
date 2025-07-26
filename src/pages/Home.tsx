import { useState, useEffect } from "react";
import { SearchBar } from "../components/SearchBar";
import { RecipeCard } from "../components/RecipeCard";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await res.json();
      setRecipes(data.meals || []);
      setLoading(false);
    };
    fetchRecipes();
  }, [searchTerm]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? (
        <p>Loading...</p>
      ) : recipes.length === 0 ? (
        <p className="text-red-500">No recipes found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((r) => <RecipeCard key={r.idMeal} recipe={r} />)}
        </div>
      )}
    </div>
  );
};

export default Home;
