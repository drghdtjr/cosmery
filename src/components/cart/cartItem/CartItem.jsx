import React from "react";
import "./cartItem.css";
import ItemCell from "./ItemCell";
import ItemCounter from "./ItemCounter";
import PriceDisplay from "./PriceDisplay";
import ActionButton from "./ActionButton";
const CartItem = ({ item, onToggle, onChangeOption, onChangeQuantity, onDelete }) => {
  return (
    <div className="cartItemWrapper">
      <div className="cartItemLeft">
        <ItemCell
          checked={item.checked}
          name={item.name}
          option={item.option}
          optionList={item.optionList}
          onToggle={onToggle}
          onChangeOption={onChangeOption}
        />
      </div>
      <div className="cartItemRight">
        {/* 상품 가격 */}            
        <PriceDisplay
          originalPrice={item.originalPrice}
          salePrice={item.salePrice}
          quantity={item.quantity}
        />
        {/* 수량 카운터 */}
        <ItemCounter
          quantity={item.quantity}
          onChangeQuantity={onChangeQuantity}
        />
        {/* 아이템 옵션 */}
        <ActionButton onDelete={onDelete} />
      </div>
    </div>
  );
};

export default CartItem;
