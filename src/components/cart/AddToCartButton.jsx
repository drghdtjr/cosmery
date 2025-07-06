import React, { useEffect } from "react";
import styles from "./AddToCartButton.module.css";

const AddToCartButton = ({ onClose }) => {
  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <div className={styles.popupArea}>
      <div className={styles.popupInner}>
        <div className={styles.popupTop}>
          <strong>상품 추가 완료</strong>
          <button type="button" onClick={onClose}>
            <img src="/close.svg" alt="close" />
          </button>
        </div>
        <div className={styles.popupContents}>
          <p>상품을 장바구니에 담았습니다.</p>
          <div className={styles.popupNav}>
            <button className={styles.nav1} type="button" onClick={onClose}>
              쇼핑 계속하기
            </button>
            <a href="/order">
              <button className={styles.nav2} type="button">
                장바구니
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartButton;
