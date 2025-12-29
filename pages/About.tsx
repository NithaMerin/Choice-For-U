import React from 'react';
import { Target, Users, Globe, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pb-12 animate-fade-in">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 mb-12 h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90 z-10"></div>
        <img src="https://picsum.photos/1200/400?grayscale&blur=2" alt="Office" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Choice For You</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">Redefining the online shopping experience with quality, speed, and integrity.</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div>
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
             <p className="text-slate-600 leading-relaxed mb-6">
               At "Choice For You", we believe that everyone deserves access to premium products without the premium hassle. Our mission is to curate a selection of goods that enhance your lifestyle, delivered with speed and care.
             </p>
             <p className="text-slate-600 leading-relaxed">
               We bridge the gap between innovation and affordability, ensuring that the latest trends in technology, fashion, and home living are just a click away.
             </p>
           </div>
           <div className="grid grid-cols-2 gap-4">
             <div className="bg-indigo-50 p-6 rounded-2xl text-center">
               <Target className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
               <h3 className="font-bold text-slate-800">Precision</h3>
             </div>
             <div className="bg-purple-50 p-6 rounded-2xl text-center">
               <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
               <h3 className="font-bold text-slate-800">Community</h3>
             </div>
             <div className="bg-amber-50 p-6 rounded-2xl text-center">
               <Globe className="w-8 h-8 text-amber-600 mx-auto mb-3" />
               <h3 className="font-bold text-slate-800">Global</h3>
             </div>
             <div className="bg-emerald-50 p-6 rounded-2xl text-center">
               <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
               <h3 className="font-bold text-slate-800">Trust</h3>
             </div>
           </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Curated Selection</h3>
            <p className="text-slate-600 text-sm">Every item in our catalog is hand-picked by our experts to ensure it meets our high standards of quality and style.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Customer First</h3>
            <p className="text-slate-600 text-sm">Our support team is available 24/7 to assist you. Your satisfaction is our top priority.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Sustainable Growth</h3>
            <p className="text-slate-600 text-sm">We are committed to reducing our carbon footprint through eco-friendly packaging and efficient logistics.</p>
          </div>
        </div>
      </div>

    </div>
  );
};