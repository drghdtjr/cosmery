import React from "react";
import Promotion from "../products/Promotion";
import "./promotionList.css";
import { promotionData } from "../data/productData.js";

const PromotionList = () => {
  return (
    <div className="promotionListWrap">
      <h2>이 달의 기획전</h2>
      <div className="promotionList">
        {promotionData.map((item, index) => (
          <Promotion key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PromotionList;
