import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ProductsPage } from './pages/Products';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { ProductDetails } from './pages/ProductDetails';
import { Login } from './pages/Login';
import { CartDrawer } from './components/CartDrawer';
import { CategoryDrawer } from './components/CategoryDrawer';
import { AiAssistant } from './components/AiAssistant';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';

// Router State
type RouteName = 'HOME' | 'ABOUT' | 'SHOP' | 'BLOG' | 'CONTACT' | 'PRODUCT' | 'LOGIN';

type Route = 
  | { name: 'HOME' }
  | { name: 'ABOUT' }
  | { name: 'SHOP' }
  | { name: 'BLOG' }
  | { name: 'CONTACT' }
  | { name: 'PRODUCT', productId: string }
  | { name: 'LOGIN' };

const App: React.FC = () => {
  const [route, setRoute] = useState<Route>({ name: 'HOME' });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  
  // New Global States
  const [searchQuery, setSearchQuery] = useState('');
  const [targetSection, setTargetSection] = useState<string | null>(null);

  const navigateToProduct = (id: string) => {
    setRoute({ name: 'PRODUCT', productId: id });
    window.scrollTo(0, 0);
  };

  const navigateToPage = (page: string) => {
    setRoute({ name: page as RouteName } as Route);
    setTargetSection(null);
    window.scrollTo(0, 0);
  };

  const navigateToSection = (sectionId: string) => {
    setRoute({ name: 'HOME' });
    setTargetSection(sectionId);
    setIsCategoryOpen(false);
  };

  const navigateToLogin = () => {
    setRoute({ name: 'LOGIN' });
    window.scrollTo(0, 0);
  };

  return (
    <AuthProvider>
      <CartProvider>
        {route.name === 'LOGIN' ? (
          // Isolated Login Layout
          <Login onLoginSuccess={() => navigateToPage('HOME')} />
        ) : (
          // Main Application Layout
          <div className="min-h-screen flex flex-col relative bg-gray-50">
            <Navbar 
              onCartClick={() => setIsCartOpen(true)} 
              onNavigate={navigateToPage}
              currentPage={route.name}
              onAccountClick={navigateToLogin}
              onMenuClick={() => setIsCategoryOpen(true)}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            
            <main className="flex-grow pt-24 px-4 md:px-8 max-w-7xl mx-auto w-full animate-fade-in">
              {route.name === 'HOME' && (
                <Home 
                  onProductClick={navigateToProduct}
                  onNavigate={navigateToPage}
                  searchQuery={searchQuery}
                  targetSection={targetSection}
                  onClearTarget={() => setTargetSection(null)}
                />
              )}
              {route.name === 'ABOUT' && <About />}
              {route.name === 'SHOP' && (
                <ProductsPage 
                  onProductClick={navigateToProduct} 
                  searchQuery={searchQuery}
                />
              )}
              {route.name === 'BLOG' && <Blog />}
              {route.name === 'CONTACT' && <Contact />}
              {route.name === 'PRODUCT' && (
                <ProductDetails 
                  productId={route.productId} 
                  onBack={() => navigateToPage('SHOP')}
                />
              )}
            </main>

            <CartDrawer 
              isOpen={isCartOpen} 
              onClose={() => setIsCartOpen(false)} 
            />
            
            <CategoryDrawer
              isOpen={isCategoryOpen}
              onClose={() => setIsCategoryOpen(false)}
              onCategoryClick={navigateToSection}
            />
            
            <AiAssistant />
            
            <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8 text-sm">
                <div>
                  <h4 className="text-white font-bold mb-4">Choice For You</h4>
                  <p>Your premium destination for quality lifestyle products.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li className="hover:text-white cursor-pointer" onClick={() => navigateToPage('HOME')}>Home</li>
                    <li className="hover:text-white cursor-pointer" onClick={() => navigateToPage('ABOUT')}>About Us</li>
                    <li className="hover:text-white cursor-pointer" onClick={() => navigateToPage('SHOP')}>Shop</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4">Customer Care</h4>
                  <ul className="space-y-2">
                    <li className="hover:text-white cursor-pointer" onClick={() => navigateToPage('CONTACT')}>Contact Us</li>
                    <li className="hover:text-white cursor-pointer">Shipping Policy</li>
                    <li className="hover:text-white cursor-pointer">Returns & Exchanges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4">Connect</h4>
                  <p className="mb-2">Subscribe to our newsletter</p>
                  <div className="flex">
                    <input type="text" placeholder="Email" className="bg-slate-800 border-none rounded-l-lg px-3 py-2 w-full text-white text-xs outline-none" />
                    <button className="bg-indigo-600 px-3 py-2 rounded-r-lg text-white font-bold text-xs hover:bg-indigo-500">Go</button>
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto px-6 text-center border-t border-slate-800 pt-8">
                <p>&copy; {new Date().getFullYear()} Choice for u. All rights reserved.</p>
              </div>
            </footer>
          </div>
        )}
      </CartProvider>
    </AuthProvider>
  );
};

export default App;