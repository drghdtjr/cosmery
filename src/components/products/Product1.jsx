import React from "react";
import "./product1.css";
import { useState } from "react";

const Product1 = ({ clickCart, clickWish }) => {
  const [mouseover, setMouseover] = useState(false);

  return (
    <div className="product1-container">
      <a href="/product-detail" className="product1-wrapper">
        <div className="product1-detail-wrapper">
          <div
            className="photo"
            onMouseEnter={() => setMouseover(true)}
            onMouseLeave={() => setMouseover(false)}
          >
            <img src="../../src/assets/product1.png" alt="product1" />
          </div>
          <div className="product1-detail">
            <p>시카 트러블 진정 크림</p>
            <div>
              <span>24,900</span>원
            </div>
          </div>
        </div>
      </a>
      <div className={`over ${mouseover ? "active" : ""}`}>
        <ul onMouseEnter={() => setMouseover(true)} onMouseLeave={() => setMouseover(false)}>
          <li>
            <button type="button" onClick={clickCart}>
              <img src="../../src/assets/bag.svg" alt="장바구니" />
            </button>
          </li>
          <li>
            <button type="button" onClick={clickWish}>
              <img src="../../src/assets/favorite.svg" alt="찜하기" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product1;
