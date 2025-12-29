import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Truck, ShieldCheck, Clock, Award, Quote } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useHome } from '../hooks/useHome';
import { Product } from '../types';

interface HomeProps {
  onProductClick: (id: string) => void;
  onNavigate: (page: string) => void;
  searchQuery: string;
  targetSection: string | null;
  onClearTarget: () => void;
}

// -- Ad Carousel Component --
interface AdCarouselProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

const AdCarousel: React.FC<AdCarouselProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://picsum.photos/1200/400?grayscale&random=101',
      title: 'Summer Collection',
      subtitle: 'Step into the season with style.',
      cta: 'Explore Now',
      targetPage: 'SHOP',
      targetSection: 'section-fashion',
      color: 'from-orange-500/80 to-red-500/80'
    },
    {
      id: 2,
      image: 'https://picsum.photos/1200/400?grayscale&random=102',
      title: 'Next Gen Tech',
      subtitle: 'Upgrade your digital life today.',
      cta: 'Shop Electronics',
      targetPage: 'SHOP',
      targetSection: 'section-electronics',
      color: 'from-blue-600/80 to-indigo-600/80'
    },
    {
      id: 3,
      image: 'https://picsum.photos/1200/400?grayscale&random=103',
      title: 'Premium Comfort',
      subtitle: 'Footwear designed for your journey.',
      cta: 'View Footwear',
      targetPage: 'SHOP',
      targetSection: 'section-footwear',
      color: 'from-emerald-600/80 to-teal-600/80'
    }
  ];

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl h-[400px] group animate-fade-in bg-slate-900">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
        >
           <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} mix-blend-multiply z-10`}></div>
           <img 
             src={slide.image} 
             alt={slide.title} 
             className="absolute inset-0 w-full h-full object-cover"
           />
           <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-20 text-white max-w-4xl">
             <div className="overflow-hidden">
               <h2 className={`text-5xl font-bold mb-4 transform transition-transform duration-700 delay-100 ${index === currentSlide ? 'translate-y-0' : 'translate-y-full'}`}>
                 {slide.title}
               </h2>
             </div>
             <div className="overflow-hidden mb-8">
               <p className={`text-xl opacity-90 transform transition-transform duration-700 delay-200 ${index === currentSlide ? 'translate-y-0' : 'translate-y-full'}`}>
                 {slide.subtitle}
               </p>
             </div>
             <button 
               onClick={() => onNavigate(slide.targetPage, slide.targetSection)}
               className={`w-fit bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-all flex items-center gap-2 transform duration-700 delay-300 btn-interaction group/btn ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
             >
               {slide.cta} 
               <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
             </button>
           </div>
        </div>
      ))}
      
      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 btn-interaction -translate-x-4 group-hover:translate-x-0 duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 btn-interaction translate-x-4 group-hover:translate-x-0 duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
};

