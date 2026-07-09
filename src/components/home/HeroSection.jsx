import React from 'react';
import SearchBar from '../ui/SearchBar';

const HeroSection = () => {
  return (
    <div className="relative bg-linear-to-br from-green-50 to-blue-50 py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Shapes Wrapper with overflow-hidden */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-green-100 rounded-r-full opacity-20 transform -translate-x-1/2"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-100 rounded-l-full opacity-20 transform translate-x-1/2"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
          Find Your Perfect <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 to-blue-600">NDIS Services</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-gray-600">
          One place to find all your NDIS services, providers, accommodation, and support workers in Australia.
        </p>
        
        <div className="pt-8">
          <SearchBar />
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 pt-8 text-sm text-gray-500">
          <span>Popular:</span>
          <a href="#" className="hover:text-green-600 transition-colors">Support Coordination</a>
          <a href="#" className="hover:text-green-600 transition-colors">SIL Accommodation</a>
          <a href="#" className="hover:text-green-600 transition-colors">Plan Management</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
