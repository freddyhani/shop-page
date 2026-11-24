import { categories, products } from '../../data/products.js';
import { brands, categoryIcons, colors, ratings } from '../../data/shopOptions.js';
import Icon from '../Icon/Icon.jsx';
import './Filters.css';

export default function Filters({ filters, updateFilter, toggleFilter, onReset, isOpen, onClose }) {
  return (
    <aside id="shopFilters" className={`filters-panel ${isOpen ? 'open' : ''}`} aria-label="Collection filters">
      <div className="filters-title flex items-center justify-between">
        <h2>Filters</h2>
        <div className="flex items-center gap-3"><button type="button" className="text-button" onClick={onReset}>Clear All</button><button type="button" className="icon-button close-filters" aria-label="Close filters" onClick={onClose}><Icon name="close" /></button></div>
      </div>
      <fieldset>
        <legend>Category <Icon name="down" /></legend>
        {categories.slice(1).map((category) => (
          <label key={category} className="check-label">
            <input type="checkbox" checked={filters.categories.includes(category)} onChange={() => toggleFilter('categories', category)} />
            <Icon name={categoryIcons[category]} /><span>{category} <small>({products.filter((product) => product.category === category).length})</small></span>
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>Price Range <Icon name="down" /></legend>
        <input type="range" min="0" max="200" step="5" value={filters.maxPrice} onChange={(event) => updateFilter('maxPrice', Number(event.target.value))} aria-label="Maximum price" aria-valuetext={`$${filters.maxPrice}`} />
        <div className="range-endpoints flex justify-between"><span>$0</span><output>${filters.maxPrice}</output></div>
      </fieldset>
      <fieldset>
        <legend>Brand <Icon name="down" /></legend>
        {brands.map((brand) => (
          <label key={brand} className="check-label"><input type="checkbox" checked={filters.brands.includes(brand)} onChange={() => toggleFilter('brands', brand)} /><span>{brand} <small>({products.filter((product) => product.brand === brand).length})</small></span></label>
        ))}
      </fieldset>
      <fieldset>
        <legend>Color <Icon name="down" /></legend>
        <div className="color-options flex items-center">
          {colors.map((color) => <button type="button" key={color.name} className={`color-dot ${filters.color === color.name ? 'active' : ''}`} style={{ '--swatch': color.value }} aria-label={color.name} aria-pressed={filters.color === color.name} onClick={() => updateFilter('color', filters.color === color.name ? '' : color.name)} />)}
        </div>
      </fieldset>
      <fieldset>
        <legend>Rating <Icon name="down" /></legend>
        {ratings.map((rating) => (
          <label key={rating} className="check-label rating-label"><input type="radio" name="rating" value={rating} checked={filters.minRating === rating} onChange={() => updateFilter('minRating', rating)} /><span><span className="stars" aria-hidden="true">★★★★★</span> {rating} &amp; Up</span></label>
        ))}
      </fieldset>
      <div className="filter-promo flex flex-col items-start"><Icon name="sparkles" /><strong>Your perfect fit,<br />one try-on away.</strong><span>Find your look. Love your style.</span></div>
      <button type="button" className="button primary apply-filters" onClick={onClose}>Show collection</button>
    </aside>
  );
}
