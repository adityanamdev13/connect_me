import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../../constants/image';
import { Icons } from '../../constants/icons';
import { colors } from '../../theme/colors';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (label, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const navItems = [
    { label: 'Home', path: '/', isDropdown: false, active: true, icon: <Icons.Home size={16} /> },
    { 
      label: 'Post A Service Request', 
      path: '/post-request', 
      isDropdown: true, 
      icon: <Icons.FileText size={16} />,
      dropdownItems: [
        { label: 'Post Your Service Request !', path: '/post-request' }
      ]
    },
    { 
      label: 'Service Providers', 
      path: '/providers', 
      isDropdown: true, 
      icon: <Icons.Users size={16} />,
      dropdownItems: [
        { label: 'NDIS Registered Providers', path: '/providers/registered' },
        { label: 'Unregistered Providers', path: '/providers/unregistered' }
      ]
    },
    { 
      label: 'Accommodation/Housing', 
      path: '/housing', 
      isDropdown: true,
      icon: <Icons.Building size={16} />,
      dropdownItems: [
        { label: 'Accessible Rental Property', path: '/housing/accessible-rental' },
        { label: 'Rental SDA', path: '/housing/rental-sda' },
        { label: 'Rental MTA', path: '/housing/rental-mta' },
        { label: 'Rental STA/Respite', path: '/housing/rental-sta-respite' },
        { label: 'Rental SIL', path: '/housing/rental-sil' },
        { label: 'NDIS Property For Sale', path: '/housing/ndis-property' },
        { label: 'Accessible Holiday Destination', path: '/housing/holiday' },
        { label: 'Home Modification', path: '/housing/home-modification' },
      ]
    },
    { 
      label: 'Find Supports', 
      path: '/supports', 
      isDropdown: true, 
      icon: <Icons.HeartHandshake size={16} />,
      dropdownItems: [
        { label: 'Support Workers', path: '/supports/workers' },
        { label: 'Support Coordinators', path: '/supports/coordinators' },
        { label: 'Plan Managers', path: '/supports/plan-managers' },
        { label: 'Psychosocial Recovery Coach', path: '/supports/recovery-coach' },
        { label: 'Advocacy and Support Organisation', path: '/supports/advocacy' }
      ]
    },
    { 
      label: 'Job', 
      path: '/job', 
      isDropdown: true, 
      icon: <Icons.Briefcase size={16} />,
      dropdownItems: [
        { label: 'Job Dashboard', path: '/job/dashboard' }
      ]
    },
    { 
      label: 'Market Place', 
      path: '/marketplace', 
      isDropdown: true, 
      icon: <Icons.Store size={16} />,
      dropdownItems: [
        { label: 'Consumable for Sale', path: '/marketplace/consumables' },
        { label: 'Modified Vehicle for Sale', path: '/marketplace/vehicles' },
        { label: 'NDIS Business for Sale', path: '/marketplace/ndis-business' },
        { label: 'NDIS Property for Sale', path: '/marketplace/ndis-property' },
        { label: 'Coupons & Deals', path: '/marketplace/coupons' }
      ]
    },
    { 
      label: 'NDIS Service Experts', 
      path: '/experts', 
      isDropdown: true, 
      icon: <Icons.Award size={16} />,
      dropdownItems: [
        { label: 'NDIS SDA Property Management', path: '/experts/sda-management' },
        { label: 'NDIS Property Registered Builder', path: '/experts/builders' },
        { label: 'NDIS Business Consultants', path: '/experts/consultants' },
        { label: 'NDIS Business Accountants', path: '/experts/accountants' },
        { label: 'NDIS Lawyers', path: '/experts/lawyers' },
        { label: 'NDIS Education And Training', path: '/experts/education' },
        { label: 'NDIS Certification Bodies / Auditors', path: '/experts/auditors' },
        { label: 'NDIS Digital Marketing', path: '/experts/marketing' }
      ]
    },
    { label: 'Events', path: '/events', isDropdown: false, icon: <Icons.Calendar size={16} /> },
    { label: 'Blogs', path: '/blogs', isDropdown: false, icon: <Icons.BookOpen size={16} /> },
    { label: 'News', path: '/news', isDropdown: false, icon: <Icons.Newspaper size={16} /> },
  ];

  return (
    <header ref={headerRef} className="w-full bg-white/95 backdrop-blur-sm sticky top-0 font-sans shadow-sm z-50">
      {/* Top Utility Bar (Very subtle, for accessibility tools) */}
      <div className="w-full bg-gray-50 border-b border-gray-100 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-1.5 flex justify-end items-center gap-4 text-xs font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <span className="opacity-70">Font Size:</span>
            <button className="hover:text-primary transition-colors hover:scale-110">A+</button>
            <button className="hover:text-primary transition-colors hover:scale-110">A-</button>
          </div>
          <div className="w-px h-3 bg-gray-300"></div>
          <Link to="/get-listed" className="hover:text-primary transition-colors">
            Get Listed
          </Link>
        </div>
      </div>

      {/* Main Brand & Auth Bar */}
      <div className="w-full px-4 md:px-8 py-4">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <img 
              src={images.companylogo} 
              alt="Connect-ME Logo" 
              className="h-14 md:h-16 object-contain object-left group-hover:opacity-90 transition-opacity" 
            />
          </Link>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5 text-sm font-semibold">
            <Link to="/login" className="text-gray-700 hover:text-primary transition-colors px-2">
              Sign in
            </Link>
            
            <Link 
              to="/register" 
              className="px-6 py-2.5 rounded-full text-white font-medium hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              style={{ backgroundColor: colors.secondary }}
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar (Clean, sleek, border-bottom indicators) */}
      <div className="w-full border-t border-gray-100 bg-white">
        <div className="w-full px-2 lg:px-6">
          <nav className="flex items-center flex-wrap justify-center gap-x-1 lg:gap-x-2">
            {navItems.map((item, index) => {
              const isActive = item.active;
              return (
                <div key={index} className="relative flex shrink-0 group/nav">
                  {item.isDropdown ? (
                    <button
                      className={`flex items-center gap-1.5 px-2 py-4 text-[13px] font-medium transition-all duration-200 outline-none relative group ${
                        isActive ? 'text-primary' : 'text-gray-600 group-hover/nav:text-primary hover:text-primary'
                      }`}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                      <Icons.ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 group-hover/nav:rotate-180 ${isActive ? 'text-primary' : 'text-gray-400 group-hover/nav:text-primary group-hover:text-primary'}`} 
                      />
                      {/* Active Indicator Line */}
                      <span 
                        className={`absolute bottom-0 left-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${isActive ? 'bg-primary scale-x-100' : 'bg-transparent scale-x-0 group-hover/nav:bg-primary group-hover/nav:scale-x-100 group-hover:bg-primary group-hover:scale-x-100'}`}
                        style={isActive ? { backgroundColor: colors.primary } : {}}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1.5 px-2 py-4 text-[13px] font-medium transition-all duration-200 relative group ${
                        isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                      }`}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                      {/* Active Indicator Line */}
                      <span 
                        className={`absolute bottom-0 left-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${isActive ? 'bg-primary scale-x-100' : 'bg-transparent scale-x-0 group-hover:bg-primary group-hover:scale-x-100'}`}
                        style={isActive ? { backgroundColor: colors.primary } : {}}
                      />
                    </Link>
                  )}

                  {/* Dropdown Menu - CSS hover based */}
                  {item.isDropdown && item.dropdownItems && (
                    <div 
                      className="absolute top-full left-0 z-50 min-w-[280px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 py-3 mt-1 overflow-hidden invisible opacity-0 translate-y-2 group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 transition-all duration-300"
                    >
                      {item.dropdownItems.map((dropItem, dIndex) => (
                        <Link
                          key={dIndex}
                          to={dropItem.path}
                          className="flex items-center justify-between px-6 py-2.5 text-[14px] text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors group/item"
                        >
                          <span className="relative inline-block transition-transform duration-200 group-hover/item:translate-x-1">
                            {dropItem.label}
                          </span>
                          {dropItem.hasSubmenu && (
                            <Icons.ChevronDown size={14} className="-rotate-90 text-gray-400 group-hover/item:text-primary transition-colors" />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;