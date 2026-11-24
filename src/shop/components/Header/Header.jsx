import { useState } from 'react';
import Icon from '../Icon/Icon.jsx';
import Artwork from '../Artwork/Artwork.jsx';
import Logo from '../Logo/Logo.jsx';
import './Header.css';

export default function Header({ search, onSearch, onlyFavorites, favoriteCount, onCollection, onFavorites }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  function navigate(action) {
    action();
    setMenuOpen(false);
  }

  const navigation = (
    <>
      <button type="button" className="nav-link" onClick={() => navigate(onCollection)}><Icon name="home" />Home</button>
      <button type="button" className={`nav-link ${!onlyFavorites ? 'active' : ''}`} onClick={() => navigate(onCollection)} aria-pressed={!onlyFavorites}><Icon name="shop" />Shop</button>
      <span className="nav-link unavailable" aria-disabled="true" title="Available in the full ÉCLAT project"><Icon name="camera" />Try On</span>
      <span className="nav-link unavailable" aria-disabled="true" title="Available in the full ÉCLAT project"><Icon name="looks" />My Looks</span>
      <button type="button" className={`nav-link ${onlyFavorites ? 'active' : ''}`} onClick={() => navigate(onFavorites)} aria-pressed={onlyFavorites}><Icon name="heart" />Favorites{favoriteCount ? <span className="favorite-count">{favoriteCount}</span> : null}</button>
    </>
  );

  return (
    <header className="site-header sticky top-0 z-40">
      <div className="header-inner flex h-full items-center justify-between">
        <button type="button" className="icon-button mobile-menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-controls="mobileMenu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        <Logo onClick={onCollection} />
        <nav className="desktop-nav" aria-label="Main navigation">{navigation}</nav>
        <div className="header-actions flex items-center">
          <form className="header-search" role="search" onSubmit={(event) => { event.preventDefault(); document.getElementById('shopSearch')?.focus(); }}>
            <input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search products..." aria-label="Search products" />
            <button type="submit" className="icon-button" aria-label="Search"><Icon name="search" /></button>
          </form>
          <button type="button" className="icon-button mobile-search" aria-label="Search products" onClick={() => document.getElementById('shopSearch')?.focus()}><Icon name="search" /></button>
          <button type="button" className="icon-button notification-button" aria-label="Notifications" aria-controls="notificationPanel" aria-expanded={notificationsOpen} onClick={() => setNotificationsOpen(!notificationsOpen)}><Icon name="bell" /></button>
          <span className="avatar"><Artwork name="avatar" label="ÉCLAT profile portrait" /></span>
        </div>
      </div>
      {menuOpen ? <nav id="mobileMenu" className="mobile-menu" aria-label="Mobile navigation">{navigation}</nav> : null}
      {notificationsOpen ? (
        <div id="notificationPanel" className="notification-panel">
          <div className="flex items-center justify-between gap-3"><strong>You're all caught up</strong><button type="button" className="icon-button" aria-label="Close notifications" onClick={() => setNotificationsOpen(false)}><Icon name="close" /></button></div>
          <p>Your next favorite look is waiting in the collection.</p>
        </div>
      ) : null}
    </header>
  );
}
