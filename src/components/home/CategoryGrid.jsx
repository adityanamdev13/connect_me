import React from 'react';
import { 
  FcCollaboration, FcCustomerSupport, FcBriefcase, FcConferenceCall, FcApproval, 
  FcPlanner, FcCalendar, FcShop, FcHome, FcNews, 
  FcDepartment, FcLike, FcAutomotive, FcBusiness, FcAdvertising 
} from 'react-icons/fc';

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
  { icon: FcLike, label: 'SDA Improved' },
  { icon: FcAutomotive, label: 'Modified Vehicle for' },
  { icon: FcBusiness, label: 'NDIS Business for Sale' },
  { icon: FcAdvertising, label: 'NDIS Digital Marketing' },
];

const CategoryGrid = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
        {categories.map((cat, index) => {
          return (
            <div 
              key={index} 
              className="
                group cursor-pointer flex flex-col items-center justify-center text-center 
                h-[140px] px-2 py-4 rounded-xl transition-all duration-300 bg-white
                border border-gray-100 
                hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-transparent hover:scale-[1.02] hover:z-10
              "
            >
              <div className="mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                <cat.icon size={42} />
              </div>
              <h3 className="text-[13px] font-extrabold leading-tight px-1 text-slate-800 group-hover:text-[#06A796] transition-colors">
                {cat.label}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryGrid;
