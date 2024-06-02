import React from 'react';

const EditTaskModal = ({ task, onClose }) => {
  // Logic for editing task
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {/* Edit task form */}
        <h2>Edit Task</h2>
        <form>
          {/* Form inputs for editing task */}
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;