import React from 'react'
import styles from './Modal.module.css'

const Modal = ({onClose, children}) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 style={{fontSize: '22px'}}>신규 배송지</h2>
            <button className={styles.closeButton} onClick={onClose}>
                &times;
            </button>
            <div className={styles.content}>{children}</div>
        </div>
    </div>
  )
}

export default Modal