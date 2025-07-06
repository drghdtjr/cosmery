import React from "react";
import styles from "./OrderSummary.module.css";

const OrderSummary = ({
  totalPrice,
  totalDiscount,
  shippingFee,
}) => {
  const finalAmount = totalPrice - totalDiscount + shippingFee;
  return (
    <div className={styles.orderSummWrapper}>
      <div className={styles.orderSummTop}>
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
      <div className={styles.orderSummBottom}>
        <button
          type="button"
          className={styles.summButton2}
        >
          결제하기
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
