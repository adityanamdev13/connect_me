import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 ${hover ? 'hover:shadow-md hover:-translate-y-1' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
