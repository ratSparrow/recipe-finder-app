import { RecipeCard } from "../components/RecipeCard";
import { useFavorites } from "../hooks/useFavourite";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Favorite Recipes ❤️</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorite recipes yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
