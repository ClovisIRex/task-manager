import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300); // Match the duration of the animation
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    } else {
      document.removeEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isVisible && (
        <div className={`${styles['modal-container']} ${isOpen ? styles['opacity-100'] : styles['opacity-0']}`}>
          <div className={`${styles['modal-overlay']} ${isOpen ? styles['opacity-100'] : styles['opacity-0']}`} aria-hidden="true"></div>
          <div 
            className={`${styles['modal-content']} ${isOpen ? styles['scale-100'] : styles['scale-75']}`} 
            role="dialog"
            aria-modal="true"
          >
            <button 
              onClick={onClose} 
              className={styles['modal-close-button']}
              aria-label="Close modal"
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
