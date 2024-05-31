import React from 'react';

const KanbanCard = ({ task, index }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.owner}</p>
      <p>{task.status}</p>
      <p>{task.dueDate}</p>
    </div>
  );
};

export default KanbanCard;
