import React from 'react';
import KanbanCard from './KanbanCard';
import styles from "./scroll.module.css";

const KanbanColumn = ({ title,tasks, color, id, ticketId,ticket, openEditTaskModal,openEditTicketModal }) => {
  const isSingleCardLayout = id === 0;

  const getTasksForColumn = () => {
    return Object.values(tasks).filter(task => task.status === title);
  };

  let tasksForColumn = getTasksForColumn(ticket);

  return (
    <div className={` ${styles.column} p-4 rounded ${color}`}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className={isSingleCardLayout ? "grid grid-cols-1 gap-4" : "grid grid-cols-3 gap-4"}>

      {isSingleCardLayout ? (
          (
            <KanbanCard isTicket={true} key={ticketId} task={ticket} openEditTaskModal={openEditTicketModal} />
          )
        ) : (
          tasksForColumn.map((task, index) => (
            <KanbanCard isTicket={false} key={index} index={index} task={task} openEditTaskModal={openEditTaskModal} />
          ))
      )}

      </div>
    </div>
  );
};

export default KanbanColumn;
