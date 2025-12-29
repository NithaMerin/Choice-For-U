import React from 'react';
import { X, ChevronRight, Zap, Shirt, Home, Smile, Activity, Smartphone } from 'lucide-react';

interface CategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCategoryClick: (sectionId: string) => void;
}

export const CategoryDrawer: React.FC<CategoryDrawerProps> = ({ isOpen, onClose, onCategoryClick }) => {
  const categories = [
    { name: 'Electronics', id: 'section-electronics', icon: <Smartphone size={20} />, count: 124 },
    { name: 'Fashion', id: 'section-fashion', icon: <Shirt size={20} />, count: 350 },
    { name: 'Home & Living', id: 'section-home', icon: <Home size={20} />, count: 210 },
    { name: 'Beauty', id: 'section-beauty', icon: <Smile size={20} />, count: 85 },
    { name: 'Sports', id: 'section-sports', icon: <Activity size={20} />, count: 140 },
    { name: 'Footwear', id: 'section-footwear', icon: <Zap size={20} />, count: 95 },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-slate-50">
            <h2 className="text-xl font-bold text-slate-900">Categories</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <div className="space-y-1 px-3">
              {categories.map((cat, idx) => (
                <button 
                  key={idx}
                  onClick={() => onCategoryClick(cat.id)}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all group text-slate-600"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                      {cat.icon}
                    </div>
                    <span className="font-medium">{cat.name}</span>
                  </div>
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-100 bg-slate-50">
             <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-4 text-white shadow-lg">
                <p className="font-bold text-lg mb-1">New Collection</p>
                <p className="text-indigo-100 text-sm mb-3">Get 20% off selected items</p>
                <button 
                  onClick={() => onCategoryClick('section-fashion')}
                  className="w-full py-2 bg-white text-indigo-600 rounded-lg text-sm font-bold hover:bg-indigo-50 transition-colors"
                >
                  View Offers
                </button>
             </div>
          </div>

        </div>
      </div>
    </>
  );
};