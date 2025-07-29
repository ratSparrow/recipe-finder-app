import { useEffect, useState } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const saveToStorage = (updated: any[]) => {
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const isFavorite = (id: string) => {
    return favorites.some((r) => r.idMeal === id);
  };

  const addFavorite = (recipe: any) => {
    const updated = [...favorites, recipe];
    setFavorites(updated);
    saveToStorage(updated);
  };

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((r) => r.idMeal !== id);
    setFavorites(updated);
    saveToStorage(updated);
  };

  return { favorites, isFavorite, addFavorite, removeFavorite };
};
