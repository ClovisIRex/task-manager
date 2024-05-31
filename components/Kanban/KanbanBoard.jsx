import React from 'react';
import Header from './Header';
import KanbanColumn from './KanbanColumn';

const KanbanBoard = () => {
  return (
    <div className="p-4">
      <Header />
      <div className="grid grid-cols-4 gap-4 mt-4">
        <KanbanColumn title="ToDo" color="bg-blue-100" />
        <KanbanColumn title="In Progress" color="bg-yellow-100" />
        <KanbanColumn title="Done" color="bg-green-100" />
      </div>
    </div>
  );
};

export default KanbanBoard;
