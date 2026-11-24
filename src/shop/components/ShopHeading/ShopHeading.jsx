import { sortOptions } from '../../data/shopOptions.js';
import Icon from '../Icon/Icon.jsx';
import './ShopHeading.css';

export default function ShopHeading({ sort, onSort, onlyFavorites }) {
  return (
    <div className="page-heading flex flex-wrap items-center justify-between gap-4">
      <div><h1>{onlyFavorites ? 'My Favorites' : 'Shop Collection'}</h1><p>{onlyFavorites ? 'All the pieces you love, saved in one place.' : 'Discover stylish accessories and makeup, and try them on virtually.'}</p></div>
      <label className="sort-control inline-flex items-center">
        <span>Sort by:</span>
        <select value={sort} onChange={(event) => onSort(event.target.value)} aria-label="Sort products">{sortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select>
        <Icon name="down" />
      </label>
    </div>
  );
}
