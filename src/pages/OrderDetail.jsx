import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../components/order/OrderDetail.module.css";
import OrderProduct from "../components/order/orderProduct/OrderProduct.jsx";
import ShippingAddressForm from "../components/shippingAddress/shippingAddrForm/ShippingAddressForm.jsx";
import DeliveryRequestForm from "../components/order/deliveryRequestForm/DeliveryRequestForm.jsx";
import CouponBox from "../components/order/couponBox/CouponBox.jsx";
import PaymentMethod from "../components/order/paymentMethod/PaymentMethod.jsx";
import { useState } from "react";
import OrderSummary from "../components/order/orderSummary/OrderSummary.jsx";

const OrderDetail = () => {
  const location = useLocation();
  const items = location.state?.items || [];
  const [showList, setShowList] = useState(false);
  const handleToggle = () => {
    setShowList(!showList);
  };
  return (
    <div className={styles.orderDetWrapper}>
      <div className={styles.orderDetInner}>
        <div className={styles.orderDetTop}>
          <h2 style={{ fontSize: "28px", fontWeight: "500" }}>주문 결제</h2>
        </div>
        <div className={styles.orderDetBot}>
          <div className={styles.orderDetLeft}>
            {/* 주문 상품 */}
            <div className={styles.orderPdtList}>
              <div className={styles.orderDetTitle}>
                <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
                  주문 상품
                </h2>
                <img
                  src={
                    showList === false
                      ? "../../../src/assets/arrow_up.svg"
                      : "../../../src/assets/arrow_down.svg"
                  }
                  alt={showList === false ? "열기" : "닫기"}
                  onClick={handleToggle}
                />
              </div>
              {showList &&
                items.map((item) => (
                  <OrderProduct
                    name={item.name}
                    option={item.option}
                    quantity={item.quantity}
                    salePrice={item.salePrice}
                  />
                ))}
            </div>

            {/* 배송지 */}
            <div className={styles.shippingAddressForm}>
              <div className={styles.orderDetTitle}>
                <h2 style={{ fontSize: "18px", fontWeight: "600" }}>배송지</h2>
              </div>
              <ShippingAddressForm />
            </div>

            {/* 배송요청사항 */}
            <div className={styles.deliveryMemo}>
              <div className={styles.orderDetTitle}>
                <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
                  배송 요청사항
                </h2>
              </div>
              <DeliveryRequestForm />
            </div>
            {/* 쿠폰사용 */}
            <div className={styles.couponBox}>
              <div className={styles.orderDetTitle}>
                <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
                  쿠폰 사용
                </h2>
              </div>
              <CouponBox />
            </div>

            {/* 결제 방법 선택 */}
            <div className={styles.paymentMethod}>
              <div className={styles.orderDetTitle}>
                <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
                  결제 방법 선택
                </h2>
              </div>
              <PaymentMethod />
            </div>
          </div>
          <div className={styles.orderDetRight}>
            <OrderSummary
              totalPrice={5000}
              totalDiscount={2500}
              shippingFee={2500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
