import React from "react";
import "../cart/cartSummary.css";

const CartSummary = ({
  totalPrice,
  totalDiscount,
  shippingFee,
  selectedItems,
  onSelectPurchase,
  onAllPurchase,
}) => {
  const finalAmount = totalPrice - totalDiscount + shippingFee;
  return (
    <div className="cartSummWrapper">
      <div className="cartSummTop">
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
      <div className="cartSummBottom">
        <button
          type="button"
          className="summButton1"
          onClick={onSelectPurchase}
        >
          선택 구매({selectedItems})
        </button>
        <button
          type="button"
          className="summButton2"
          onClick={onAllPurchase}
        >
          전체 구매
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
