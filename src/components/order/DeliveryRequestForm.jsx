import React from "react";
import styles from "./DeliveryRequestForm.module.css";

const DeliveryRequestForm = () => {
  return (
    <div className={styles.deliveryMemo}>
      <select
        id="deliveryRequest"
        name="deliveryRequest"
        className={styles.select}
      >
        <option value="">-- 선택해주세요 --</option>
        <option value="door">문 앞에 놓아주세요</option>
        <option value="security">경비실에 맡겨주세요</option>
        <option value="call">배송 전에 전화주세요</option>
        <option value="noBell">벨 누르지 마세요</option>
        <option value="etc">기타 요청사항은 아래에 작성</option>
      </select>
    </div>
  );
};

export default DeliveryRequestForm;
