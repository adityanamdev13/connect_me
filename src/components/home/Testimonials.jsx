import React from 'react';
import Card from '../ui/Card';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "NDIS Participant",
    content: "Connect-ME made finding a Support Coordinator so much easier. The platform is intuitive and the providers listed are top-notch.",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Support Worker",
    content: "I found great job opportunities through this platform. It connects you directly with people who genuinely need your help.",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Caregiver",
    content: "The accommodation search feature is fantastic. We found the perfect SIL property for my brother within a week of searching.",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-8 relative">
              <div className="absolute top-0 right-0 -mt-4 mr-8 text-6xl text-green-200 font-serif opacity-50">"</div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-green-600 font-medium">{review.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic leading-relaxed">
                "{review.content}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
