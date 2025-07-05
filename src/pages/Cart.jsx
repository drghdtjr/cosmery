import React from "react";
import styles from "../components/cart/CartPage.module.css";
import CartSummary from "../components/cart/CartSummary/CartSummary.jsx";
import ProductList from "../components/productList/ProductList/ProductList.jsx";
import CartList from "../components/cart/cartList/CartList.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "상품1",
      checked: false,
      quantity: 1,
      originalPrice: 10000,
      salePrice: 8000,
      option: "01 토피 브라운",
      optionList: ["01 토피 브라운", "02 딥 블랙"],
    },
    {
      id: 2,
      name: "상품2",
      checked: false,
      quantity: 1,
      originalPrice: 12000,
      salePrice: 9500,
      option: "",
      optionList: null,
    },
    {
      id: 3,
      name: "상품3",
      checked: false,
      quantity: 1,
      originalPrice: 20000,
      salePrice: 15000,
      option: "옵션1",
      optionList: ["옵션1", "옵션2", "옵션3"],
    },
  ]);
  const selectedItems = cartItems.filter((item) => item.checked);

  const totalPrice = selectedItems.reduce(
    (acc, item) => acc + item.salePrice * item.quantity,
    0
  );
  const totalDiscount = selectedItems.reduce(
    (acc, item) => acc + (item.originalPrice - item.salePrice) * item.quantity,
    0
  );
  const shippingFee = selectedItems.length > 0 ? 2500 : 0;
  const handleSelectPurchase = () => {
    if (selectedItems.length != 0) {
      navigate("/order/order-detail", { state: { items: selectedItems } });
    } else {
      alert("상품을 선택해주세요.");
    }
  };
  const handleAllPurchate = () => {
    if (selectedItems.length != 0) {
      navigate("/order/order-detail", { state: { items: cartItems } });
    } else {
      alert("상품을 선택해주세요.");
    }
  };

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartInner}>
        <h2 className={styles.cartTitle}>배송 상품</h2>
        <div className={styles.cartInnerTop}>
          <CartList cartItems={cartItems} setCartItems={setCartItems} />
          <CartSummary
            totalPrice={totalPrice}
            totalDiscount={totalDiscount}
            shippingFee={shippingFee}
            selectedItems={selectedItems.length}
            onSelectPurchase={handleSelectPurchase}
            onAllPurchase={handleAllPurchate}
          />
        </div>
        <div className={styles.cartBottom}>
          <ProductList title="함께 구매하면 좋은 상품" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
