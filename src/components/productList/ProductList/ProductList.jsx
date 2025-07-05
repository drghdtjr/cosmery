import styles from "./ProductList.module.css";
import Product1 from "../../products/Product1";
import { useState } from "react";
import AddToCartButton from "../../cart/addToCartButton/AddToCartButton";
import WishButton from "../../wish/WishButton";

const ProductList = ({ title }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);

  const clickLeft = () => {
    setCurrentIdx((prev) => Math.max(prev - 1, 0));
  };

  const clickRight = () => {
    setCurrentIdx((prev) => Math.min(prev + 1, 7));
  };

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const openWish = () => setShowWish(true);
  const closeWish = () => setShowWish(false);

  return (
    <div className={styles.recPrdtWrapper}>
      {showCart && <AddToCartButton onClose={closeCart} />}
      {showWish && <WishButton onClose={closeWish} />}
      <div className={styles.listTop}>
        <h2 style={{ fontSize: "28px", fontWeight: "400" }}>{title}</h2>
        <div className={styles.slideNav}>
          <button type="button" onClick={clickLeft}>
            <img src="../../src/assets/left.svg" alt="button" />
          </button>
          <button type="button" onClick={clickRight}>
            <img src="../../src/assets/right.svg" alt="button" />
          </button>
        </div>
      </div>

      <div className={styles.listWrapper}>
        <div
          className={styles.slideTrack}
          style={{ transform: `translateX(-${currentIdx * 220}px)` }}
        >
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <Product1 key={i} clickCart={openCart} clickWish={openWish} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
