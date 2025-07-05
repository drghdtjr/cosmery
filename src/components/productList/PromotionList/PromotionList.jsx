import React from "react";
import Promotion from "../../products/Promotion";
import styles from "./PromotionList.module.css";
import { promotionData } from "../../products/productData";

const PromotionList = () => {
  return (
    <div className={styles.promotionListWrap}>
      <h2 style={{ fontSize: "28px", fontWeight: "400" }}>이 달의 기획전</h2>
      <div className={styles.promotionList}>
        {promotionData.map((item, index) => (
          <Promotion key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PromotionList;
