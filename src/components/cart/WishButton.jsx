import React from "react";
import "./WishButton.css";
import { useEffect } from "react";

const WishButton = ({ onClose }) => {
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
    <div className="popupArea">
      <div className="popupInner">
        <div className="popupTop">
          <strong>상품 추가 완료</strong>
          <button type="button" onClick={onClose}>
            <img src="/close.svg" alt="close" />
          </button>
        </div>
        <div className="popupContents">
          <p>추가된 상품을 확인하시겠습니까?</p>
          <div className="popupNav">
            <button className="nav1" type="button" onClick={onClose}>
              쇼핑 계속하기
            </button>
            <button className="nav2" type="button">
              보러가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishButton;
