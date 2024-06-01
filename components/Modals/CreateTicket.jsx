import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 300); // Match the duration of the animation
    }
  }, [isOpen]);

  return (
    <>
      {showModal && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'}`}></div>
          <div className={`bg-white p-4 rounded shadow-lg relative z-10 transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-75'}`}>
            <button 
              onClick={onClose} 
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 cursor-pointer"
            >
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
