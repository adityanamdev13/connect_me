import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-bold text-indigo-600 mb-4 inline-block">
              ConnectMe
            </Link>
            <p className="text-gray-600 max-w-sm">
              Making connections easier and more meaningful across the globe. Stay in touch with what matters most.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-indigo-600 text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-indigo-600 text-sm">About Us</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-indigo-600 text-sm">Features</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-indigo-600 text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-indigo-600 text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ConnectMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;