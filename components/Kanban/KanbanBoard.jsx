import React, { useState, useContext } from 'react';
import Header from './Header';
import KanbanRow from './KanbanRow';
import { mockTasks, mockTickets } from '@/mock/mockTasks';
import Modal from '../Modals/Modal';

const KanbanBoard = () => {

  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [isEditTicketModalOpen, setIsEditTicketModalOpen] = useState(false);
  const [isCreateTicketModalOpen, setIsCreateTicketModalOpen] = useState(false);
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);




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
    }
  });

  // Edit Task modal handlers
  const openEditTaskModal = (task) => {
    setSelectedTask(task);
    setIsEditTaskModalOpen(true);
  };

  const closeEditTaskModal = () => {
    setIsEditTaskModalOpen(false);
  };

  // Edit Ticket modal handlers
  const openEditTicketModal = (ticket) => {
    setSelectedTicket(ticket);
    setIsEditTicketModalOpen(true);
  };

  const closeEditTicketModal = () => {
    setIsEditTicketModalOpen(false);
  };

   // Create  modal handlers
   const openCreateTicketModal = (ticket) => {
    setSelectedTicket(ticket);
    setIsCreateTicketModalOpen(true);
  };

  const closeCreateTicketModal = () => {
    setIsCreateTicketModalOpen(false);
  };

  const openCreateTaskModal = (task) => {
    setSelectedTask(task);
    setIsCreateTaskModalOpen(true);
  };

  const closeCreateTaskModal = () => {
    setIsCreateTaskModalOpen(false);
  };

  // Delete Task handler
  const deleteTask = (taskId) => {
    // Implement deletion logic here
  };

  // Delete Ticket handler
  const deleteTicket = (ticketId) => {
    // Implement deletion logic here
  };

  return (
    <div className="p-4">

    {isCreateTaskModalOpen && (
        <Modal isOpen={isCreateTaskModalOpen} onClose={closeCreateTaskModal}>
          <h2>Create Task</h2>
          <form>
            <input placeholder="Title" className="border rounded p-2 w-full mb-2 cursor-pointer" />
            <textarea placeholder="Description" className="border rounded p-2 w-full mb-2 cursor-pointer" />
            <input placeholder="Owner" className="border rounded p-2 w-full mb-2 cursor-pointer" />
            <input type="date" className="border rounded p-2 w-full mb-2 cursor-pointer" />
            <select className="border rounded p-2 w-full mb-2 cursor-pointer">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Create Task</button>
          </form>
        </Modal>
      )}

    {isCreateTicketModalOpen && (
        <Modal isOpen={isCreateTicketModalOpen} onClose={closeCreateTicketModal}>
          <h2>Create Ticket</h2>
        <form>
          <input placeholder="Title" className="border rounded p-2 w-full mb-2 cursor-pointer" />
          <textarea placeholder="Description" className="border rounded p-2 w-full mb-2 cursor-pointer" />
          <input placeholder="Owner" className="border rounded p-2 w-full mb-2 cursor-pointer" />
          <input type="date" className="border rounded p-2 w-full mb-2 cursor-pointer" />
          <select className="border rounded p-2 w-full mb-2 cursor-pointer">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Create Ticket</button>
        </form>
      </Modal>
      )}

      {isEditTaskModalOpen && (
        <Modal isOpen={isEditTaskModalOpen} onClose={closeEditTaskModal}>
          <h2>Edit Task</h2>
          <form>
            <input placeholder={selectedTask.title} className="border rounded p-2 w-full mb-2 cursor-pointer" />
            <textarea placeholder={selectedTask.description} className="border rounded p-2 w-full mb-2 cursor-pointer" />
            <input placeholder={selectedTask.owner} className="border rounded p-2 w-full mb-2 cursor-pointer" />
            <input type="date" placeholder={selectedTask.dueDate} className="border rounded p-2 w-full mb-2 cursor-pointer" />
            <select className="border rounded p-2 w-full mb-2 cursor-pointer" value={selectedTask.priority}>
            <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Edit Task</button>
          </form>
        </Modal>
      )}

      {isEditTicketModalOpen && (
        <Modal isOpen={isEditTicketModalOpen} onClose={closeEditTicketModal}>
          <h2>Edit Ticket</h2>
          <form>
            <input placeholder={selectedTicket.title} className="border rounded p-2 w-full mb-2 cursor-pointer" />
            <textarea placeholder={selectedTicket.description} className="border rounded p-2 w-full mb-2 cursor-pointer" />
            <input placeholder={selectedTicket.owner} className="border rounded p-2 w-full mb-2 cursor-pointer" />
            <input type="date" placeholder={selectedTicket.dueDate} className="border rounded p-2 w-full mb-2 cursor-pointer" />
            <select className="border rounded p-2 w-full mb-2 cursor-pointer" value={selectedTicket.priority}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Edit Ticket</button>
          </form>
        </Modal>
      )}
      <Header
        openCreateTicketModal={openCreateTicketModal}
        openCreateTaskModal={openCreateTaskModal}
      />
      {Object.entries(tickets).map((ticket, ticketIndex) => (
        <KanbanRow
          key ={ticketIndex} 
          ticketIndex ={ticketIndex}
          ticket = {ticket[1]}
          openEditTaskModal ={openEditTaskModal}
          openEditTicketModal={openEditTicketModal}
          data = {data}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
