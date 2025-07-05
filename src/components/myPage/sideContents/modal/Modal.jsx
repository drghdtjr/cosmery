import React from 'react'
import styles from "./modal.module.css";
const Modal = ({title, content, onClose}) => {
  return (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
            <h2>{title}</h2>
            <p>{content}</p>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        </div>
    </div>
  )
}

export default Modal