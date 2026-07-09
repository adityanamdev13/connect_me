import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import CategoryGrid from '../../components/home/CategoryGrid';
import Testimonials from '../../components/home/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CategoryGrid />
      <Testimonials />
    </div>
  );
};

export default Home;