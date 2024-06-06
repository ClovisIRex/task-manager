import React from 'react';
import Modal from '../Modals/Modal';

const EditTicketModal = ({ isOpen, onClose, ticket, onSubmit, onDelete }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <h2>Edit Ticket</h2>
    <form onSubmit={onSubmit}>
      <input defaultValue={ticket.title} className="border rounded p-2 w-full mb-2" />
      <input defaultValue={ticket.owner} className="border rounded p-2 w-full mb-2" />
      <input type="date" defaultValue={ticket.dueDate} className="border rounded p-2 w-full mb-2" />
      <select className="border rounded p-2 w-full mb-2" defaultValue={ticket.priority}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
        Save Ticket
      </button>
      <button type="button" onClick={() => onDelete(ticket.id)} className="bg-red-500 text-white px-4 py-2 rounded">
        Delete Ticket
      </button>
    </form>
  </Modal>
);

export default EditTicketModal;
