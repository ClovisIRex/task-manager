import React, { useState } from 'react';
import Header from './Header';
import KanbanRow from './KanbanRow';
import { mockTasks, mockTickets } from '@/mock/mockTasks';
import Modal from '../Modals/Modal';

const KanbanBoard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({ 
    editTask: false, 
    editTicket: false, 
    createTask: false, 
    createTicket: false 
  });

  const tasks = mockTasks;
  const tickets = mockTickets;

  const [data, setData] = useState({
    tasks,
    tickets,
    columns: ['Ticket', 'Unassigned', 'To Do', 'In Progress', 'Done'],
    colors: {
      Ticket: 'bg-red-100',
      Unassigned: 'bg-purple-100',
      'To Do': 'bg-blue-100',
      'In Progress': 'bg-yellow-100',
      Done: 'bg-green-100'
    },
    ids: {
      Ticket: 0,
      Unassigned: 1,
      'To Do': 2,
      'In Progress': 3,
      Done: 4
    }
  });

  const openModal = (type, item = null) => {
    setSelectedItem(item);
    setIsModalOpen((prevState) => ({ ...prevState, [type]: true }));
  };

  const closeModal = (type) => {
    setIsModalOpen((prevState) => ({ ...prevState, [type]: false }));
  };

  const createTask = (newTask, ticketId) => {
    setData((prevData) => {
      const updatedTasks = [...prevData.tasks, newTask];
      const updatedTickets = prevData.tickets.map((ticket) => {
        if (ticket.id === ticketId) {
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
    closeModal('createTask');
  };

  const createTicket = (newTicket) => {
    setData((prevData) => ({
      ...prevData,
      tickets: [...prevData.tickets, newTicket]
    }));
    closeModal('createTicket');
  };

  const deleteTask = (taskId) => {
    setData((prevData) => ({
      ...prevData,
      tasks: prevData.tasks.filter((task) => task.id !== taskId)
    }));
  };

  const deleteTicket = (ticketId) => {
    setData((prevData) => ({
      ...prevData,
      tickets: prevData.tickets.filter((ticket) => ticket.id !== ticketId)
    }));
  };

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: generateUniqueId(),
      title: e.target.elements[0].value,
      description: e.target.elements[1].value,
      owner: e.target.elements[2].value,
      dueDate: e.target.elements[3].value,
      priority: e.target.elements[4].value,
      status: 'Unassigned'
    };
    const ticketId = e.target.elements[5].value;
    createTask(newTask, ticketId);
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    const newTicket = {
      id: generateUniqueId(),
      title: e.target.elements[0].value,
      owner: e.target.elements[1].value,
      dueDate: e.target.elements[2].value,
      priority: e.target.elements[3].value,
      tasks: []
    };
    createTicket(newTicket);
  };

  return (
    <div className="p-4">
      {isModalOpen.createTask && (
        <Modal isOpen={isModalOpen.createTask} onClose={() => closeModal('createTask')}>
          <h2>Create Task</h2>
          <form onSubmit={handleCreateTask}>
            <input placeholder="Title" className="border rounded p-2 w-full mb-2" />
            <textarea placeholder="Description" className="border rounded p-2 w-full mb-2" />
            <input placeholder="Owner" className="border rounded p-2 w-full mb-2" />
            <input type="date" className="border rounded p-2 w-full mb-2" />
            <select className="border rounded p-2 w-full mb-2">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
            <select className="border rounded p-2 w-full mb-2" name="ticket">
              <option value="">Choose Ticket</option>
              {data.tickets.map((ticket) => (
                <option key={ticket.id} value={ticket.id}>
                  {ticket.title}
                </option>
              ))}
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Create Task
            </button>
          </form>
        </Modal>
      )}

      {isModalOpen.createTicket && (
        <Modal isOpen={isModalOpen.createTicket} onClose={() => closeModal('createTicket')}>
          <h2>Create Ticket</h2>
          <form onSubmit={handleCreateTicket}>
            <input placeholder="Title" className="border rounded p-2 w-full mb-2" />
            <input placeholder="Owner" className="border rounded p-2 w-full mb-2" />
            <input type="date" className="border rounded p-2 w-full mb-2" />
            <select className="border rounded p-2 w-full mb-2">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Create Ticket
            </button>
          </form>
        </Modal>
      )}

      {isModalOpen.editTask && selectedItem && (
        <Modal isOpen={isModalOpen.editTask} onClose={() => closeModal('editTask')}>
          <h2>Edit Task</h2>
          <form>
            <input
              defaultValue={selectedItem.title}
              className="border rounded p-2 w-full mb-2"
            />
            <textarea
              defaultValue={selectedItem.description}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              defaultValue={selectedItem.owner}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              type="date"
              defaultValue={selectedItem.dueDate}
              className="border rounded p-2 w-full mb-2"
            />
            <select
              className="border rounded p-2 w-full mb-2"
              defaultValue={selectedItem.priority}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Save Task
            </button>
          </form>
        </Modal>
      )}

      {isModalOpen.editTicket && selectedItem && (
        <Modal isOpen={isModalOpen.editTicket} onClose={() => closeModal('editTicket')}>
          <h2>Edit Ticket</h2>
          <form>
            <input
              defaultValue={selectedItem.title}
              className="border rounded p-2 w-full mb-2"
            />
            <textarea
              defaultValue={selectedItem.description}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              defaultValue={selectedItem.owner}
              className="border rounded p-2 w-full mb-2"
            />
            <input
              type="date"
              defaultValue={selectedItem.dueDate}
              className="border rounded p-2 w-full mb-2"
            />
            <select
              className="border rounded p-2 w-full mb-2"
              defaultValue={selectedItem.priority}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Save Ticket
            </button>
          </form>
        </Modal>
      )}

      <Header openCreateTicketModal={() => openModal('createTicket')} openCreateTaskModal={() => openModal('createTask')} />
      {data.tickets.map((ticket) => (
        <KanbanRow
          key={ticket.id}
          ticketIndex={ticket.id}
          ticket={ticket}
          openEditTaskModal={() => openModal('editTask', ticket)}
          openEditTicketModal={() => openModal('editTicket', ticket)}
          data={data}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
