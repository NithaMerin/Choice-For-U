import React, { useMemo } from 'react';
import { ArrowLeft, Star, ShoppingBag, ShieldCheck, Truck, Tag, TrendingDown, MessageSquare, User } from 'lucide-react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { PRODUCTS, PRICE_HISTORY } from '../constants';
import { useCart } from '../contexts/CartContext';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailsProps {
  productId: string;
  onBack: () => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ productId, onBack }) => {
  const product = PRODUCTS.find(p => p.id === productId);
  const { addToCart } = useCart();

  // Recommendations Logic
  const relatedProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.category === product?.category && p.id !== productId).slice(0, 4);
  }, [product, productId]);

  const recommendedProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.id !== productId && p.category !== product?.category)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  }, [product, productId]);

  if (!product) return <div className="py-20 text-center font-bold text-slate-500">Product not found</div>;

  const handleFavorite = () => {
    alert(`Added ${product.name} to your favorites!`);
  };

  const tags = ["Premium", "Trending", "New Arrival", "Best Seller"];

  const mockReviews = [
    { id: 1, user: "James Wilson", rating: 5, comment: "Absolutely worth the price. The quality exceeds expectations!", date: "2 days ago" },
    { id: 2, user: "Elena Rodriguez", rating: 4, comment: "Solid build quality. Fast shipping too. Would buy again.", date: "1 week ago" },
    { id: 3, user: "Marcus Chen", rating: 5, comment: "The design is so sleek. Fits perfectly with my setup.", date: "2 weeks ago" }
  ];

  return (
    <div className="animate-fade-in pb-20">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-8 transition-colors font-bold group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Catalog
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image Section */}
        <div className="space-y-6">
          <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          {/* Price Analysis Card */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Market Analysis</h3>
                <p className="text-lg font-bold text-slate-800">Price Stability Trend</p>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">
                <TrendingDown size={14} />
                Best Price Now
              </div>
            </div>
            
            <div className="h-[180px] w-full mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PRICE_HISTORY}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#4f46e5" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorPrice)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="font-bold text-indigo-600">Pro Tip:</span> This product is currently at its lowest price point in 3 months. Historical data suggests a stable value with consistent performance reviews.
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
              {product.category}
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
              Limited 20% OFF
            </span>
            <div className="flex items-center gap-1 text-amber-400 ml-auto">
              <Star fill="currentColor" size={16} />
              <span className="text-slate-900 font-black text-sm">{product.rating}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">{product.name}</h1>
          
          <div className="flex items-baseline gap-4 mb-8">
            <p className="text-4xl font-black text-indigo-600">${product.price.toFixed(2)}</p>
            <p className="text-xl text-slate-300 line-through font-bold">${(product.price * 1.2).toFixed(2)}</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl mb-8">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
              <ShieldCheck size={14} /> Brief Highlights
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {product.description} Engineered for performance and style, this {product.category.toLowerCase()} essential 
              brings a blend of reliability and modern aesthetics to your daily lifestyle. 
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.3)]"></div>
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-gray-100">
            {tags.map((tag, i) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold">
                <Tag size={12} /> {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-auto">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 bg-slate-900 hover:bg-indigo-600 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-slate-200"
            >
              <ShoppingBag size={22} />
              ADD TO CART
            </button>
            <button 
              onClick={handleFavorite}
              className="px-6 py-5 border-2 border-slate-100 rounded-2xl hover:border-amber-400 hover:bg-amber-50 transition-all group"
            >
              <Star size={22} className="text-slate-300 group-hover:text-amber-500 transition-colors" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
              <Truck className="text-indigo-600" size={24} />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Shipping</p>
                <p className="text-xs font-bold text-slate-700">Free Worldwide</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
              <ShieldCheck className="text-emerald-500" size={24} />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Warranty</p>
                <p className="text-xs font-bold text-slate-700">2 Year Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Products Sections */}
      <div className="space-y-20 mt-20">
        {/* You May Also Like */}
        <section className="animate-slide-up">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-900 border-l-8 border-amber-400 pl-4">YOU MAY ALSO LIKE</h2>
            <button onClick={onBack} className="text-indigo-600 font-bold text-sm hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recommendedProducts.map(p => (
              <ProductCard key={p.id} product={p} onClick={onBack} />
            ))}
          </div>
        </section>

        {/* Related Products */}
        <section className="animate-slide-up">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-900 border-l-8 border-indigo-600 pl-4">RELATED PRODUCTS</h2>
            <button onClick={onBack} className="text-indigo-600 font-bold text-sm hover:underline">More in {product.category}</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} onClick={onBack} />
            ))}
          </div>
        </section>

        {/* User Reviews */}
        <section className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm animate-slide-up">
          <div className="flex items-center gap-3 mb-10">
            <MessageSquare className="text-indigo-600" size={32} />
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Customer Reviews</h2>
            <span className="ml-auto bg-slate-100 px-4 py-1 rounded-full text-xs font-bold text-slate-500">{product.reviews} Total</span>
          </div>
          
          <div className="space-y-8">
            {mockReviews.map((review) => (
              <div key={review.id} className="group border-b border-gray-50 pb-8 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                      <User size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{review.user}</h4>
                      <div className="flex gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-400">{review.date}</span>
                </div>
                <p className="text-slate-600 leading-relaxed italic">"{review.comment}"</p>
                <div className="mt-4 flex items-center gap-4">
                   <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Helpful (12)</button>
                   <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Report</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-slate-900 font-black hover:bg-slate-100 transition-all uppercase tracking-widest text-xs">
              Write A Review
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};