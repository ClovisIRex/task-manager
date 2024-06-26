import React from 'react';
import styles from "../scroll.module.css";

const TicketCard = ({ ticket, openEditTicketModal }) => {
  const { title, owner, dueDate, priority } = ticket;

  const handleClick = () => {
    openEditTicketModal(ticket);
  };

  return (
    <div className={`p-4 bg-white rounded-lg shadow cursor-pointer ${styles.card}`} onClick={handleClick}>
      <h3 className="font-bold">{title}</h3>
      <div className={styles['card-content ticket-content']}>
        <p>Owner: {owner}</p>
        <p>Due: {dueDate}</p>
        <p>Priority: {priority}</p>
      </div>
    </div>
  );
};

export default TicketCard;
