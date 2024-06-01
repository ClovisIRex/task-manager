import React from 'react';
import styles from "../scroll.module.css";


const TicketCard = ({ticket, index, openEditModal }) => {
  const handleClick = () => {
    openEditModal(ticket); 
  };

  return (
    <div className={`p-4 bg-white rounded-lg shadow cursor-pointer ${styles.card}`} onClick={handleClick}>
        <h3 className="font-bold">{}</h3>
        <div className={styles['card-content']}>
        <p>Owner: {}</p>
        <p>Due: {}</p>
        <p>Priority: {}</p>
        </div>            
    </div>
  );
};

export default TicketCard;
