import React from 'react';
import { MessageSquare, ThumbsUp, Calendar, User } from 'lucide-react';

export const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Smart Homes",
      excerpt: "Explore how AI and IoT are transforming our living spaces into intelligent ecosystems.",
      date: "Oct 12, 2023",
      author: "Alex Tech",
      image: "https://picsum.photos/600/300?random=200"
    },
    {
      id: 2,
      title: "Sustainable Fashion Trends",
      excerpt: "Why eco-friendly materials are becoming the new standard in the fashion industry.",
      date: "Oct 08, 2023",
      author: "Mia Style",
      image: "https://picsum.photos/600/300?random=201"
    },
    {
      id: 3,
      title: "Top 10 Gadgets for Productivity",
      excerpt: "Boost your workflow with these essential tech tools designed for efficiency.",
      date: "Sep 25, 2023",
      author: "David Work",
      image: "https://picsum.photos/600/300?random=202"
    }
  ];

  const complaints = [
    { user: "John D.", text: "Shipping was slightly delayed due to weather, but the support team was very communicative.", rating: 4 },
    { user: "Lisa M.", text: "Great product quality, but I wish there were more color options available.", rating: 4 },
    { user: "Robert K.", text: "Had an issue with size, but the return process was smooth and instant.", rating: 5 }
  ];

  return (
    <div className="pb-12 animate-fade-in">
      
      {/* Blog Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Latest Insights</h1>
        <p className="text-slate-500">News, trends, and stories from the Choice For You team.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer">
            <div className="h-48 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
              <button className="text-indigo-600 text-sm font-semibold hover:underline">Read More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Community / Reviews Section */}
      <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <MessageSquare className="text-indigo-600" />
          <h2 className="text-2xl font-bold text-slate-900">Community Feedback</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {complaints.map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
               <div className="flex justify-between items-start mb-2">
                 <span className="font-bold text-slate-800">{c.user}</span>
                 <div className="flex text-amber-400 text-xs">
                   {[...Array(5)].map((_, idx) => (
                     <span key={idx} className={idx < c.rating ? '' : 'text-gray-200'}>★</span>
                   ))}
                 </div>
               </div>
               <p className="text-slate-600 text-sm italic">"{c.text}"</p>
               <div className="mt-3 flex items-center gap-1 text-xs text-slate-400">
                 <ThumbsUp size={12} /> Helpful
               </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 mb-4">We value your feedback. Have a suggestion or complaint?</p>
          <button className="bg-white border border-slate-300 text-slate-700 px-6 py-2 rounded-full font-medium hover:bg-slate-50 transition-colors">
            Submit a Review
          </button>
        </div>
      </div>

    </div>
  );
};