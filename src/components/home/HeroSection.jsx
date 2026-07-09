import React from 'react';
import SearchBar from '../ui/SearchBar';

const HeroSection = () => {
  return (
    <div className="relative bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          <span className="text-[#801c80]">Connecting</span>{' '}
          <span className="text-[#05a896] relative inline-block">
            NDIS Community
            <svg 
              className="absolute -bottom-3 left-0 w-full h-4" 
              viewBox="0 0 200 20" 
              preserveAspectRatio="none" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,20 Q100,5 200,0 Q120,20 0,20 Z" fill="#05a896"/>
            </svg>
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl md:text-2xl font-medium text-black mt-4">
          Providing <span className="text-[#801c80]">Choice</span> and <span className="text-[#6db92b]">Control</span> to meet your needs and achieve your individual goals.
        </p>
        
        <div className="pt-10">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
