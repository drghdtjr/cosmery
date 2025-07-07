import React from "react";
import { useLocation } from "react-router-dom";
import "../components/order/orderDetail.css";
import OrderProduct from "../components/order/OrderProduct.jsx";
import ShippingAddressForm from "../components/shippingAddress/ShippingAddressForm.jsx";
import DeliveryRequestForm from "../components/order/DeliveryRequestForm.jsx";
import CouponBox from "../components/order/CouponBox.jsx";
import PaymentMethod from "../components/order/PaymentMethod.jsx";
import { useState } from "react";
import OrderSummary from "../components/order/OrderSummary.jsx";

const OrderDetail = () => {
  const location = useLocation();
  const items = location.state?.items || [];
  const [showList, setShowList] = useState(false);
  const handleToggle = () => {
    setShowList(!showList);
  };
  return (
    <div className="orderDetWrapper">
      <div className="orderDetInner">
        <div className="orderDetTop">
          <h2>주문 결제</h2>
        </div>
        <div className="orderDetBot">
          <div className="orderDetLeft">
            {/* 주문 상품 */}
            <div className="orderPdtList">
              <div className="orderDetTitle">
                <h2>주문 상품</h2>
                <img
                  src={
                    showList === false
                      ? "/arrow_up.svg"
                      : "/arrow_down.svg"
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
            <div className="shippingAddressForm">
              <div className="orderDetTitle">
                <h2>배송지</h2>
              </div>
              <ShippingAddressForm />
            </div>

            {/* 배송요청사항 */}
            <div className="deliveryMemo">
              <div className="orderDetTitle">
                <h2>배송 요청사항</h2>
              </div>
              <DeliveryRequestForm />
            </div>
            {/* 쿠폰사용 */}
            <div className="couponBox">
              <div className="orderDetTitle">
                <h2>쿠폰 사용</h2>
              </div>
              <CouponBox />
            </div>

            {/* 결제 방법 선택 */}
            <div className="paymentMethod">
              <div className="orderDetTitle">
                <h2>결제 방법 선택</h2>
              </div>
              <PaymentMethod />
            </div>
          </div>
          <div className="orderDetRight">
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
