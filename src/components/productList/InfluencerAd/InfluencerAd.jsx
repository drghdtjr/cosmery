import React, { useState } from "react";
import styles from "./InfluencerAd.module.css";
import Ad from "../../products/Ad";
import AddToCartButton from "../../cart/addToCartButton/AddToCartButton";
import WishButton from "../../wish/WishButton";

const InfluencerAd = () => {
  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const openWish = () => setShowWish(true);
  const closeWish = () => setShowWish(false);

  return (
    <div className={styles.influWrapper}>
      {showCart && <AddToCartButton onClose={closeCart} />}
      {showWish && <WishButton onClose={closeWish} />}

      <div className={styles.adBanner}>
        <img src="../../src/assets/product1.png" alt="광고 배너" />
        <span>여름 데일리 메이크업 루틴 🍉</span>
      </div>

      <div className={styles.adDetail}>
        <div className={styles.adDetailTop}>
          <h2 style={{ fontSize: "28px", fontWeight: "400" }}>beauty_hana의 리얼 후기!</h2>
          <div className={styles.review}>
            <div>
              <img src="../../src/assets/review.svg" alt="리뷰아이콘" />
              <span>"물처럼 가볍고, 백탁 없고 밀리지 않아요!"</span>
            </div>
            <div>
              <img src="../../src/assets/review.svg" alt="리뷰아이콘" />
              <span>"물처럼 가볍고, 백탁 없고 밀리지 않아요!"</span>
            </div>
          </div>
        </div>

        <div className={styles.adProducts}>
          <Ad clickCart={openCart} clickWish={openWish} />
          <Ad clickCart={openCart} clickWish={openWish} />
        </div>
      </div>
    </div>
  );
};

export default InfluencerAd;
