import React from 'react';
import '../styles/modal.css'

const Modal = ({children, isOpen, onClose, quiz}) => {
    return isOpen ? (
        <div className={quiz ? "modal-overlay" : 'quiz-overlay'}  onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      ) : null;
}

export default Modal
