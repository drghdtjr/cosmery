import React, { useState } from "react";
import styles from "./promotion.module.css";
import Product1 from "./Product1";
import { productData } from "./productData";

const Promotion = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.promotionWrap}>
      <div className={styles.promotionImage}>
        <img src={data.image} alt="프로모션 상품" />
        <div className={styles.promotionImageOverlay}></div>
      </div>
      <div className={styles.promotionDetail}>
        <div className={styles.detailTitle}>
          <span>{data.subTitle}</span>
          <span>{data.title}</span>
        </div>
        <button onClick={() => setIsOpen(true)}>더보기</button>
      </div>
      {isOpen && (
        <div className={styles.promotionModal}>
          <div className={styles.promotionModalContent}>
            <div className={styles.promotionModalContentHeader}>
              <h2 style={{ fontSize: "24px" }}>프로모션 상품</h2>
                <button
                  className={styles.promotionModalClose}
                  onClick={() => setIsOpen(false)}
                >
                  &times;
                </button>
            </div>
            <div className={styles.promotionModalContentInner}>
            {productData.map((product) => (
                <Product1 key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Promotion;
