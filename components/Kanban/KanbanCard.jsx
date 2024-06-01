import React from 'react';

const KanbanCard = ({ task, index, openEditModal }) => {
  const handleClick = () => {
    openEditModal(task); // Open the edit modal and pass the selected task
  };

  return (
    <div className="p-4 bg-white rounded shadow cursor-pointer" onClick={handleClick}>
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p>Owner: {task.owner}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
    </div>
  );
};

export default KanbanCard;
