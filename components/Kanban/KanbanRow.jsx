import React from 'react';
import KanbanColumn from './KanbanColumn';
import {getTasksForTicket} from './Utils'
const KanbanRow = ({ ticketIndex, ticket, openEditTaskModal, openEditTicketModal, data }) => {
 
  let tasksForTicket = getTasksForTicket(data, ticket);

  return (
    <div className="grid grid-cols-5 gap-4 mt-4" key={ticketIndex}>
      {(data.columns).map((column) => (
        <KanbanColumn
          key={`${ticketIndex}-${column}`}
          title={column}
          tasks={tasksForTicket}
          color={data.colors[column]}
          id={data.ids[column]}
          ticket={ticket}
          openEditTaskModal={openEditTaskModal}
          openEditTicketModal={openEditTicketModal}
        />
      ))}
    </div>
  );
};

export default KanbanRow;
