import React from "react";
import "./priceDisplay.css"

const PriceDisplay = ({ originalPrice, salePrice, quantity }) => {
  const totalOriginal = originalPrice * quantity
  const totalSale = salePrice * quantity;
  return (
    <div className="itemPrice">
      <span className="originalPrice">{totalOriginal}</span>
      <strong className="salePrice">{totalSale}</strong>
    </div>
  );
};

export default PriceDisplay;
