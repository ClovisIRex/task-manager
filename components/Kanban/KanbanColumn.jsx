import React from 'react';
import KanbanCard from './KanbanCard';
import { Droppable } from 'react-beautiful-dnd';
import styles from "./scroll.module.css";


const KanbanColumn = ({ title, color, tasks, id }) => {
  return (
    <div className={` ${styles.column} p-4 rounded ${color}`}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.map((task, index) => (
           <KanbanCard key={index} index={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;