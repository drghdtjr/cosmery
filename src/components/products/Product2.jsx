import React from 'react'
import './product2.css'
import { useState } from 'react';

const Product2 = ({ clickCart, clickWish, data }) => {
  const [mouseover, setMouseover] = useState(false);
  return (
    <div className="product2-container">
      <a href="#" className="product2-wrapper">
        <div className="product2-detail-wrapper">
          <div
            className="product2-photo"
            onMouseEnter={() => setMouseover(true)}
            onMouseLeave={() => setMouseover(false)}
          >
            <img src={data.image} alt="product2" />
          
          </div>
          <div className="product2-detail">
            <p>{data.name}</p>
            <div>
              <span>{data.discountedPrice}</span>원
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
}

export default Product2