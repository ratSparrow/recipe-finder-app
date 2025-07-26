export const RecipeCard = ({ recipe }: any) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all">
    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{recipe.strMeal}</h2>
      <a
        href={recipe.strSource || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 font-medium hover:underline"
      >
        View Recipe
      </a>
    </div>
  </div>
);
