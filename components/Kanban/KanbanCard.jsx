import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const KanbanCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-4 bg-white rounded shadow cursor-pointer ${snapshot.isDragging ? 'bg-blue-200' : ''}`}
        >
          <h3 className="font-bold">{task.title}</h3>
          <p>{task.description}</p>
          <p>Owner: {task.owner}</p>
          <p>Due: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanCard;
