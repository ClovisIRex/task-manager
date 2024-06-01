import React from 'react';
import KanbanCard from './KanbanCard';
import { Droppable } from 'react-beautiful-dnd';
import styles from "./scroll.module.css";

const KanbanColumn = ({ title, color, tasks, id ,openEditModal}) => {
  return (
    <div className={` ${styles.column} p-4 rounded ${color} flex flex-wrap`}>
      <h2 className="text-xl font-bold mb-4 w-full">{title}</h2>
      <div className="space-y-4 w-full">
        {tasks.map((task, index) => (
          index % 2 === 0 && (
            <div className="flex w-full" key={index}>
              <div className="w-1/2 pr-2">
                <KanbanCard key={index} index={index} task={task} openEditModal={openEditModal} />
              </div>
              {tasks[index + 1] && 
                <div className="w-1/2 pl-2">
                  <KanbanCard key={index + 1} index={index + 1} task={tasks[index + 1]} openEditModal={openEditModal} />
                </div>
              }
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
