import React, { useState, useContext } from 'react';
import Header from './Header';
import KanbanRow from './KanbanRow';
import EditTaskModal from '../Modals/EditTask';
import EditTicketModal from '../Modals/EditTicket';
import { DragDropContext } from 'react-beautiful-dnd';
import { mockTasks, mockTickets } from '@/mock/mockTasks';
import Modal from '../Modals/CreateTicket';
import KanbanContext from './Context/KanbanContext';

const KanbanBoard = () => {
  const { kanbanData, setKanbanData } = useContext(KanbanContext); // Access the contex

  const tasks = mockTasks;
  const tickets = mockTickets;

  const [data, setData] = useState({
    tasks: tasks,
    tickets: tickets,
    columns: [
      'Ticket',
      'Unassigned',
      'To Do',
      'In Progress',
      'Done'
    ],
    colors: {
      'Ticket': "bg-red-100",
      'Unassigned': "bg-purple-100",
      'To Do': "bg-blue-100",
      'In Progress': "bg-yellow-100",
      'Done': "bg-green-100"
    },
    ids: {
      'Ticket': 0,
      'Unassigned': 1,
      'To Do': 2,
      'In Progress': 3,
      'Done': 4
    },
    selectedTask: null, // State to store the selected task
    isEditModalOpen: false // State to manage the modal visibility
  });

  // Function to open the edit task modal and set the selected task
  const openEditModal = (task) => {
    setData(prevData => ({ ...prevData, selectedTask: task, isEditModalOpen: true }));
  };

  // Function to close the edit task modal
  const closeEditModal = () => {
    setData(prevData => ({ ...prevData, isEditModalOpen: false }));
  };

  return (
    <div className="p-4">
      {data.isEditModalOpen && (
        <Modal isOpen={data.isEditModalOpen} onClose={closeEditModal}>
          <h2>Edit Task</h2>
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
      )}
      <Header />
      {Object.entries(tickets).map((ticket, ticketIndex) => (
        <KanbanRow
          key ={ticketIndex} 
          ticketIndex ={ticketIndex}
          ticket = {ticket[1]}
          openEditModal ={openEditModal}
          data = {data}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
