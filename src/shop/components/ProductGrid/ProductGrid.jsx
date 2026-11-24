import ProductCard from '../ProductCard/ProductCard.jsx';
import Icon from '../Icon/Icon.jsx';
import './ProductGrid.css';

export default function ProductGrid({ products, favoriteIds, onToggleFavorite, onPreview, onReset, onlyFavorites }) {
  if (!products.length) {
    return <div className="empty-state flex flex-col items-center justify-center text-center"><Icon name={onlyFavorites ? 'heart' : 'search'} /><h2>{onlyFavorites ? 'Find your favorite pieces' : 'No pieces found'}</h2><p>{onlyFavorites ? 'Save a piece with the heart button, or clear your filters to see more favorites.' : 'Try a different search or clear your filters.'}</p><button type="button" className="button secondary" onClick={onReset}>{onlyFavorites ? 'Explore the collection' : 'Clear filters'}</button></div>;
  }

  return <div className="product-grid grid grid-cols-2 gap-3 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} isFavorite={favoriteIds.includes(product.id)} onToggleFavorite={onToggleFavorite} onPreview={onPreview} />)}</div>;
}
