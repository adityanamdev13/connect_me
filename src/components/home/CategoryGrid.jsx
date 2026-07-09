import React from 'react';
import { Home, Users, HeartPulse, Briefcase, ShoppingBag, Award, FileText, Calendar, BookOpen, Stethoscope, Store, HandHeart } from 'lucide-react';
import Card from '../ui/Card';

const categories = [
  { icon: FileText, label: 'Post a Service Request', description: 'Quickly find what you need by posting a request.', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { icon: Users, label: 'Service Providers', description: 'Browse Registered & Unregistered NDIS Providers.', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: Home, label: 'Accommodation', description: 'SIL, SDA, MTA, and STA rental properties.', color: 'text-cyan-500', bg: 'bg-cyan-50' },
  { icon: HandHeart, label: 'Find Supports', description: 'Support Workers, Coordinators, and Plan Managers.', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: Stethoscope, label: 'Therapy Services', description: 'Occupational Therapy, Physio, and Speech Therapy.', color: 'text-rose-500', bg: 'bg-rose-50' },
  { icon: Briefcase, label: 'Jobs & Employment', description: 'Explore NDIS specific job opportunities.', color: 'text-purple-500', bg: 'bg-purple-50' },
  { icon: Store, label: 'Market Place', description: 'Vehicles, Consumables, and NDIS Businesses.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: Award, label: 'NDIS Service Experts', description: 'Auditors, Consultants, Lawyers, and Builders.', color: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: Calendar, label: 'Events & Workshops', description: 'Find local disability and NDIS events.', color: 'text-pink-500', bg: 'bg-pink-50' },
  { icon: BookOpen, label: 'News & Blogs', description: 'Stay updated with the latest NDIS news.', color: 'text-teal-500', bg: 'bg-teal-50' },
];

const CategoryGrid = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore NDIS Categories</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse through our comprehensive directory to find exactly what you need for your NDIS journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <Card key={index} className="p-6 cursor-pointer group flex flex-col items-start h-full">
            <div className={`p-4 rounded-2xl ${cat.bg} ${cat.color} transition-transform duration-300 group-hover:scale-110 mb-5`}>
              <cat.icon size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {cat.label}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{cat.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
