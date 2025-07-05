import React from "react";
import styles from "./ItemCounter.module.css";

const ItemCounter = ({ quantity, onChangeQuantity }) => {
  return (
    // 수량 선택
    <div className={styles.itemCounter}>
      <button className={styles.counterBtn} type="button" onClick={() => onChangeQuantity(Math.max(quantity - 1, 1))}>
        <img src="../../../src/assets/minus.svg" alt="minus" />
      </button>
      <span className={styles.itemQuantity}>{quantity}</span>
      <button className={styles.counterBtn} type="button" onClick={() => onChangeQuantity(Math.min(quantity + 1, 10))}>
        <img src="../../../src/assets/plus.svg" alt="plus" />
      </button>
    </div>
  );
};

export default ItemCounter;
