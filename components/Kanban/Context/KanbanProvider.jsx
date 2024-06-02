import React, { useState } from 'react';
import KanbanContext from './KanbanContext';

const KanbanProvider = ({ children }) => {
  const [kanbanData, setKanbanData] = useState(/* Initial state */);

  return (
    <KanbanContext.Provider value={{ kanbanData, setKanbanData }}>
      {children}
    </KanbanContext.Provider>
  );
};

export default KanbanProvider;
