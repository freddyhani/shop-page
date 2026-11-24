import { categories } from '../../data/products.js';
import { categoryIcons } from '../../data/shopOptions.js';
import Icon from '../Icon/Icon.jsx';
import './CategoryTabs.css';

export default function CategoryTabs({ selectedCategories, onSelect }) {
  const active = selectedCategories.length === 1 ? selectedCategories[0] : selectedCategories.length === 0 ? 'All' : '';
  return (
    <div className="category-tabs flex" role="group" aria-label="Product categories">
      {categories.map((category) => <button type="button" key={category} className={`pill ${active === category ? 'active' : ''}`} aria-pressed={active === category} onClick={() => onSelect(category)}>{category !== 'All' ? <Icon name={categoryIcons[category]} /> : null}{category}</button>)}
    </div>
  );
}
