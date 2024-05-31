import React, { useState } from 'react';
import Header from './Header';
import KanbanColumn from './KanbanColumn';
import {DragDropContext} from "react-beautiful-dnd"


const KanbanBoard = () => {

  const [completed, setCompleted] = useState([])
  const [incomplete, setInComplete] = useState([])




  return (

    <div className="p-4">
      <Header />

      <DragDropContext>

        <div className="grid grid-cols-4 gap-4 mt-4">
          <KanbanColumn title="To Do" color="bg-blue-100" id={"1"} />
          <KanbanColumn title="In Progress" color="bg-yellow-100" id={"2"}/>
          <KanbanColumn title="Done" color="bg-green-100" id={"3"}/>
        </div>

      </DragDropContext>
      
    </div>
  );
};

export default KanbanBoard;
