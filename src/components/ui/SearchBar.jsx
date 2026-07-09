import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, ChevronDown, ListFilter } from 'lucide-react';

const CustomSelect = ({ label, icon: Icon, iconBg, iconColor, options, placeholder, isDropdown = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex-1 flex items-center gap-3 px-4 md:px-6 relative" ref={dropdownRef}>
      <div className={`p-2.5 rounded-full ${iconBg} ${iconColor} shrink-0`}>
        <Icon size={20} strokeWidth={2} />
      </div>
      
      {isDropdown ? (
        <div 
          className="flex flex-col w-full text-left cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-0.5 cursor-pointer">
            {label}
          </label>
          <div className="flex items-center justify-between">
            <span className={`text-[14px] md:text-[15px] font-medium ${selected ? 'text-gray-800' : 'text-slate-500'}`}>
              {selected || placeholder}
            </span>
            <ChevronDown size={14} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full text-left">
          <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
            {label}
          </label>
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder={placeholder} 
              className="w-full bg-transparent focus:outline-none text-[14px] md:text-[15px] font-medium text-gray-800 placeholder-slate-500"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Dropdown Options */}
      {isOpen && isDropdown && (
        <div className="absolute top-[calc(100%+16px)] left-0 min-w-[280px] w-full bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 py-2 z-50 max-h-64 overflow-y-auto">
          {options.map((opt, idx) => (
            <div 
              key={idx}
              className={`px-5 py-2.5 cursor-pointer text-sm transition-colors ${
                selected === opt 
                  ? 'bg-green-50 text-[#00c853] font-bold' 
                  : 'text-gray-700 font-medium hover:bg-gray-50'
              }`}
              onClick={() => {
                setSelected(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchBar = ({ onSearch }) => {
  const providerOptions = [
    "NDIS Registered Providers",
    "Unregistered Providers",
    "Support Workers",
    "Support Coordinators",
    "Plan Managers"
  ];

  const whatYouWantOptions = [
    "Accommodation / Housing",
    "Therapy Services",
    "Daily Living Support",
    "Community Participation"
  ];

  return (
    <div className="bg-white p-2 md:p-3 rounded-2xl md:rounded-full flex flex-col md:flex-row items-stretch md:items-center w-full max-w-5xl mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 gap-y-4 md:gap-y-0">
      
      <div className="flex flex-col md:flex-row flex-1 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        
        {/* Field 1: All Service Provider */}
        <CustomSelect 
          label="All Service Provider"
          icon={Search} 
          iconBg="bg-green-50/80"
          iconColor="text-green-600"
          options={providerOptions} 
          placeholder="Select Provider Type"
        />

        {/* Field 2: What you want */}
        <CustomSelect 
          label="What you want"
          icon={ListFilter} 
          iconBg="bg-green-50/80"
          iconColor="text-green-600"
          options={whatYouWantOptions} 
          placeholder="Select Category"
        />

        {/* Field 3: Location */}
        <CustomSelect 
          label="Location"
          icon={MapPin} 
          iconBg="bg-blue-50/80"
          iconColor="text-blue-500"
          options={[]} 
          placeholder="Suburb or Postcode"
          isDropdown={false}
        />
        
      </div>
      
      {/* Search Button */}
      <button className="bg-[#00d05c] hover:bg-[#00b550] transition-colors text-white text-[15px] font-bold px-10 py-3.5 rounded-xl md:rounded-full mx-2 md:mx-0 md:mr-1 mb-1 md:mb-0 shadow-sm flex items-center justify-center">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
