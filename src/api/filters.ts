export const getCategories = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
  const data = await res.json();
  return data.meals.map((m: any) => m.strCategory);
};

export const getAreas = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
  const data = await res.json();
  return data.meals.map((m: any) => m.strArea);
};

export const getRecipesByCategory = async (category: string) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await res.json();
  return data.meals || [];
};

export const getRecipesByArea = async (area: string) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  const data = await res.json();
  return data.meals || [];
};
