import React from "react";
import "./orderSummary.css";

const OrderSummary = ({
  totalPrice,
  totalDiscount,
  shippingFee,
}) => {
  const finalAmount = totalPrice - totalDiscount + shippingFee;
  return (
    <div className="orderSummWrapper">
      <div className="orderSummTop">
        <h3 className="summTitle">결제 정보</h3>
        <div className="summDetail">
          <div className="detailAmount">
            <span className="detailText">주문금액</span>
            <span className="detailPrice">{totalPrice}원</span>
          </div>
          <div className="detailAmount">
            <span className="detailText">할인금액</span>
            <span className="detailPrice">-{totalDiscount}원</span>
          </div>
          <div className="detailAmount">
            <span className="detailText">배송비</span>
            <span className="detailPrice">{shippingFee}원</span>
          </div>
        </div>
        <div className="summBottom">
          <h3 className="summTitle">결제 금액</h3>
          <span className="totalAmount">{finalAmount}원</span>
        </div>
      </div>
      <div className="orderSummBottom">
        <button
          type="button"
          className="summButton2"
        >
          결제하기
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
