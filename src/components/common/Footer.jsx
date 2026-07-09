import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-green-600 mb-4 inline-block">
              Connect-ME
            </Link>
            <p className="text-gray-600 max-w-sm mt-2">
              National Disability Information Services. One place to find all your NDIS services, SIL, SDA, and trusted providers across Australia.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/providers" className="text-gray-600 hover:text-green-600 transition-colors">Find Providers</Link></li>
              <li><Link to="/housing" className="text-gray-600 hover:text-green-600 transition-colors">Accommodation</Link></li>
              <li><Link to="/marketplace" className="text-gray-600 hover:text-green-600 transition-colors">Marketplace</Link></li>
              <li><Link to="/post-request" className="text-gray-600 hover:text-green-600 transition-colors">Post a Service Request</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-green-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-green-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 text-center flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Connect-ME. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-green-600 transition-colors">Facebook</a>
            <a href="#" className="hover:text-green-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-green-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;