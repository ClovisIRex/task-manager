import React from 'react';

const KanbanCard = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-bold">Title</h3>
      <p>Owner</p>
      <p>Status</p>
      <p>Due date</p>
    </div>
  );
};

export default KanbanCard;
