import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 font-sans mt-auto">
      {/* Top Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 text-center border-b border-gray-700/50 border-dashed">
          <p className="text-lg font-medium">
            <span className="text-gray-400">Email: </span>
            <a href="mailto:contact@connect-me.com.au" className="text-white hover:text-green-500 transition-colors">
              contact@connect-me.com.au
            </a>
          </p>
        </div>
        
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Top Category */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Top Category</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Holiday Destination", "Accommodation Housing", 
                "All service Providers", "Support coordinators", 
                "NDIS Business for Sale", "NDIS Property for sale", 
                "Support Workers", "Modified Vehicle for Sale"
              ].map((link, idx) => (
                <Link key={idx} to="/" className="text-[14px] hover:text-green-500 transition-colors hover:translate-x-1 duration-200 w-fit">
                  {link}
                </Link>
              ))}
            </div>
            
            {/* Get In Touch */}
            <div className="mt-12">
              <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Get In Touch</h3>
              <p className="text-[14px] mb-4">
                <span className="text-gray-400">Email: </span>
                <a href="mailto:contact@connect-me.com.au" className="text-white hover:text-green-500 transition-colors">
                  contact@connect-me.com.au
                </a>
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 transition-all">
                  <FaGooglePlay size={22} className="text-green-500" />
                  <div className="text-left">
                    <div className="text-[10px] leading-none text-gray-400">Android app on</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 transition-all">
                  <FaApple size={26} className="text-white mb-0.5" />
                  <div className="text-left">
                    <div className="text-[10px] leading-none text-gray-400">Download on the</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Trending Category */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Trending Category</h3>
            <div className="flex flex-col gap-3">
              {[
                "Therapy Services", "Plan Managers", 
                "Events & Workshops", "Market Place",
                "Jobs & Employment", "News & Blogs"
              ].map((link, idx) => (
                <Link key={idx} to="/" className="text-[14px] hover:text-green-500 transition-colors hover:translate-x-1 duration-200 w-fit">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Help & Support + Flags */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Help & Support</h3>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                "About us", "FAQ", 
                "Feedback", "Contact us", 
                "Privacy Policy", "Term & Condition"
              ].map((link, idx) => (
                <Link key={idx} to="/" className="text-[14px] hover:text-green-500 transition-colors hover:translate-x-1 duration-200 w-fit">
                  {link}
                </Link>
              ))}
            </div>
            
            {/* Flags Grid (Using proper high-res SVGs) */}
            <div className="grid grid-cols-2 gap-2 max-w-[140px]">
              <div className="h-10 rounded overflow-hidden shadow-inner border border-gray-700/50 relative bg-black">
                <img src="/images/flags/australia.svg" alt="Australian Flag" className="w-full h-full object-cover" />
              </div>
              <div className="h-10 rounded overflow-hidden shadow-inner border border-gray-700/50 relative bg-black">
                <img src="/images/flags/aboriginal.svg" alt="Aboriginal Flag" className="w-full h-full object-cover" />
              </div>
              <div className="h-10 rounded overflow-hidden shadow-inner border border-gray-700/50 relative bg-[#00008b]">
                 <img src="/images/flags/torres_strait.svg" alt="Torres Strait Islander Flag" className="w-full h-full object-cover" />
              </div>
              <div className="h-10 rounded overflow-hidden shadow-inner border border-gray-700/50 relative bg-black">
                <img src="/images/flags/pride.svg" alt="Pride Flag" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0b1120] border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-[13px] text-gray-400 mb-2">
            Copyright © 2024-2025 <span className="text-white font-medium">Connect-Me</span> — All rights reserved. Connecting the NDIS community with trusted providers across Australia.
          </p>
          <p className="text-[12px] text-gray-500">
            <span className="font-bold text-gray-400">Disclaimer:</span> This is an independent directory and is not affiliated with the NDIS or any government body.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;