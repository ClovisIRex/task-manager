import React from 'react';
import KanbanColumn from './KanbanColumn';

const KanbanRow = ({ ticketIndex, ticket, openEditModal, data }) => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-4" key={ticketIndex}>
      {Object.keys(data.columns).map((column) => (
        <KanbanColumn
          key={`${ticketIndex}-${column}`}
          title={column}
          tasks={data.columns[column]}
          color={data.colors[column]}
          id={data.ids[column]}
          ticketId={ticket.id}
          openEditModal={openEditModal} // Pass the function to the KanbanColumn
        />
      ))}
    </div>
  );
};

export default KanbanRow;
