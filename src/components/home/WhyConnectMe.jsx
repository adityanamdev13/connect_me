import React from 'react';
import { Users, Briefcase, Network, HeartHandshake, Award } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Participants',
    description: 'Empowering NDIS participants to seamlessly discover and connect with vetted registered and unregistered service providers tailored to their unique needs.',
    icon: <Users className="w-8 h-8 text-primary" />,
    borderColor: 'border-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 2,
    title: 'Service Providers',
    description: 'Expand your reach and help those who need you most. Receive verified leads, build your professional network, and connect with clients effortlessly.',
    icon: <Briefcase className="w-8 h-8 text-orange-500" />,
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    id: 3,
    title: 'Support Coordinators',
    description: 'Whether operating independently or within an agency, showcase your services on our platform to effortlessly connect with participants seeking guidance.',
    icon: <Network className="w-8 h-8 text-green-600" />,
    borderColor: 'border-green-600',
    bgColor: 'bg-green-600/10',
  },
  {
    id: 4,
    title: 'Support Workers',
    description: 'Create a comprehensive profile to highlight your expertise and certifications. Secure meaningful work through our platform on your own terms.',
    icon: <HeartHandshake className="w-8 h-8 text-blue-500" />,
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    id: 5,
    title: 'NDIS Experts',
    description: 'If you directly or indirectly assist NDIS participants or support organizations, we invite you to join our ecosystem and amplify your impact.',
    icon: <Award className="w-8 h-8 text-purple-500" />,
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

const WhyConnectMe = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Who we serve
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect-ME Ecosystem
          </h3>
          <p className="text-lg text-gray-600">
            A unified platform bringing together everyone in the NDIS community to ensure the best possible care and support.
          </p>
        </div>

        {/* Features Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${feature.borderColor} border-x border-b border-gray-100 group flex flex-col items-center text-center`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-colors duration-300 ${feature.bgColor} group-hover:bg-opacity-20`}>
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyConnectMe;
