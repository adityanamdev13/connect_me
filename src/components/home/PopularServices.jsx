import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';

const services = [
  {
    name: "Support Coordinator",
    listings: 214,
    image: "/images/services/support_coordinator.png"
  },
  {
    name: "Information and Advocacy",
    listings: 2803,
    image: "/images/services/info_advocacy.png"
  },
  {
    name: "Therapy and Assessment",
    listings: 992,
    image: "/images/services/therapy_assessment.png"
  },
  {
    name: "Holiday & Travel",
    listings: 0,
    image: "/images/services/holiday_travel.png"
  },
  {
    name: "Recreation and Leisure",
    listings: 461,
    image: "/images/services/recreation_leisure.png"
  },
  {
    name: "Equipment and Technology",
    listings: 1223,
    image: "/images/services/equipment_tech.png"
  },
  {
    name: "Education & Training",
    listings: 30,
    image: "/images/services/education_training.png"
  },
  {
    name: "Accommodation/Housing",
    listings: 239,
    image: "/images/services/accommodation_housing.png"
  },
  {
    name: "Daily Living and Access",
    listings: 10264,
    image: "/images/services/daily_living.png"
  }
];

const PopularServices = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Popular Services near you</h2>
        
        {/* Navigation Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button 
            onClick={scrollLeft}
            className="p-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-600 transition-all shadow-sm cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="p-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-600 transition-all shadow-sm cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]"
      >
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="shrink-0 w-[300px] md:w-[320px] h-[260px] snap-start cursor-pointer group flex flex-col overflow-hidden border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300"
          >
            {/* Image Section (Top 70%) */}
            <div className="relative h-[190px] w-full overflow-hidden">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Text on Image */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold text-white leading-tight mb-1">
                  {service.name}
                </h3>
                <p className="text-xs text-gray-300 font-medium">
                  Listings {service.listings}
                </p>
              </div>
            </div>
            
            {/* Bottom White Bar (Bottom 30%) */}
            <div className="flex-1 bg-white px-4 py-3 flex items-center justify-between border-t border-gray-100">
              <span className="text-[13px] font-semibold text-gray-600 group-hover:text-primary transition-colors">
                Show all ({service.listings})
              </span>
              <div className="flex items-center gap-1 text-[13px] text-gray-500 group-hover:text-primary transition-colors">
                <span>More details</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PopularServices;
