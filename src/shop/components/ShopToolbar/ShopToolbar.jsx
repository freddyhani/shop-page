import Icon from '../Icon/Icon.jsx';
import './ShopToolbar.css';

export default function ShopToolbar({ search, onSearch, resultCount, filtersOpen, onToggleFilters }) {
  return (
    <div className="shop-toolbar flex flex-wrap items-center justify-between gap-3">
      <label className="collection-search flex items-center gap-2"><Icon name="search" /><input id="shopSearch" type="search" value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search this collection" aria-label="Search this collection" /></label>
      <span className="result-count" role="status" aria-live="polite">{resultCount} {resultCount === 1 ? 'piece' : 'pieces'}</span>
      <button type="button" className="button secondary filter-toggle" aria-controls="shopFilters" aria-expanded={filtersOpen} onClick={onToggleFilters}><Icon name="filter" />Filters</button>
    </div>
  );
}
