import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pb-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Get in Touch</h1>
        <p className="text-slate-500">We'd love to hear from you. Please fill out the form below or contact us directly.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-indigo-600 text-white p-8 rounded-2xl shadow-lg h-full">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1" />
                <div>
                  <p className="text-indigo-200 text-sm">Email</p>
                  <p className="font-medium">support@choiceforyou.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1" />
                <div>
                  <p className="text-indigo-200 text-sm">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1" />
                <div>
                  <p className="text-indigo-200 text-sm">Address</p>
                  <p className="font-medium">123 Commerce Blvd, Suite 100<br/>Tech City, TC 90210</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <p className="text-sm text-indigo-200 mb-4">Follow us</p>
               <div className="flex gap-4">
                 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">FB</div>
                 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">IG</div>
                 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">TW</div>
               </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-indigo-500 transition-all outline-none" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-indigo-500 transition-all outline-none" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-indigo-500 transition-all outline-none" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-indigo-500 transition-all outline-none resize-none" required></textarea>
            </div>

            <button 
              type="submit" 
              className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${submitted ? 'bg-green-500' : 'bg-slate-900 hover:bg-indigo-600'}`}
            >
              {submitted ? 'Message Sent!' : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};