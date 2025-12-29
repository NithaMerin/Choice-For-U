import { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';

export const useHome = (searchQuery: string = '') => {
  const normalizedQuery = searchQuery.toLowerCase().trim();

  const filterProducts = (category: string) => {
    return PRODUCTS.filter(p => 
      p.category === category && 
      (p.name.toLowerCase().includes(normalizedQuery) || 
       p.description.toLowerCase().includes(normalizedQuery))
    );
  };

  const electronicsProducts = useMemo(() => filterProducts('Electronics'), [normalizedQuery]);
  const footwearProducts = useMemo(() => filterProducts('Footwear'), [normalizedQuery]);
  const fashionProducts = useMemo(() => filterProducts('Fashion'), [normalizedQuery]);
  const homeProducts = useMemo(() => filterProducts('Home & Living'), [normalizedQuery]);
  const beautyProducts = useMemo(() => filterProducts('Beauty'), [normalizedQuery]);
  const sportsProducts = useMemo(() => filterProducts('Sports'), [normalizedQuery]);

  const allProducts = useMemo(() => PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(normalizedQuery) || 
    p.description.toLowerCase().includes(normalizedQuery)
  ), [normalizedQuery]);

  return {
    electronicsProducts,
    footwearProducts,
    fashionProducts,
    homeProducts,
    beautyProducts,
    sportsProducts,
    allProducts
  };
};