import React from 'react';
import KanbanCard from './KanbanCard';
import { Droppable } from 'react-beautiful-dnd';
import styles from "./scroll.module.css";

const KanbanColumn = ({ title, color, tasks, id, ticketId, openEditModal }) => {
  const isSingleCardLayout = id === 0;
  return (
    <div className={` ${styles.column} p-4 rounded ${color}`}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className={isSingleCardLayout ? "grid grid-cols-1 gap-4" : "grid grid-cols-3 gap-4"}>

      {isSingleCardLayout ? (
          (
            <KanbanCard isTicket={true} key={ticketId} task={tasks[0]} openEditModal={openEditModal} />
          )
        ) : (
          tasks.map((task, index) => (
            <KanbanCard isTicket={false} key={index} index={index} task={task} openEditModal={openEditModal} />
          ))
      )}

      </div>
    </div>
  );
};

export default KanbanColumn;
