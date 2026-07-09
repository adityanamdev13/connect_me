import React from 'react';

const Input = ({ className = '', icon: Icon, ...props }) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      {Icon && (
        <div className="absolute left-3 text-gray-400">
          <Icon size={20} />
        </div>
      )}
      <input 
        className={`w-full py-2 px-4 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none ${Icon ? 'pl-10' : ''}`}
        {...props}
      />
    </div>
  );
};

export default Input;