import React from "react";
import './ad.css'
import { useState } from "react";

const Ad = ({ clickCart, clickWish, data }) => {
  const [mouseover, setMouseover] = useState(false);
  return (
    <div className="ad-container">
      <a href="#" className="ad-wrapper">
        <div className="ad-detail-wrapper">
          <div
            className="ad-photo"
            onMouseEnter={() => setMouseover(true)}
            onMouseLeave={() => setMouseover(false)}
          >
            <img src={data.image} alt="product1" />
            <div className={`over ${mouseover ? "active" : ""}`}>
              <ul>
                <li>
                  <button type="button" onClick={clickCart}>
                    <img src="/bag.svg" alt="장바구니" />
                  </button>
                </li>
                <li>
                  <button type="button" onClick={clickWish}>
                    <img src="/favorite.svg" alt="찜하기" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="ad-detail">
            <p>{data.name}</p>
            <div>
              <span>{data.discountedPrice}</span>원
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Ad;
