import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import CategoryGrid from '../../components/home/CategoryGrid';
import PopularServices from '../../components/home/PopularServices';
import WhyConnectMe from '../../components/home/WhyConnectMe';
import Testimonials from '../../components/home/Testimonials';
import NewsMagazines from '../../components/home/NewsMagazines';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CategoryGrid />
      <WhyConnectMe />
      <PopularServices />
      <Testimonials />
      <NewsMagazines />
    </div>
  );
};

export default Home;