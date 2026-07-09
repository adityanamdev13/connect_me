import React from 'react';
import { Home, Users, HeartPulse, Briefcase, ShoppingBag, Award } from 'lucide-react';
import Card from '../ui/Card';

const categories = [
  { icon: Home, label: 'Accommodation', description: 'SIL, SDA, MTA, STA properties', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: Users, label: 'Support Workers', description: 'Find reliable support staff', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: HeartPulse, label: 'Therapy Services', description: 'OT, Physio, Speech Therapy', color: 'text-rose-500', bg: 'bg-rose-50' },
  { icon: Briefcase, label: 'Jobs', description: 'NDIS employment opportunities', color: 'text-purple-500', bg: 'bg-purple-50' },
  { icon: ShoppingBag, label: 'Marketplace', description: 'Vehicles, Consumables & more', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: Award, label: 'Service Experts', description: 'Auditors, Consultants, Lawyers', color: 'text-indigo-500', bg: 'bg-indigo-50' },
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <Card key={index} className="p-6 cursor-pointer group">
            <div className="flex items-start gap-4">
              <div className={`p-4 rounded-2xl ${cat.bg} ${cat.color} transition-transform duration-300 group-hover:scale-110`}>
                <cat.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {cat.label}
                </h3>
                <p className="text-gray-500">{cat.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
