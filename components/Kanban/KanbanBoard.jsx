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

  const createTask = (newTask, ticketId) => {
    setData(prevData => {
      const updatedTasks = [...prevData.tasks, newTask];
      const updatedTickets = prevData.tickets.map(ticket => {
        if (ticket.id == ticketId) {
          return {
            ...ticket,
            tasks: [...ticket.tasks, newTask.id]
          };
        }
        return ticket;
      });
      return {
        ...prevData,
        tasks: updatedTasks,
        tickets: updatedTickets
      };
    });
    setIsCreateTaskModalOpen(false);
  };
  
  const createTicket = (newTicket) => {
    const updatedTickets = [...data.tickets, newTicket];
    setData({ ...data, tickets: updatedTickets });
    setIsCreateTicketModalOpen(false);
  };
  
  const deleteTask = (taskId) => {
    const updatedTasks = data.tasks.filter(task => task.id !== taskId);
    setData({ ...data, tasks: updatedTasks });
  };
  
  const deleteTicket = (ticketId) => {
    const updatedTickets = data.tickets.filter(ticket => ticket.id !== ticketId);
    setData({ ...data, tickets: updatedTickets });
  };

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    const ticketId = e.target.elements[5].value;
    const newTask = {
      id: generateUniqueId(), // assuming you've implemented the generateUniqueId function
      title: e.target.elements[0].value,
      description: e.target.elements[1].value,
      owner: e.target.elements[2].value,
      dueDate: e.target.elements[3].value,
      priority: e.target.elements[4].value,
      status: "Unassigned"
    };
    createTask(newTask, ticketId); // assuming createTask function is defined
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    const newTicket = {
      id: generateUniqueId(), // assuming you've implemented the generateUniqueId function
      title: e.target.elements[0].value,
      owner: e.target.elements[1].value,
      dueDate: e.target.elements[2].value,
      priority: e.target.elements[3].value,
      tasks: []
    };
    createTicket(newTicket); // assuming createTask function is defined
  };

  return (
    <div className="p-4">

    {isCreateTaskModalOpen && (
        <Modal isOpen={isCreateTaskModalOpen} onClose={closeCreateTaskModal}>
          <h2>Create Task</h2>
          <form onSubmit={handleCreateTask}>
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
            <select className="border rounded p-2 w-full mb-2 cursor-pointer" name="ticket">
              <option value="">Choose Ticket</option>
              {data.tickets.map(ticket => (
                <option key={ticket.id} value={ticket.id}>{ticket.title}</option>
              ))}
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Create Task</button>
          </form>
        </Modal>
      )}

    {isCreateTicketModalOpen && (
        <Modal isOpen={isCreateTicketModalOpen} onClose={closeCreateTicketModal}>
          <h2>Create Ticket</h2>
        <form onSubmit={handleCreateTicket}>
          <input placeholder="Title" className="border rounded p-2 w-full mb-2 cursor-pointer" />
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
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mr-2">Save Task</button>
            {/* <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Delete Task</button> */}
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
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mr-2">Save Ticket</button>
            {/* <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Delete Ticket</button> */}
          </form>
        </Modal>
      )}
      <Header
        openCreateTicketModal={openCreateTicketModal}
        openCreateTaskModal={openCreateTaskModal}
      />
      {data.tickets.map((ticket) => (
        <KanbanRow
          key ={ticket.id} 
          ticketIndex ={ticket.id}
          ticket = {ticket}
          openEditTaskModal ={openEditTaskModal}
          openEditTicketModal={openEditTicketModal}
          data = {data}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
