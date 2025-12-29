import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  onClick: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      onClick={() => onClick(product.id)}
      className="group bg-white rounded-2xl p-4 cursor-pointer transition-all duration-500 border border-transparent hover:border-indigo-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden hover:-translate-y-2 h-full flex flex-col"
    >
      <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        {/* Glassmorphism Button */}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-indigo-600 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-indigo-600 hover:text-white btn-interaction z-10 border border-white/50"
          aria-label="Add to cart"
        >
          <Plus size={20} />
        </button>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-1.5">
          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">{product.category}</span>
          <div className="flex items-center gap-1">
             <span className="text-amber-400 text-sm">★</span>
             <span className="text-xs font-bold text-slate-600">{product.rating}</span>
          </div>
        </div>
        <h3 className="font-bold text-slate-800 mb-1 line-clamp-1 group-hover:text-indigo-600 transition-colors">{product.name}</h3>
        <div className="mt-auto pt-2 flex items-center justify-between">
          <p className="text-lg font-extrabold text-slate-900">${product.price.toFixed(2)}</p>
          <span className="text-xs text-slate-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">View Details</span>
        </div>
      </div>
    </div>
  );
};