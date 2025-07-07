import React from 'react'
import "./modal.css";
const Modal = ({title, content, onClose}) => {
  return (
    <div className="modal">
        <div className="modalContent">
            <h2>{title}</h2>
            <p>{content}</p>
        <button className="closeButton" onClick={onClose}>&times;</button>
        </div>
    </div>
  )
}

export default Modal