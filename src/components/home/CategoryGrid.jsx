import React from 'react';
import { 
  FcCollaboration, FcCustomerSupport, FcBriefcase, FcConferenceCall, FcApproval, 
  FcPlanner, FcCalendar, FcShop, FcHome, FcNews, 
  FcDepartment, FcLike, FcAutomotive, FcBusiness, FcAdvertising 
} from 'react-icons/fc';
import Card from '../ui/Card';

const categories = [
  { icon: FcCollaboration, label: 'All service Providers' },
  { icon: FcCustomerSupport, label: 'Support Workers' },
  { icon: FcBriefcase, label: 'Jobs' },
  { icon: FcConferenceCall, label: 'Support coordinators' },
  { icon: FcApproval, label: 'NDIS Service Experts' },
  
  { icon: FcPlanner, label: 'Plan Managers' },
  { icon: FcCalendar, label: 'Events' },
  { icon: FcShop, label: 'Market Place' },
  { icon: FcHome, label: 'Accommodation Housing' },
  { icon: FcNews, label: 'Blogs' },
  
  { icon: FcDepartment, label: 'NDIS Property for Sale' },
  { icon: FcLike, label: 'SDA Improved liveability' },
  { icon: FcAutomotive, label: 'Modified Vehicle for Sale' },
  { icon: FcBusiness, label: 'NDIS Business for Sale' },
  { icon: FcAdvertising, label: 'NDIS Digital Marketing' },
];

const CategoryGrid = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {categories.map((cat, index) => (
          <Card key={index} className="p-6 cursor-pointer group flex flex-col items-center justify-center text-center h-[160px] hover:shadow-xl transition-all duration-300 bg-white border border-gray-50">
            <div className="transition-transform duration-300 group-hover:scale-110 mb-4 group-hover:-translate-y-1">
              <cat.icon size={48} />
            </div>
            <h3 className="text-[14px] md:text-[15px] font-bold text-gray-800 leading-snug group-hover:text-green-600 transition-colors px-2">
              {cat.label}
            </h3>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
