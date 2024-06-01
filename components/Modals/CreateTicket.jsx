import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 rounded shadow-lg relative z-10">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 cursor-pointer"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
