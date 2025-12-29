import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useHome } from '../hooks/useHome';
import { Product } from '../types';

interface ProductsPageProps {
  onProductClick: (id: string) => void;
  searchQuery: string;
}

// -- Reusing Horizontal Scroll Logic for "All" View --
const HorizontalProductSection: React.FC<{ title: string; products: Product[]; onProductClick: (id: string) => void }> = ({ title, products, onProductClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 * 2;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (products.length === 0) return null;

  return (
    <div className="mb-12 animate-slide-up">
      <div className="flex items-center justify-between mb-6 px-2">
        <h2 className="text-xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-4">{title}</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 transition-all btn-interaction"
          >
            <ArrowLeft size={18} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 transition-all btn-interaction"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="relative group">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar p-2 -m-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex-none w-[80%] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] snap-start"
            >
              <ProductCard product={product} onClick={onProductClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProductsPage: React.FC<ProductsPageProps> = ({ onProductClick, searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const { 
    electronicsProducts, 
    footwearProducts, 
    fashionProducts, 
    homeProducts, 
    beautyProducts, 
    sportsProducts 
  } = useHome(searchQuery);

  const categories = ['All', 'Electronics', 'Fashion', 'Footwear', 'Home & Living', 'Beauty', 'Sports'];

  const getFilteredProducts = () => {
    switch (activeCategory) {
      case 'Electronics': return electronicsProducts;
      case 'Fashion': return fashionProducts;
      case 'Footwear': return footwearProducts;
      case 'Home & Living': return homeProducts;
      case 'Beauty': return beautyProducts;
      case 'Sports': return sportsProducts;
      default: return [];
    }
  };

  return (
    <div className="animate-fade-in pb-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Shop Collections</h1>
        <p className="text-slate-500">Find exactly what you're looking for</p>
      </div>

      {/* Filter Bar */}
      <div className="flex gap-3 overflow-x-auto pb-6 mb-8 justify-start md:justify-center px-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              activeCategory === cat 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'bg-white text-slate-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Conditional Rendering: All View (Scroll Rows) vs Category View (Grid) */}
      {activeCategory === 'All' ? (
        <div className="space-y-4">
           <HorizontalProductSection title="Electronics & Gadgets" products={electronicsProducts} onProductClick={onProductClick} />
           <HorizontalProductSection title="Trending Fashion" products={fashionProducts} onProductClick={onProductClick} />
           <HorizontalProductSection title="Footwear Collection" products={footwearProducts} onProductClick={onProductClick} />
           <HorizontalProductSection title="Home & Living" products={homeProducts} onProductClick={onProductClick} />
           <HorizontalProductSection title="Beauty & Care" products={beautyProducts} onProductClick={onProductClick} />
           <HorizontalProductSection title="Sports & Outdoors" products={sportsProducts} onProductClick={onProductClick} />
           
           {(electronicsProducts.length === 0 && fashionProducts.length === 0 && footwearProducts.length === 0) && (
              <div className="text-center py-12 text-slate-400">No products found matching your search.</div>
           )}
        </div>
      ) : (
        <div className="animate-slide-up">
          <div className="flex items-center justify-between mb-6 px-2 border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">{activeCategory}</h2>
            <span className="text-slate-500 text-sm">{getFilteredProducts().length} items</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {getFilteredProducts().length > 0 ? (
              getFilteredProducts().map(product => (
                <ProductCard key={product.id} product={product} onClick={onProductClick} />
              ))
            ) : (
               <div className="col-span-full text-center py-20 text-slate-400">
                 No products found in this category.
               </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};