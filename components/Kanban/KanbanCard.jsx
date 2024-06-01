import React from "react";
import styles from "./scroll.module.css";
import TicketCard from "./Ticket/TicketCard";
import TaskCard from "./Task/TaskCard";


const KanbanCard = ({ isTicket, task, index, openEditModal }) => {
  const handleClick = () => {
    openEditModal(task); // Open the edit modal and pass the selected task
  };

  return (
    <>
      {isTicket ? (
          <TicketCard ticket={task} index={index} openEditModal={openEditModal} />
        ) : (
          <TaskCard task={task} index={index} openEditModal={openEditModal} />
      )}
    </>
      
  );
};

export default KanbanCard;