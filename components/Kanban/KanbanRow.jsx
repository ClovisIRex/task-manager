import React from 'react';
import KanbanColumn from './KanbanColumn';

const KanbanRow = ({ ticketIndex, ticket, openEditTaskModal,openEditTicketModal, data}) => {
  // Function to retrieve tasks for a specific ticket
  const getTasksForTicket = (ticket) => {
    let tasksIds = ticket.tasks
    return (data.tasks).filter(task => tasksIds.includes(task.id));
  };

  let tasksForTicket = getTasksForTicket(ticket);


  return (
    <div className="grid grid-cols-5 gap-4 mt-4" key={ticketIndex}>
      {(data.columns).map((column) => (
        <KanbanColumn
          key={`${ticketIndex}-${column}`}
          title={column}
          tasks={tasksForTicket}
          color={data.colors[column]}
          id={data.ids[column]}
          ticketId={ticket.id}
          ticket={ticket}
          openEditTaskModal={openEditTaskModal}
          openEditTicketModal={openEditTicketModal}
        />
      ))}
    </div>
  );
};

export default KanbanRow;
