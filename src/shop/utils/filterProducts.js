export const defaultFilters = {
  categories: [],
  brands: [],
  maxPrice: 200,
  color: '',
  minRating: 0,
  search: '',
  sort: 'popular',
};

export function filterProducts(products, filters, favoriteIds = [], onlyFavorites = false) {
  const query = filters.search.trim().toLocaleLowerCase();
  const results = products.filter((product) =>
    (!filters.categories.length || filters.categories.includes(product.category)) &&
    (!filters.brands.length || filters.brands.includes(product.brand)) &&
    (!filters.color || product.color === filters.color) &&
    product.price <= filters.maxPrice &&
    product.rating >= filters.minRating &&
    (!onlyFavorites || favoriteIds.includes(product.id)) &&
    `${product.name} ${product.category} ${product.color} ${product.brand}`.toLocaleLowerCase().includes(query),
  );

  const comparators = {
    low: (a, b) => a.price - b.price,
    high: (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating,
    new: (a, b) => b.id - a.id,
  };
  if (comparators[filters.sort]) results.sort(comparators[filters.sort]);
  return results;
}
