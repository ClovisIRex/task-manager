import React, { useState } from 'react';

const Header = ({ openCreateTicketModal, openCreateTaskModal, tickets }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const applyDateFilter = () => {
    if (!startDate || !endDate) {
      alert('Please select both start and end dates.');
      return;
    }

    const filteredTickets = tickets.filter(ticket => {
      const ticketDate = new Date(ticket.dueDate);
      return ticketDate >= new Date(startDate) && ticketDate <= new Date(endDate);
    });
    // Use the filteredTickets data in whatever way you need
    console.log(filteredTickets);
  };

  const resetFilter = () => {
    setStartDate('');
    setEndDate('');
  };

  return (
    <header className="p-4 bg-gray-100 rounded flex justify-between items-center">
      <div className="flex space-x-2">
        <input 
          type="date" 
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          className="border rounded p-2 cursor-pointer" 
          aria-label="Start date" 
        />
        <span className="self-center">-</span>
        <input 
          type="date" 
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          className="border rounded p-2 cursor-pointer" 
          aria-label="End date" 
        />
        <button 
          onClick={applyDateFilter} 
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Filter Tickets
        </button>
        <button 
          onClick={resetFilter} 
          className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Reset Filter
        </button>
      </div>
      <h1 className="app-title text-xl font-bold">Task Management Application</h1>
      <div className="relative">
        <button 
          onClick={toggleDropdown} 
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          Add a new ↓
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
            <button 
              onClick={openCreateTicketModal} 
              className="block px-4 py-2 text-blue-500 hover:bg-blue-100 w-full text-left cursor-pointer"
              role="menuitem"
            >
              Ticket
            </button>
            <button 
              onClick={openCreateTaskModal} 
              className="block px-4 py-2 text-red-500 hover:bg-red-100 w-full text-left cursor-pointer"
              role="menuitem"
            >
              Task
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
