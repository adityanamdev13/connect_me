import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Card from '../ui/Card';

const newsArticles = [
  {
    title: "Understanding the Latest NDIS Pricing Updates for 2024",
    excerpt: "Learn how the recent changes to the NDIS pricing arrangements will affect your funding and support options.",
    category: "NDIS Updates",
    date: "March 15, 2024",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    title: "Top 5 Assistive Technologies Improving Independence",
    excerpt: "Discover the most innovative new technologies that are helping participants live more independently at home.",
    category: "Technology",
    date: "March 10, 2024",
    author: "David Chen",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    title: "How to Prepare for Your Upcoming NDIS Plan Review",
    excerpt: "A comprehensive guide on what documents to gather and how to set goals for your next planning meeting.",
    category: "Guides & Tips",
    date: "March 5, 2024",
    author: "Emma Thompson",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400"
  }
];

const NewsMagazines = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto bg-gray-50/50">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">News & Magazines</h2>
          <p className="text-lg text-gray-600">Stay up to date with the latest news, guides, and NDIS updates.</p>
        </div>
        <button className="mt-4 md:mt-0 hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-all shadow-sm">
          View All Articles
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article, index) => (
          <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full bg-white">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                {article.category}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-primary" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <User size={14} className="text-primary" />
                  {article.author}
                </div>
              </div>
              
              <h3 className="text-[20px] font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                {article.title}
              </h3>
              
              <p className="text-gray-600 text-[14.5px] leading-relaxed mb-6 line-clamp-3 flex-1">
                {article.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform mt-auto">
                Read Article <ArrowRight size={16} />
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center sm:hidden">
        <button className="w-full flex justify-center items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium">
          View All Articles
        </button>
      </div>
    </section>
  );
};

export default NewsMagazines;
