import React, { useState, useEffect } from 'react';
import Header from './Header';
import KanbanRow from './KanbanRow';
import { mockTasks, mockTickets } from '@/mock/mockTasks';
import CreateTaskModal from '../Modals/CreateTaskModal';
import CreateTicketModal from '../Modals/CreateTicketModal';
import EditTaskModal from '../Modals/EditTaskModal';
import EditTicketModal from '../Modals/EditTicketModal';
import { getTasksForTicket } from './Utils';


const KanbanBoard = () => {

  
  const [loading, setLoading] = useState(true); // Add loading state

  const updateTickets = (newTickets) => {
    setData(prevData => ({
      ...prevData,
      tickets: newTickets
    }));
  };


  useEffect(() => {
    async function fetchTickets() {
      try {
        const response = await fetch('/api/tickets');
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        const ticketsData = await response.json();
        updateTickets(ticketsData);
        setLoading(false); // Update loading state when data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Update loading state when data is fetched
      }
    }
    fetchTickets();
  }, []);



  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({
    editTask: false,
    editTicket: false,
    createTask: false,
    createTicket: false,
  });

  const tasks = mockTasks;

  const [data, setData] = useState({
    tasks,
    tickets : [],
    columns: ['Ticket', 'Unassigned', 'To Do', 'In Progress', 'Done'],
    colors: {
      Ticket: 'bg-red-100',
      Unassigned: 'bg-purple-100',
      'To Do': 'bg-blue-100',
      'In Progress': 'bg-yellow-100',
      Done: 'bg-green-100',
    },
    ids: {
      Ticket: 0,
      Unassigned: 1,
      'To Do': 2,
      'In Progress': 3,
      Done: 4,
    },
  });

  const openModal = (type, item = null) => {
    if (type === 'editTask' || type === 'createTask') {
      setSelectedTask(item);
    } else if (type === 'editTicket' || type === 'createTicket') {
      setSelectedTicket(item);
    }
    setIsModalOpen((prevState) => ({ ...prevState, [type]: true }));
  };

  const closeModal = (type) => {
    setIsModalOpen((prevState) => ({ ...prevState, [type]: false }));
    if (type === 'editTask' || type === 'createTask') {
      setSelectedTask(null);
    } else if (type === 'editTicket' || type === 'createTicket') {
      setSelectedTicket(null);
    }
  };

  const createTask = (newTask, ticketId) => {
    setData((prevData,) => {
      const updatedTasks = [...prevData.tasks, newTask];
      const updatedTickets = prevData.tickets.map((ticket) => {
        if (ticket.id === ticketId) {
          let taskForTickets = getTasksForTicket(prevData, ticket);
          if (
            taskForTickets.filter((task) => task.status === 'Unassigned').length === 3) {
            alert("Can't create more than 3 unassigned tasks");
          } else {
            return {
              ...ticket,
              tasks: [...ticket.tasks, newTask.id]
            };
          }
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
    closeModal('editTask');
  };

  const deleteTicket = (ticketId) => {
    setData((prevData) => ({
      ...prevData,
      tickets: prevData.tickets.filter((ticket) => ticket.id !== ticketId)
    }));
    closeModal('editTicket');
  };

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    let newTask = {
      id: generateUniqueId(),
      title: e.target.elements[0].value,
      description: e.target.elements[1].value,
      owner: e.target.elements[2].value,
      dueDate: e.target.elements[3].value,
      priority: e.target.elements[4].value,
      status: 'Unassigned'
    };

    let isEmptyFields = !Object.values(newTask).every(
      (x) => x !== null && x !== ''
    );

    if (isEmptyFields) {
      alert('Please fill out all the fields');
    } else {
      const ticketId = e.target.elements[5].value;
      createTask(newTask, ticketId);
    }
  };

  const handleEditTask = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...selectedTask,
      title: e.target.elements[0].value,
      description: e.target.elements[1].value,
      owner: e.target.elements[2].value,
      dueDate: e.target.elements[3].value,
      priority: e.target.elements[4].value,
      status: selectedTask.status,
    };

    setData((prevData) => ({
      ...prevData,
      tasks: prevData.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
    }));

    closeModal('editTask');
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    const newTicket = {
      id: generateUniqueId(),
      title: e.target.elements[0].value,
      owner: e.target.elements[1].value,
      dueDate: e.target.elements[2].value,
      priority: e.target.elements[3].value,
    };

    let isEmptyFields = !Object.values(newTicket).every(
      (x) => x !== null && x !== ''
    );

    if (isEmptyFields) {
      alert('Please fill out all the fields');
    } else {
      newTicket.tasks = [];
      createTicket(newTicket);
    }
  };

  const handleEditTicket = (e) => {
    e.preventDefault();
    const updatedTicket = {
      ...selectedTicket,
      title: e.target.elements[0].value,
      owner: e.target.elements[1].value,
      dueDate: e.target.elements[2].value,
      priority: e.target.elements[3].value,
    };

    setData((prevData) => ({
      ...prevData,
      tickets: prevData.tickets.map((ticket) =>
        ticket.id === updatedTicket.id ? updatedTicket : ticket
      ),
    }));

    closeModal('editTicket');
  };

  // // Filtering function based on date range
  // const filterTicketsByDate = () => {
  //   const filteredTickets = data.tickets.filter(ticket => {
  //     const ticketDate = new Date(ticket.dueDate);
  //     return ticketDate >= new Date(startDate) && ticketDate <= new Date(endDate);
  //   });
  //   return filteredTickets;
  // };

  // const filteredTickets = filterTicketsByDate();

  //TODO implemet datefiler with context


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

      {selectedTask && (
        <EditTaskModal
          isOpen={isModalOpen.editTask}
          onClose={() => closeModal('editTask')}
          task={selectedTask}
          onSubmit={handleEditTask}
          onDelete={deleteTask}
        />
      )}

      {selectedTicket && (
        <EditTicketModal
          isOpen={isModalOpen.editTicket}
          onClose={() => closeModal('editTicket')}
          ticket={selectedTicket}
          onSubmit={handleEditTicket}
          onDelete={deleteTicket}
        />
      )}

      <Header
        openCreateTaskModal={() => openModal('createTask')}
        openCreateTicketModal={() => openModal('createTicket')}
      />

      {loading ? ( // Render loading spinner while loading is true
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) :
      (data.tickets.length === 0 ? (
        <div className="justify-center items-center bg-gray-200 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center text-gray-500 my-8">Create your first ticket</div>
          </div>
        </div>
      ) : (
        data.tickets.map((ticket) => (
          <KanbanRow
            key={ticket.id}
            ticketIndex={ticket.id}
            ticket={ticket}
            openEditTaskModal={(task) => openModal('editTask', task)}
            openEditTicketModal={() => openModal('editTicket', ticket)}
            data={data}
          />
        ))
      ))}
    </div>
  );
};

export default KanbanBoard;
