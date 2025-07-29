import { Heart, HeartOff } from "lucide-react";
import { useFavorites } from "../hooks/useFavourite";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipe }: any) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const fav = isFavorite(recipe.idMeal);
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all relative">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{recipe.strMeal}</h2>

        <Link className="text-green-600 font-medium hover:underline" to={`/recipe/${recipe.idMeal}`}>View Recipe</Link>
      </div>

      {/* Favorite Toggle */}
      <button
        onClick={() => (fav ? removeFavorite(recipe.idMeal) : addFavorite(recipe))}
        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow"
      >
        {fav ? <HeartOff className="text-red-500" /> : <Heart className="text-gray-400" />}
      </button>


    </div>
  )
}
