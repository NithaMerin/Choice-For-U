import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Search, Menu, User as UserIcon, LogOut, ChevronDown } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Logo } from './Logo';

interface NavbarProps {
  onCartClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
  onAccountClick: () => void;
  onMenuClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onCartClick, 
  onNavigate,
  currentPage,
  onAccountClick, 
  onMenuClick,
  searchQuery,
  onSearchChange
}) => {
  const { itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAccountClick = () => {
    if (isAuthenticated) {
      setShowDropdown(!showDropdown);
    } else {
      onAccountClick();
    }
  };

  const handleLogout = () => {
    setShowDropdown(false);
    logout();
    onAccountClick();
  };

  const navLinks = [
    { name: 'Home', value: 'HOME' },
    { name: 'About', value: 'ABOUT' },
    { name: 'Shop', value: 'SHOP' },
    { name: 'Blog', value: 'BLOG' },
    { name: 'Contact', value: 'CONTACT' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-40 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Section: Logo & Nav Links */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Hamburger for Mobile Only */}
            <button 
              onClick={onMenuClick}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors btn-interaction md:hidden"
            >
              <Menu size={24} />
            </button>
            
            <div onClick={() => onNavigate('HOME')} className="cursor-pointer hover-lift flex-shrink-0 flex items-center">
              <Logo />
            </div>

            {/* Navigation Tabs - Visible on Tablet (md) and Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => onNavigate(link.value)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                    currentPage === link.value 
                      ? 'bg-indigo-50 text-indigo-600 shadow-sm' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section: Search, User, Cart */}
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
            
            {/* Search Bar - Right aligned, near User Icon */}
            <div className="hidden md:block relative w-48 lg:w-64 group">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-100 border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all outline-none text-sm font-medium group-hover:bg-slate-50"
              />
              <Search className="absolute left-3 top-3 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
            </div>

            <div className="flex items-center gap-2">
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={handleAccountClick}
                  className="hidden md:flex items-center gap-2 px-2 py-1.5 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-full transition-all btn-interaction border border-transparent hover:border-slate-100"
                >
                  {isAuthenticated && user?.avatar ? (
                    <img src={user.avatar} alt="User" className="w-8 h-8 rounded-full border border-gray-200 shadow-sm" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-transparent hover:border-indigo-200 text-slate-600">
                      <UserIcon size={18} />
                    </div>
                  )}
                  <span className="font-bold text-sm pr-1 lg:block hidden">{isAuthenticated ? user?.name.split(' ')[0] : 'Sign In'}</span>
                  {isAuthenticated && <ChevronDown size={14} className={`transition-transform duration-300 hidden lg:block ${showDropdown ? 'rotate-180' : ''}`} />}
                </button>

                {/* Mobile User Icon */}
                <button 
                  onClick={handleAccountClick}
                  className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-full"
                >
                   <UserIcon size={24} />
                </button>

                {showDropdown && isAuthenticated && (
                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-scale-in origin-top-right z-50">
                    <div className="p-5 border-b border-gray-50 bg-gradient-to-br from-slate-50 to-white">
                      <div className="flex items-center gap-3">
                        <img src={user?.avatar} alt="Profile" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{user?.name}</p>
                          <p className="text-xs text-slate-500 truncate max-w-[140px]">{user?.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 space-y-1">
                      <button className="w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors flex items-center gap-3">
                        <UserIcon size={16} /> My Profile
                      </button>
                      <div className="h-px bg-gray-100 my-1 mx-2"></div>
                      <button 
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-3"
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={onCartClick}
                className="relative p-2.5 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-full transition-all group btn-interaction"
              >
                <ShoppingBag size={24} />
                {itemCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-bounce shadow-sm border border-white">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};