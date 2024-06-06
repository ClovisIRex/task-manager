import React from 'react';
import Modal from '../Modals/Modal';

const CreateTicketModal = ({ isOpen, onClose, onSubmit }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <h2>Create Ticket</h2>
    <form onSubmit={onSubmit}>
      <input placeholder="Title" className="border rounded p-2 w-full mb-2" />
      <input placeholder="Owner" className="border rounded p-2 w-full mb-2" />
      <input type="date" className="border rounded p-2 w-full mb-2" />
      <select className="border rounded p-2 w-full mb-2">
        <option value="" disabled selected>Select Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Ticket
      </button>
    </form>
  </Modal>
);

export default CreateTicketModal;
