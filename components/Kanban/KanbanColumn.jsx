import React from 'react';
import KanbanCard from './KanbanCard';
import { Droppable } from 'react-beautiful-dnd';
import styles from "./scroll.module.css";

const KanbanColumn = ({ title, color, tasks, id }) => {
  return (
    <div className={` ${styles.column} p-4 rounded ${color}`}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`space-y-4 ${snapshot.isDraggingOver ? 'bg-blue-100' : ''}`}
          >
            {tasks.map((task, index) => (
              <KanbanCard key={task.id} index={index} task={task} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default KanbanColumn;
