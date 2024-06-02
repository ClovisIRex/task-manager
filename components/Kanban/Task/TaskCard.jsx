import React from 'react';
import styles from "../scroll.module.css";


const TaskCard = ({task, index, openEditTaskModal }) => {
  const handleClick = () => {
    openEditTaskModal(task); // Open the edit modal and pass the selected task
  };

  return (
    <div className={`p-4 bg-white rounded-lg shadow cursor-pointer ${styles.card}`} onClick={handleClick}>
        <h3 className="font-bold">{task.title}</h3>
        <div className={styles['card-content']}>
        <p>Owner: {task.owner}</p>
        <p>Due: {task.dueDate}</p>
        <p>Priority: {task.priority}</p>
        </div>
    </div>
  );
};

export default TaskCard;
