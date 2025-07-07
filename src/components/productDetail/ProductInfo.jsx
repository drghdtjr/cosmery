import React, { useEffect, useState } from "react";
import styles from "./productDetail.module.css";
import ItemCounter from "../cart/cartItem/ItemCounter";

// 천 단위 콤마 포맷팅 함수
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductInfo = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const value = data.discountedPrice.replace(/,/g, "");
    setPrice(parseInt(value) * quantity);
  }, [data, quantity]);

  return (
    <div className={styles.productInfoWrapper}>
      {/* 상품명 + 좋아요, 공유 버튼 */}
      <div className={styles.productInfoHeader}>
        <h2>{data.name}</h2>
        <div className={styles.productInfoHeaderButton}>
          <button>
            <img src="./heart.svg" alt="좋아요" />
          </button>
          <button>
            <img src="./share.svg" alt="공유" />
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
            {data.discountPercent}%
          </span>{" "}
          <strong
            style={{ fontSize: "36px", fontWeight: "500", fontFamily: "Montserrat" }}
          >
            {data.discountedPrice}
          </strong>
          <span style={{ fontSize: "28px", fontWeight: "500" }}>원</span>
        </p>
        <p className={styles.productInfoPriceOriginal}>
          <del
            style={{ fontSize: "24px", fontWeight: "500", fontFamily: "Montserrat" }}
          >
            {data.originalPrice}
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
                src="./star.svg"
                alt="고객 만족도"
              />
              <p>
                4.9
              </p>
              <p>
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
              style={{ fontSize: "28px", fontWeight: "500", fontFamily: "Montserrat" }}
            >
              {formatNumber(price)}
            </strong>
            <span style={{ fontSize: "24px", fontWeight: "500" }}>원</span>
          </p>
        </div>
      </div>
      {/* 구매 버튼 */}
      <div className={styles.productInfoButtonWrapper}>
        <button><img src="./my-bag.svg" alt="장바구니" />장바구니</button>
        <button><img src="./gift.svg" alt="선물하기" />선물하기</button>
        <button>구매하기</button>
      </div>
    </div>
  );
};

export default ProductInfo;
