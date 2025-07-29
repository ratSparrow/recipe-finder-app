import { useQuery } from "@tanstack/react-query";
import {
  getAreas,
  getCategories,
  getRecipesByArea,
  getRecipesByCategory,

} from "../api/filters";

import { FilterDropdown } from "../components/FilterDropdown";
import { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { SearchBar } from "../components/SearchBar";
import { getRandomRecipe, getRecipe } from "../api/getRecipe";
import { RandomRecipeModal } from "../components/RandomRecipeModal";

const Home = () => {
  const [randomRecipe, setRandomRecipe] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { data: areas = [] } = useQuery({
    queryKey: ["areas"],
    queryFn: getAreas,
  });

  const {
    data: recipes = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["recipes", searchTerm, category, area],
    queryFn: async () => {
      if (searchTerm) return getRecipe(searchTerm);
      if (category) return getRecipesByCategory(category);
      if (area) return getRecipesByArea(area);
      return getRecipe("chicken"); // default
    },
  });

  const handleRandomClick = async () => {
    const result = await getRandomRecipe();
    setRandomRecipe(result);
    setIsModalOpen(true);
  };


  return (
    <div className="p-6 max-w-6xl mx-auto">
      <RandomRecipeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        recipe={randomRecipe}
      />
      <h1 className="text-3xl font-bold mb-4">Recipe Finder 🍽️</h1>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterDropdown
          label="Filter by Category"
          options={categories}
          selected={category}
          onChange={(val) => {
            setCategory(val);
            setSearchTerm("");
            setArea("");
          }}
        />
        <FilterDropdown
          label="Filter by Area"
          options={areas}
          selected={area}
          onChange={(val) => {
            setArea(val);
            setSearchTerm("");
            setCategory("");
          }}
        />
      </div>

      <button
        onClick={() => refetch()}
        className="mb-6 bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
      >
        Search
      </button>
      <button
        onClick={handleRandomClick}
        className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700 ml-3"
      >
        Surprise Me
      </button>

      {isLoading && <p>Loading recipes...</p>}
      {isError && <p className="text-red-500">Error fetching recipes.</p>}
      {!isLoading && recipes?.length === 0 && (
        <p className="text-gray-500">No recipes found.</p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
