import React from "react";
import "./itemCounter.css";

const ItemCounter = ({ quantity, onChangeQuantity }) => {
  return (
    // 수량 선택
    <div className="itemCounter">
      <button className="counterBtn" type="button" onClick={() => onChangeQuantity(Math.max(quantity - 1, 1))}>
        <img src="/minus.svg" alt="minus" />
      </button>
      <span className="itemQuantity">{quantity}</span>
      <button className="counterBtn" type="button" onClick={() => onChangeQuantity(Math.min(quantity + 1, 10))}>
        <img src="/plus.svg" alt="plus" />
      </button>
    </div>
  );
};

export default ItemCounter;
