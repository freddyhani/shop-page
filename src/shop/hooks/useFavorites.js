import { useEffect, useState } from 'react';
import { products } from '../data/products.js';

const storageKey = 'eclat_shop_favorites_v1';

function readFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    return Array.isArray(stored)
      ? [...new Set(stored.filter((id) => products.some((product) => product.id === id)))]
      : [];
  } catch {
    return [];
  }
}

export default function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState(readFavorites);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(favoriteIds));
    } catch {
      // Favorites still work for the current session if browser storage is unavailable.
    }
  }, [favoriteIds]);

  function toggleFavorite(id) {
    setFavoriteIds((current) => current.includes(id)
      ? current.filter((savedId) => savedId !== id)
      : [...current, id]);
  }

  return { favoriteIds, toggleFavorite };
}
