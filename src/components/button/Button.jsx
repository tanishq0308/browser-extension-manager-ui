import React from 'react';

const Button = ({ text, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick} // Calls the passed click handler
      className={` py-1 px-4 rounded-3xl text-lg hover:cursor-pointer shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out dark:text-white dark:bg-[#54596954] dark:ring-1 dark:ring-gray-600 ring-1 ring-gray-200 active:ring-2 active:ring-red-400 ${
        isSelected ? 'bg-red-500 text-white dark:bg-red-500' : 'bg-white'
      }`} // Apply red background if selected
    >
      {text}
    </button>
  );
};

export default Button;