// -- Service Features Component --
const ServiceFeatures = () => {
  const features = [
    { icon: <Truck size={32} />, title: 'Free Shipping', desc: 'On all orders over $99' },
    { icon: <Clock size={32} />, title: 'Fast Delivery', desc: '2-3 business days' },
    { icon: <ShieldCheck size={32} />, title: 'Secure Payment', desc: '100% protected' },
    { icon: <Award size={32} />, title: 'Best Quality', desc: 'Original products' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow group">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>
          <h3 className="font-bold text-slate-800 mb-1">{feature.title}</h3>
          <p className="text-sm text-slate-500">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

// -- New Arrivals Ad Component --
const NewArrivalsAd = ({ onShopClick }: { onShopClick: () => void }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-slate-900 mb-16 animate-slide-up">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/80 z-10"></div>
      <img 
        src="https://picsum.photos/1200/400?grayscale&blur=2&random=99" 
        alt="New Arrivals" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between p-12 gap-8">
        <div className="text-white text-center md:text-left max-w-xl">
          <span className="inline-block px-3 py-1 bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full mb-4">Just Landed</span>
          <h2 className="text-4xl font-bold mb-4">New Arrivals Collection</h2>
          <p className="text-lg text-indigo-100 mb-0">Discover the latest trends in fashion and technology. Upgrade your lifestyle with our premium selection.</p>
        </div>
        <button 
          onClick={onShopClick}
          className="bg-white text-indigo-900 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all shadow-lg hover:scale-105 active:scale-95 flex-shrink-0"
        >
          Shop New Arrivals
        </button>
      </div>
    </div>
  );
};

// -- Testimonials Carousel Component --
const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const reviews = [
    { name: "Sarah J.", role: "Fashion Blogger", text: "Choice For You has completely transformed my wardrobe. The quality is unmatched!", avatar: "https://ui-avatars.com/api/?name=Sarah+J&background=e0e7ff&color=4338ca" },
    { name: "Michael T.", role: "Tech Enthusiast", text: "Fastest delivery I've ever experienced. The gadget selection is top-notch.", avatar: "https://ui-avatars.com/api/?name=Michael+T&background=f0fdf4&color=15803d" },
    { name: "Emily R.", role: "Interior Designer", text: "Beautiful home decor items that actually match the photos. Highly recommend!", avatar: "https://ui-avatars.com/api/?name=Emily+R&background=fef3c7&color=b45309" },
    { name: "David K.", role: "Fitness Coach", text: "The sports equipment is durable and affordable. My go-to shop for gear.", avatar: "https://ui-avatars.com/api/?name=David+K&background=fee2e2&color=b91c1c" }
  ];

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="mb-16 animate-slide-up">
      <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-4 mb-8">Customer Stories</h2>
      
      <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-[300px]">
        {reviews.map((review, index) => (
          <div 
            key={index}
            className={`absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out transform ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
             <div className="bg-indigo-50 p-4 rounded-full mb-6 text-indigo-600">
               <Quote size={32} />
             </div>
             <p className="text-xl md:text-2xl text-slate-700 italic mb-8 max-w-2xl leading-relaxed">"{review.text}"</p>
             <div className="flex items-center gap-4">
               <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
               <div className="text-left">
                 <h4 className="font-bold text-slate-900">{review.name}</h4>
                 <p className="text-sm text-indigo-600 font-medium">{review.role}</p>
               </div>
             </div>
          </div>
        ))}
        
        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-indigo-600 w-8' : 'bg-gray-200 w-2 hover:bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// -- Horizontal Scroll Section Component --
interface ProductSectionProps {
  id: string;
  title: string;
  products: Product[];
  onProductClick: (id: string) => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({ id, title, products, onProductClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 * 2; // Scroll roughly 2 items width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // If filtered products result in empty list, don't show section
  if (products.length === 0) return null;

  return (
    <div id={id} className="mb-16 animate-slide-up scroll-mt-28">
      <div className="flex items-center justify-between mb-6 px-2">
        <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-4">{title}</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2.5 rounded-full border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 text-slate-600 transition-all btn-interaction"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2.5 rounded-full border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 text-slate-600 transition-all btn-interaction"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative group">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar p-2 -m-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map((product, idx) => (
            <div 
              key={product.id} 
              className="flex-none w-[85%] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] snap-start"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <ProductCard 
                product={product} 
                onClick={onProductClick} 
              />
            </div>
          ))}
        </div>
        
        {/* Gradient overlay hints for scrolling */}
        <div className="absolute top-0 bottom-8 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none md:hidden opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
};

export const Home: React.FC<HomeProps> = ({ onProductClick, onNavigate, searchQuery, targetSection, onClearTarget }) => {
  const { 
    electronicsProducts, 
    footwearProducts, 
    fashionProducts, 
    homeProducts, 
    beautyProducts, 
    sportsProducts,
    allProducts
  } = useHome(searchQuery);

  // Handle auto-scrolling to sections
  useEffect(() => {
    if (targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        // Small delay to ensure render layout is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          onClearTarget();
        }, 100);
      }
    }
  }, [targetSection, onClearTarget]);

  const handleInternalNav = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopNav = () => {
    onNavigate('SHOP');
  };

  const handleBannerNav = (page: string, sectionId?: string) => {
    onNavigate(page);
  };

  return (
    <div className="pb-12">
      <AdCarousel onNavigate={handleBannerNav} />

      <ServiceFeatures />
      
      {/* CategoryStrip Removed */}

      <NewArrivalsAd onShopClick={handleShopNav} />

      {/* Show message if search yields no results */}
      {searchQuery && allProducts.length === 0 && (
         <div className="text-center py-12">
            <h3 className="text-xl font-bold text-slate-700">No products found</h3>
            <p className="text-slate-500">Try checking your spelling or using a different keyword.</p>
         </div>
      )}

      <ProductSection 
        id="section-electronics"
        title="Electronics & Gadgets" 
        products={electronicsProducts} 
        onProductClick={onProductClick} 
      />

      <ProductSection 
        id="section-fashion"
        title="Trending Fashion" 
        products={fashionProducts} 
        onProductClick={onProductClick} 
      />

      <ProductSection 
        id="section-footwear"
        title="Footwear Collection" 
        products={footwearProducts} 
        onProductClick={onProductClick} 
      />

      <ProductSection 
        id="section-home"
        title="Home & Living" 
        products={homeProducts} 
        onProductClick={onProductClick} 
      />

      <ProductSection 
        id="section-beauty"
        title="Beauty & Care" 
        products={beautyProducts} 
        onProductClick={onProductClick} 
      />

      <ProductSection 
        id="section-sports"
        title="Sports & Outdoors" 
        products={sportsProducts} 
        onProductClick={onProductClick} 
      />

      <TestimonialsCarousel />
    </div>
  );
};