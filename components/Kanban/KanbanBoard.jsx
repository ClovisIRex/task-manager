import React, { useState } from 'react';
import Header from './Header';
import KanbanRow from './KanbanRow';
import { mockTasks, mockTickets } from '@/mock/mockTasks';
import CreateTaskModal from '../Modals/CreateTaskModal';
import CreateTicketModal from '../Modals/CreateTicketModal';
import EditTaskModal from '../Modals/EditTaskModal';
import EditTicketModal from '../Modals/EditTicketModal';

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
      <CreateTaskModal
        isOpen={isModalOpen.createTask}
        onClose={() => closeModal('createTask')}
        onSubmit={handleCreateTask}
        tickets={data.tickets}
      />

      <CreateTicketModal
        isOpen={isModalOpen.createTicket}
        onClose={() => closeModal('createTicket')}
        onSubmit={handleCreateTicket}
      />

      {selectedItem && (
        <>
          <EditTaskModal
            isOpen={isModalOpen.editTask}
            onClose={() => closeModal('editTask')}
            task={selectedItem}
          />

          <EditTicketModal
            isOpen={isModalOpen.editTicket}
            onClose={() => closeModal('editTicket')}
            ticket={selectedItem}
          />
        </>
      )}

      <Header
        openCreateTaskModal={() => openModal('createTask')}
        openCreateTicketModal={() => openModal('createTicket')}
      />

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
