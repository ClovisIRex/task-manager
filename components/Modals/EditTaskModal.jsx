import React from 'react';
import Modal from '../Modals/Modal';

const EditTaskModal = ({ isOpen, onClose, task }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <h2>Edit Task</h2>
    <form>
      <input defaultValue={task.title} className="border rounded p-2 w-full mb-2" />
      <textarea defaultValue={task.description} className="border rounded p-2 w-full mb-2" />
      <input defaultValue={task.owner} className="border rounded p-2 w-full mb-2" />
      <input type="date" defaultValue={task.dueDate} className="border rounded p-2 w-full mb-2" />
      <select className="border rounded p-2 w-full mb-2" defaultValue={task.priority}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
        Save Task
      </button>
    </form>
  </Modal>
);

export default EditTaskModal;
