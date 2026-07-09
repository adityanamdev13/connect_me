import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, ChevronDown, ListFilter } from 'lucide-react';
import Button from './Button';

// Custom Select Component for the Search Bar
const CustomSelect = ({ label, icon: Icon, options, placeholder }) => {
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
    <div className="flex-1 flex items-center gap-3 px-4 w-full border-b md:border-b-0 md:border-r border-gray-100 pb-3 md:pb-0 relative" ref={dropdownRef}>
      <div className="p-2 bg-green-50 rounded-full text-green-600 shrink-0">
        <Icon size={20} />
      </div>
      <div 
        className="flex flex-col w-full text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5 cursor-pointer">{label}</label>
        <div className="flex items-center justify-between">
          <span className={`font-medium ${selected ? 'text-gray-900' : 'text-gray-400'}`}>
            {selected || placeholder}
          </span>
          <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute top-[calc(100%+15px)] left-0 min-w-[280px] w-full bg-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border border-gray-100 p-2 z-60 animate-in fade-in slide-in-from-top-2 max-h-64 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-green-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-green-300">
          {options.map((opt, idx) => (
            <div 
              key={idx}
              className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer text-sm transition-all ${
                selected === opt 
                  ? 'bg-green-50 text-green-700 font-semibold' 
                  : 'text-gray-600 font-medium hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={() => {
                setSelected(opt);
                setIsOpen(false);
              }}
            >
              <span className="truncate">{opt}</span>
              {selected === opt && (
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] shrink-0"></div>
              )}
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
    "Plan Managers",
    "Psychosocial Recovery Coaches",
    "Advocacy & Support Organizations",
    "NDIS Service Experts"
  ];

  const whatYouWantOptions = [
    "Accommodation / Housing",
    "Accessible Rental Property",
    "Specialist Disability Accommodation (SDA)",
    "Short Term Accommodation (STA/Respite)",
    "Medium Term Accommodation (MTA)",
    "Supported Independent Living (SIL)",
    "Jobs & Employment",
    "Therapy Services (OT, Physio, Speech)",
    "Market Place / Vehicles",
    "Daily Living Support",
    "Community Participation"
  ];

  return (
    <div className="bg-white p-3 rounded-3xl md:rounded-full shadow-xl flex flex-col md:flex-row items-center gap-2 max-w-5xl mx-auto border border-gray-100">
      
      {/* Field 1: All Service Provider */}
      <CustomSelect 
        label="All Service Provider" 
        icon={Search} 
        options={providerOptions} 
        placeholder="Select Provider Type"
      />

      {/* Field 2: What you want */}
      <CustomSelect 
        label="What you want" 
        icon={ListFilter} 
        options={whatYouWantOptions} 
        placeholder="Select Category"
      />
      
      {/* Field 3: Location */}
      <div className="flex-1 flex items-center gap-3 px-4 w-full pb-3 md:pb-0 pt-2 md:pt-0">
        <div className="p-2 bg-blue-50 rounded-full text-blue-600 shrink-0">
          <MapPin size={20} />
        </div>
        <div className="flex flex-col w-full text-left">
          <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">Location</label>
          <input 
            type="text" 
            placeholder="Suburb or Postcode" 
            className="w-full bg-transparent focus:outline-none text-gray-900 font-medium placeholder-gray-400"
          />
        </div>
      </div>
      
      {/* Search Button */}
      <Button variant="primary" className="w-full md:w-auto rounded-xl md:rounded-full px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-bold shadow-md hover:shadow-lg transition-all text-lg md:ml-2">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
