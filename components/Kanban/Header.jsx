import React, { useState } from 'react';
import Modal from '../Modals/CreateTicket'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false); // Close the dropdown when modal is opened
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
                onClick={openModal} 
                className="block px-4 py-2 text-blue-500 hover:bg-blue-100 w-full text-left cursor-pointer"
              >
                Ticket
              </button>
              <a href="#" className="block px-4 py-2 text-red-500 hover:bg-red-100 cursor-pointer">Bug</a>
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Create Ticket</h2>
        <form>
          <input placeholder="Title" className="border rounded p-2 w-full mb-2 cursor-pointer" />
          <textarea placeholder="Description" className="border rounded p-2 w-full mb-2 cursor-pointer" />
          <input placeholder="Owner" className="border rounded p-2 w-full mb-2 cursor-pointer" />
          <input type="date" placeholder="Due Date" className="border rounded p-2 w-full mb-2 cursor-pointer" />
          <select className="border rounded p-2 w-full mb-2 cursor-pointer">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Create</button>
        </form>
      </Modal>
    </div>
  );
};

export default Header;
