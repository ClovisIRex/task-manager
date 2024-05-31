import React from 'react';
import KanbanCard from './KanbanCard';

const KanbanColumn = ({ title, color }) => {
  return (
    <div className={`p-4 rounded ${color}`}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        <KanbanCard />
        <KanbanCard />
      </div>
    </div>
  );
};

export default KanbanColumn;
