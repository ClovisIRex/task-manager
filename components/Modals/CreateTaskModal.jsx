import React from 'react';
import Modal from '../Modals/Modal';

const CreateTaskModal = ({ isOpen, onClose, onSubmit, tickets }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <h2>Create Task</h2>
    <form onSubmit={onSubmit}>
      <input placeholder="Title" className="border rounded p-2 w-full mb-2" />
      <textarea placeholder="Description" className="border rounded p-2 w-full mb-2" />
      <input placeholder="Owner" className="border rounded p-2 w-full mb-2" />
      <input type="date" className="border rounded p-2 w-full mb-2" />
      <select className="border rounded p-2 w-full mb-2">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>
      <select className="border rounded p-2 w-full mb-2" name="ticket">
        <option value="">Choose Ticket</option>
        {tickets.map((ticket) => (
          <option key={ticket.id} value={ticket.id}>
            {ticket.title}
          </option>
        ))}
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Task
      </button>
    </form>
  </Modal>
);

export default CreateTaskModal;
