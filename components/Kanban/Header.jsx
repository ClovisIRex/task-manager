import React, { useState, useContext } from 'react';
import Modal from '../Modals/CreateTicket'
import KanbanContext from './Context/KanbanContext';

const Header = ({ openCreateTicketModal, openCreateTaskModal }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded">
        <div className="flex space-x-2">
          <input type="date" className="border rounded p-2 cursor-pointer" />
          <span>-</span>
          <input type="date" className="border rounded p-2 cursor-pointer" />
        </div>
        <h1 className='app-title text-xl font-bold'>Task Management Application</h1>
        <div className="relative">
          <button 
            onClick={toggleDropdown} 
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Add a new ↓
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <button 
                onClick={openCreateTicketModal} 
                className="block px-4 py-2 text-blue-500 hover:bg-blue-100 w-full text-left cursor-pointer"
              >
                Ticket
              </button>
              <button 
                onClick={openCreateTaskModal} 
                className="block px-4 py-2 text-red-500 hover:bg-red-100 w-full text-left cursor-pointer"
              >
                Task
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
