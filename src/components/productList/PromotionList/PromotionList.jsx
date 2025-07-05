import React from "react";
import Promotion from "../../products/Promotion";
import styles from "./PromotionList.module.css";

const PromotionList = () => {
  return (
    <div className={styles.promotionListWrap}>
      <h2 style={{ fontSize: "28px", fontWeight: "400" }}>이 달의 기획전</h2>
      <div className={styles.promotionList}>
        <Promotion />
        <Promotion />
      </div>
    </div>
  );
};

export default PromotionList;
