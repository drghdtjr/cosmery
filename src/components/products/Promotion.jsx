import React from "react";
import './promotion.css'

const Promotion = () => {
  return (
    <div className="promotion-wrap">
      <img src="../../src/assets/product1.png" alt="프로모션 상품" />
      <div className="promotion-detail">
        <span>
          하루종일 촉촉하게,
          <br />
          보습 시너지 세트
        </span>
        <a href="#">더보기</a>
      </div>
    </div>
  );
};

export default Promotion;
