import React from 'react';
import styled from "styled-components";

const KanbanCard = ({ task, index }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p>Owner: {task.owner}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
    </div>
  );
};

export default KanbanCard;
