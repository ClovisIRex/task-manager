import React, { useState } from 'react';
import KanbanContext from './KanbanContext';
import { mockTasks, mockTickets } from '@/mock/mockTasks';

const getTasksByStatus = (status, tasks) => {
  return Object.values(tasks).filter(task => task.status === status);
};

const getTicketsById = (id, tickets) => {
  return Object.values(tickets).filter(ticket => ticket.id === id);
};

const KanbanProvider = ({ children }) => {
  const tasks = mockTasks;
  const tickets = mockTickets;

  const [kanbanData, setKanbanData] = useState({
    tasks: tasks,
    columns: {
      'Ticket': getTicketsById('Tickets', tickets),
      'Unassigned': getTasksByStatus('Unassigned', tasks),
      'To Do': getTasksByStatus('To Do', tasks),
      'In Progress': getTasksByStatus('In Progress', tasks),
      'Done': getTasksByStatus('Done', tasks)
    },
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
    selectedTask: null,
    isEditModalOpen: false
  });

  return (
    <KanbanContext.Provider value={{ kanbanData, setKanbanData }}>
      {children}
    </KanbanContext.Provider>
  );
};

export default KanbanProvider;
