import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Filters from './components/Filters/Filters.jsx';
import ShopHeading from './components/ShopHeading/ShopHeading.jsx';
import CategoryTabs from './components/CategoryTabs/CategoryTabs.jsx';
import ShopToolbar from './components/ShopToolbar/ShopToolbar.jsx';
import ProductGrid from './components/ProductGrid/ProductGrid.jsx';
import ProductPreview from './components/ProductPreview/ProductPreview.jsx';
import Footer from './components/Footer/Footer.jsx';
import useFavorites from './hooks/useFavorites.js';
import useShopFilters from './hooks/useShopFilters.js';
import { products } from './data/products.js';
import { filterProducts } from './utils/filterProducts.js';
import './Shop.css';

export default function Shop() {
  const { filters, updateFilter, toggleFilter, selectCategory, resetFilters } = useShopFilters();
  const { favoriteIds, toggleFavorite } = useFavorites();
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [previewProduct, setPreviewProduct] = useState(null);
  const visibleProducts = filterProducts(products, filters, favoriteIds, onlyFavorites);

  function showCollection() {
    resetFilters();
    setOnlyFavorites(false);
  }

  function showFavorites() {
    resetFilters();
    setOnlyFavorites(true);
  }

  return (
    <>
      <a className="skip-link" href="#mainContent">Skip to content</a>
      <Header search={filters.search} onSearch={(value) => updateFilter('search', value)} onlyFavorites={onlyFavorites} favoriteCount={favoriteIds.length} onCollection={showCollection} onFavorites={showFavorites} />
      <main id="mainContent" className="shop-layout" tabIndex={-1}>
        <Filters filters={filters} updateFilter={updateFilter} toggleFilter={toggleFilter} onReset={resetFilters} isOpen={filtersOpen} onClose={() => setFiltersOpen(false)} />
        <section className="shop-main min-w-0" aria-label={onlyFavorites ? 'Favorite products' : 'Shop collection'}>
          <ShopHeading sort={filters.sort} onSort={(value) => updateFilter('sort', value)} onlyFavorites={onlyFavorites} />
          <CategoryTabs selectedCategories={filters.categories} onSelect={selectCategory} />
          <ShopToolbar search={filters.search} onSearch={(value) => updateFilter('search', value)} resultCount={visibleProducts.length} filtersOpen={filtersOpen} onToggleFilters={() => setFiltersOpen(!filtersOpen)} />
          <ProductGrid products={visibleProducts} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} onPreview={setPreviewProduct} onReset={showCollection} onlyFavorites={onlyFavorites} />
        </section>
      </main>
      <Footer onlyFavorites={onlyFavorites} onCollection={showCollection} onFavorites={showFavorites} favoriteCount={favoriteIds.length} />
      {previewProduct ? <ProductPreview key={previewProduct.id} product={previewProduct} isFavorite={favoriteIds.includes(previewProduct.id)} onToggleFavorite={toggleFavorite} onClose={() => setPreviewProduct(null)} /> : null}
    </>
  );
}
