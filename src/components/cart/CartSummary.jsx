import React from "react";
import styles from "./CartSummary.module.css";

const CartSummary = ({
  totalPrice,
  totalDiscount,
  shippingFee,
  selectedItems,
  onSelectPurchase,
  onAllPurchase,
}) => {
  const finalAmount = totalPrice - totalDiscount + shippingFee;
  return (
    <div className={styles.cartSummWrapper}>
      <div className={styles.cartSummTop}>
        <h3 className={styles.summTitle}>결제 정보</h3>
        <div className={styles.summDetail}>
          <div className={styles.detailAmount}>
            <span className={styles.detailText}>주문금액</span>
            <span className={styles.detailPrice}>{totalPrice}원</span>
          </div>
          <div className={styles.detailAmount}>
            <span className={styles.detailText}>할인금액</span>
            <span className={styles.detailPrice}>-{totalDiscount}원</span>
          </div>
          <div className={styles.detailAmount}>
            <span className={styles.detailText}>배송비</span>
            <span className={styles.detailPrice}>{shippingFee}원</span>
          </div>
        </div>
        <div className={styles.summBottom}>
          <h3 className={styles.summTitle}>결제 금액</h3>
          <span className={styles.totalAmount}>{finalAmount}원</span>
        </div>
      </div>
      <div className={styles.cartSummBottom}>
        <button
          type="button"
          className={styles.summButton1}
          onClick={onSelectPurchase}
        >
          선택 구매({selectedItems})
        </button>
        <button
          type="button"
          className={styles.summButton2}
          onClick={onAllPurchase}
        >
          전체 구매
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
