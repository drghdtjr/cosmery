import React from "react";
import CartItem from "./cartItem/CartItem";
import styles from "./CartList.module.css";
import { useState } from "react";

const CartList = ( {cartItems, setCartItems }) => {
  const isAllChecked = cartItems.every((item) => item.checked);

  const toggleAll = () => {
    const updated = cartItems.map((item) => ({
      ...item,
      checked: !isAllChecked,
    }));
    setCartItems(updated);
  };
  const toggleOne = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCartItems(updated);
  };
  const updateOption = (id, newOption) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, option: newOption } : item
      )
    );
  };
  const updateQuantity = (id, newQty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(newQty, 1) } // 수량 1 이하로 못 내려가게
          : item
      )
    );
  };
  const deleteList = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const deleteSelected = () => {
    setCartItems((prev) => prev.filter((item) => !item.checked));
  };
  return (
    <div>
      <div className={styles.tableTitle}>
        <div className={styles.titleLeft}>
          <input
            type="checkbox"
            className={styles.tableCheckbox}
            checked={isAllChecked}
            onChange={toggleAll}
          />
          <span style={{ fontSize: "16px" }}>전체선택</span>
        </div>
        <button
          type="button"
          className={styles.titleButton}
          onClick={deleteSelected}
        >
          선택 삭제
        </button>
      </div>
      <table className={styles.cartTable}>
        <thead className={styles.cartHead}>
          <tr className={styles.tableRow}>
            <td>상품명</td>
            <td colSpan={3}>
              <div className={styles.itemMeta}>
                <div>수량</div>
                <div>구매가</div>
                <div>옵션</div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody className={styles.cartBody}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onToggle={() => toggleOne(item.id)}
              onChangeOption={(value) => updateOption(item.id, value)}
              onChangeQuantity={(qty) => updateQuantity(item.id, qty)}
              onDelete={() => deleteList(item.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartList;
