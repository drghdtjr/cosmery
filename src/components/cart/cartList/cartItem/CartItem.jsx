import React from "react";
import styles from "./CartItem.module.css";
import ItemCell from "./ItemCell";
import ItemCounter from "./ItemCounter";
import PriceDisplay from "./PriceDisplay";
import ActionButton from "./ActionButton";
const CartItem = ({ item, onToggle, onChangeOption, onChangeQuantity, onDelete }) => {
  return (
    <div className={styles.cartItemWrapper}>
      <ItemCell
        checked={item.checked}
        name={item.name}
        option={item.option}
        optionList={item.optionList}
        onToggle={onToggle}
        onChangeOption={onChangeOption}
      />
      <div className={styles.cartItemRight}>
        {/* 수량 카운터 */}
        <ItemCounter
          quantity={item.quantity}
          onChangeQuantity={onChangeQuantity}
        />
        {/* 상품 가격 */}
        <PriceDisplay
          originalPrice={item.originalPrice}
          salePrice={item.salePrice}
          quantity={item.quantity}
        />
        {/* 아이템 옵션 */}
        <ActionButton onDelete={onDelete} />
      </div>
    </div>
  );
};

export default CartItem;
