import axios from "axios";

export const getRecipe = async (search: string) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }
  const data = await res.json();
  return data.meals || [];
};
export const getRandomRecipe = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await res.json();
  return data.meals[0]; // only one meal returned
};

export const fetchRecipeById = async (id: string) => {
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  return res.data.meals?.[0];
};