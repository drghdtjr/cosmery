import React from "react";
import './ad.css'
import { useState } from "react";

const Ad = ({ clickCart, clickWish }) => {
  const [mouseover, setMouseover] = useState(false);
  return (
    <div className="product3-container">
      <a href="#" className="product3-wrapper">
        <div className="product3-detail-wrapper">
          <div
            className="product3-photo"
            onMouseEnter={() => setMouseover(true)}
            onMouseLeave={() => setMouseover(false)}
          >
            <img src="../../src/assets/product1.png" alt="product1" />
            <div className={`over ${mouseover ? "active" : ""}`}>
              <ul>
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
          <div className="product3-detail">
            <p>시카 트러블 진정 크림</p>
            <div>
              <span>24,900</span>원
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Ad;
