import React, { useState } from 'react';
import KanbanContext from './KanbanContext';
import { mockTasks, mockTickets } from '@/mock/mockTasks';

const KanbanProvider = ({ children }) => {
  const [kanbanData, setKanbanData] = useState({
    tasks: mockTasks,
    tickets: mockTickets,
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
