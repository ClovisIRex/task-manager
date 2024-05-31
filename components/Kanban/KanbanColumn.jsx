import React from 'react';
import KanbanCard from './KanbanCard';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import styles from "./scroll.module.css";

const TaskList = styled.div`
`;

const KanbanColumn = ({ title, color, tasks, id }) => {
  return (
    <div className={` ${styles.column} p-4 rounded ${color}`}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">

        <Droppable droppableId={id}>

          {(provided, snapshot) => {
            // <TaskList>
            //   ref={provided.innerRef}
            //   {...provided.droppableProps}
            //   isDraggingOver={snapshot.isDraggingOver}

            //   {/**Provide your tasks */}
            //   {provided.placeholder}
            // </TaskList>
          }
          
          }

        </Droppable>
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
      </div>
    </div>
  );
};

export default KanbanColumn;
