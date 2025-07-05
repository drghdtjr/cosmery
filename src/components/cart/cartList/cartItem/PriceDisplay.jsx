import React from "react";
import styles from './PriceDisplay.module.css'

const PriceDisplay = ({ originalPrice, salePrice, quantity }) => {
  const totalOriginal = originalPrice * quantity
  const totalSale = salePrice * quantity;
  return (
    <div className={styles.itemPrice}>
      <span className={styles.originalPrice}>{totalOriginal}</span>
      <strong className={styles.salePrice}>{totalSale}</strong>
    </div>
  );
};

export default PriceDisplay;
