import React, { useState } from "react";
import styles from "./productDetail.module.css";
import ItemCounter from "../cart/cartList/cartItem/ItemCounter";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.productInfoWrapper}>
      {/* 상품명 + 좋아요, 공유 버튼 */}
      <div className={styles.productInfoHeader}>
        <h2>상품명</h2>
        <div className={styles.productInfoHeaderButton}>
          <button>
            <img src="../../../src/assets/heart.svg" alt="좋아요" />
          </button>
          <button>
            <img src="../../../src/assets/share.svg" alt="공유" />
          </button>
        </div>
      </div>
      {/* 상품 가격 */}
      <div className={styles.productInfoPrice}>
        <p className={styles.productInfoPriceDiscount}>
          <span
            className="font-montserrat"
            style={{
              fontSize: "32px",
              color: "#EA6770",
              fontWeight: "900",
              marginRight: "20px",
            }}
          >
            30%
          </span>{" "}
          <strong
            className="font-montserrat"
            style={{ fontSize: "36px", fontWeight: "600" }}
          >
            14,000
          </strong>
          <span style={{ fontSize: "28px", fontWeight: "500" }}>원</span>
        </p>
        <p className={styles.productInfoPriceOriginal}>
          <del
            className="font-montserrat"
            style={{ fontSize: "24px", fontWeight: "500" }}
          >
            20,000
          </del>
        </p>
      </div>
      {/* 부가 정보 */}
      <div className={styles.productInfoAdditionalInfo}>
        <span className={styles.productInfoAdditionalInfoDeliveryText}>
          밤 10시 이내 주문 시 내일 도착
        </span>
        <div className={styles.productInfoAdditionalInfoDelivery}>
          <span>배송비</span>
          <span>2,500원(5만원 이상 무료배송)</span>
        </div>
        <div className={styles.productInfoAdditionalInfoCustomer}>
          <p>
            고객 만족도
            <span>
              <img
                style={{ width: "20px", height: "20px" }}
                src="../../../src/assets/star.svg"
                alt="고객 만족도"
              />
              <p
                className="font-montserrat"
                style={{ fontSize: "16px", fontWeight: "500" }}
              >
                4.9
              </p>
              <p
                className="font-montserrat"
                style={{ fontSize: "16px", fontWeight: "500" }}
              >
                (1,000)
              </p>
            </span>
          </p>
        </div>
      </div>
      {/* 상품 수량 + 카운터 */}
      <div className={styles.productQuantityWrapper}>
        <div className={styles.productQuantityWrapperInner}>
          <ItemCounter quantity={quantity} onChangeQuantity={setQuantity} />
          <p>
            <strong
              className="font-montserrat"
              style={{ fontSize: "28px", fontWeight: "600" }}
            >
              14,000
            </strong>
            <span style={{ fontSize: "24px", fontWeight: "500" }}>원</span>
          </p>
        </div>
      </div>
      {/* 구매 버튼 */}
      <div className={styles.productInfoButtonWrapper}>
        <button><img src="../../../src/assets/my-bag.svg" alt="장바구니" />장바구니</button>
        <button><img src="../../../src/assets/gift.svg" alt="선물하기" />선물하기</button>
        <button>구매하기</button>
      </div>
    </div>
  );
};

export default ProductInfo;
