import React, { useState } from "react";
import "./product2.css";
import { useNavigate } from "react-router-dom";

const Product2 = ({ clickCart, clickWish, data }) => {
  const [mouseover, setMouseover] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product-detail`, { state: { data } });
  };

  return (
    <div
      className="product2-container"
      onMouseEnter={() => setMouseover(true)}
      onMouseLeave={() => setMouseover(false)}
    >
      <a
        href={`/product-detail`}
        className="product2-wrapper"
        onClick={handleClick}
      >
        <div className="product2-detail-wrapper">
          <div className="product2-photo">
            <img src={data.image} alt={data.name} />
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
          <div className="product2-detail">
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

export default Product2;
