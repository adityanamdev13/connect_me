import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-500",
    secondary: "bg-purple-700 hover:bg-purple-800 text-white focus:ring-purple-700",
    outline: "border-2 border-gray-200 hover:border-gray-300 text-gray-700 bg-transparent focus:ring-gray-200",
    ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-200",
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;