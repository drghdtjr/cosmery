import React from "react";
import "./product1.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Product1 = ({ clickCart, clickWish, data }) => {
  const [mouseover, setMouseover] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-detail`, { state: { data } });
  };

  return (
    <div
      className="product1-container"
      onMouseEnter={() => setMouseover(true)}
      onMouseLeave={() => setMouseover(false)}
    >
      <a
        href={`/product-detail`}
        className="product1-wrapper"
        onClick={handleClick}
      >
        <div className="product1-detail-wrapper">
          <div className="photo">
            <img src={data.image} alt="product1" />
            <div className={`over ${mouseover ? "active" : ""}`}>
              <ul
                onMouseEnter={() => setMouseover(true)}
                onMouseLeave={() => setMouseover(false)}
              >
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
          <div className="product1-detail">
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

export default Product1;
