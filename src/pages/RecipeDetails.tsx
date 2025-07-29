import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipeById } from "../api/getRecipe";



const RecipeDetails = () => {
  const { id } = useParams();
  const { data: recipe, isLoading } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => fetchRecipeById(id!),
    enabled: !!id,
  });

  if (isLoading || !recipe) return <div className="text-center mt-10">Loading...</div>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded-lg mb-4" />
      
      <div className="mb-4">
        <p><strong>Category:</strong> {recipe.strCategory}</p>
        <p><strong>Area:</strong> {recipe.strArea}</p>
        {recipe.strTags && (
          <p><strong>Tags:</strong> {recipe.strTags.split(",").join(", ")}</p>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700 whitespace-pre-line">{recipe.strInstructions}</p>
      </div>

      {recipe.strYoutube && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Video Tutorial</h2>
          <iframe
            className="w-full aspect-video rounded"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split("=")[1]}`}
            title="Recipe Video"
            allowFullScreen
          />
        </div>
      )}

      {recipe.strSource && (
        <a
          href={recipe.strSource}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          target="_blank"
          rel="noreferrer"
        >
          View Original Source
        </a>
      )}
    </div>
  );
};

export default RecipeDetails;
