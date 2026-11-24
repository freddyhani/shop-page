import Artwork from '../Artwork/Artwork.jsx';
import Icon from '../Icon/Icon.jsx';
import './ProductCard.css';

export default function ProductCard({ product, isFavorite, onToggleFavorite, onPreview }) {
  return (
    <article className="product-card min-w-0 overflow-hidden">
      <div className="product-photo relative overflow-hidden">
        <button type="button" className="product-image-button flex h-full w-full items-center justify-center" onClick={() => onPreview(product)} aria-label={`View ${product.name}`}><Artwork name={product.art} label={product.name} /></button>
        <button type="button" className={`favorite-button ${isFavorite ? 'active' : ''}`} onClick={() => onToggleFavorite(product.id)} aria-pressed={isFavorite} aria-label={`${isFavorite ? 'Remove from' : 'Add to'} favorites: ${product.name}`}><Icon name="heart" /></button>
      </div>
      <div className="product-info">
        <h2><button type="button" className="product-name text-left" onClick={() => onPreview(product)} title={product.name}>{product.name}</button></h2>
        <p className="product-rating"><span aria-hidden="true">★</span> <span className="sr-only">Rated </span>{product.rating.toFixed(1)} <small>({product.reviews}<span className="sr-only"> reviews</span>)</small></p>
        <div className="product-bottom flex flex-wrap gap-2"><strong>${product.price}</strong><button type="button" className="button primary w-full" onClick={() => onPreview(product)}><Icon name="camera" /><span>Virtual Try-On</span></button></div>
      </div>
    </article>
  );
}
