import React from "react";
import styles from './CouponBox.module.css'
const CouponBox = () => {
  return (
    <div className={styles.couponRow}>
      <select name="useCoupon" id="useCoupon" className={styles.couponSelect}>
        <option value="">사용 가능한 쿠폰이 2장 있습니다.</option>
        <option value="coupon1">[5,000원 할인] 신규 가입 쿠폰</option>
        <option value="coupon2">[10% 할인] 생일 축하 쿠폰</option>
      </select>

      <span className={styles.discountAmount}>-3,000원</span>
    </div>
  );
};

export default CouponBox;
