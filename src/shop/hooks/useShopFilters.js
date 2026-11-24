import { useState } from 'react';
import { categories } from '../data/products.js';
import { defaultFilters } from '../utils/filterProducts.js';

function initialFilters() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  return {
    ...defaultFilters,
    categories: categories.includes(category) && category !== 'All' ? [category] : [],
    search: params.get('search') || '',
  };
}

export default function useShopFilters() {
  const [filters, setFilters] = useState(initialFilters);

  function updateFilter(name, value) {
    setFilters((current) => ({ ...current, [name]: value }));
  }

  function toggleFilter(name, value) {
    setFilters((current) => ({
      ...current,
      [name]: current[name].includes(value)
        ? current[name].filter((item) => item !== value)
        : [...current[name], value],
    }));
  }

  return {
    filters,
    updateFilter,
    toggleFilter,
    selectCategory: (category) => updateFilter('categories', category === 'All' ? [] : [category]),
    resetFilters: () => setFilters({ ...defaultFilters }),
  };
}
