import React from "react";
import "./product2Text.css";

const Product2Text = ({number, text, isActive, onClick}) => {
  return (
    <div className={`text-wrap ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className="number">
        <span>{number}</span>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Product2Text;
