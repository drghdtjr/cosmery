import React, { useState } from "react";
import "./promotion.css";
import Product1 from "./Product1";
import { productData } from "../data/productData.js";

const Promotion = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="promotionWrap">
      <div className="promotionImage">
        <img src={data.image} alt="프로모션 상품" />
        <div className="promotionImageOverlay"></div>
      </div>
      <div className="promotionDetail">
        <div className="detailTitle">
          <span>{data.subTitle}</span>
          <span>{data.title}</span>
        </div>
        <button onClick={() => setIsOpen(true)}>더보기</button>
      </div>
      {isOpen && (
        <div className="promotionModal">
          <div className="promotionModalContent">
            <div className="promotionModalContentHeader">
              <h2 style={{ fontSize: "24px" }}>프로모션 상품</h2>
                <button
                  className={styles.promotionModalClose}
                  onClick={() => setIsOpen(false)}
                >
                  &times;
                </button>
            </div>
            <div className="promotionModalContentInner">
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
