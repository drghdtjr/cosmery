import React from "react";
import styles from './ActionButton.module.css'

const ActionButton = ({ onDelete }) => {
  return (
    <div className={styles.itemOption}>
      <button type="button" className={styles.option1}>
        바로구매
      </button>
      <button type="button" className={styles.option2} onClick={onDelete}>
        삭제
      </button>
    </div>
  );
};

export default ActionButton;
