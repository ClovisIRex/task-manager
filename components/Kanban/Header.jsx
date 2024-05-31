import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded">
      <div className="flex space-x-2">
        <input type="date" className="border rounded p-2" />
        <span>-</span>
        <input type="date" className="border rounded p-2" />
      </div>
      <h1 className='app-title'>Task Management Application</h1>
      <div className="relative">
        <button 
          onClick={toggleDropdown} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add a new ↓
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
            <a href="#" className="block px-4 py-2 text-blue-500 hover:bg-blue-100">Ticket</a>
            <a href="#" className="block px-4 py-2 text-red-500 hover:bg-red-100">Bug</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
