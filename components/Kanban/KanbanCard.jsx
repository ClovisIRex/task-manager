import React from "react";
import styles from "./scroll.module.css";
import TicketCard from "./Ticket/TicketCard";
import TaskCard from "./Task/TaskCard";

const KanbanCard = ({ isTicket, task, index, openEditTaskModal, openEditTicketModal }) => {
  const handleClick = () => {
    openEditTaskModal(task); // Open the edit modal and pass the selected task
  };

  return (
    <>
      {isTicket ? (
        <TicketCard ticket={task} index={index} openEditTicketModal={openEditTicketModal} />
      ) : (
        <TaskCard task={task} index={index} openEditTaskModal={openEditTaskModal} />
      )}
    </>
  );
};

export default KanbanCard;
