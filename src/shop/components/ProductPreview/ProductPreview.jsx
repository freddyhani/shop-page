import { useEffect, useRef } from 'react';
import Artwork from '../Artwork/Artwork.jsx';
import Icon from '../Icon/Icon.jsx';
import './ProductPreview.css';

export default function ProductPreview({ product, isFavorite, onToggleFavorite, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    return () => { if (dialog.open) dialog.close(); };
  }, []);

  return (
    <dialog ref={dialogRef} className="product-preview" aria-labelledby="previewTitle" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="preview-content relative">
        <button type="button" className="icon-button preview-close" onClick={onClose} aria-label="Close product preview" autoFocus><Icon name="close" /></button>
        <div className="preview-art flex items-center justify-center"><Artwork name={product.art} label={product.name} /></div>
        <div className="preview-details"><span className="preview-category">{product.category} · {product.brand}</span><h2 id="previewTitle">{product.name}</h2><p className="preview-rating"><span className="stars">★</span> {product.rating.toFixed(1)} · {product.reviews} reviews</p><strong className="preview-price">${product.price}</strong><dl className="preview-specs grid grid-cols-2 gap-4"><div><dt>Color</dt><dd>{product.color}</dd></div><div><dt>Style</dt><dd>{product.style}</dd></div></dl><button type="button" className="button primary w-full" onClick={() => onToggleFavorite(product.id)} aria-pressed={isFavorite}><Icon name="heart" />{isFavorite ? 'Saved to Favorites' : 'Save to Favorites'}</button><p className="preview-note">Product preview · Live virtual try-on is available in the full ÉCLAT project.</p></div>
      </div>
    </dialog>
  );
}
