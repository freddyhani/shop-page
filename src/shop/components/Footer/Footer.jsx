import Icon from '../Icon/Icon.jsx';
import './Footer.css';

export default function Footer({ onlyFavorites, onCollection, onFavorites, favoriteCount }) {
  return (
    <>
      <footer className="site-footer flex flex-wrap items-center justify-between gap-5"><span>ÉCLAT<small>Find your look. Love your style.</small></span><p>© 2026 ÉCLAT · Virtual styling experience</p><button type="button" className="text-button" onClick={onCollection}>Explore the collection</button></footer>
      <nav className="bottom-nav" aria-label="Bottom navigation"><button type="button" className={`bottom-item ${!onlyFavorites ? 'active' : ''}`} onClick={onCollection} aria-pressed={!onlyFavorites}><Icon name="shop" /><span>Shop Collection</span></button><span className="bottom-brand" aria-hidden="true">É</span><button type="button" className={`bottom-item ${onlyFavorites ? 'active' : ''}`} onClick={onFavorites} aria-pressed={onlyFavorites}><Icon name="heart" /><span>Favorites{favoriteCount ? ` (${favoriteCount})` : ''}</span></button></nav>
    </>
  );
}
