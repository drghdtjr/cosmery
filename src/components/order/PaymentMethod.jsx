import React from 'react'
import { useState } from 'react'
import './paymentMethod.css'

const PaymentMethod = () => {
  const [mainMethod, setMainMethod] = useState("card");
  const [subMethod, setSubMethod] = useState("");
  return (
    <div className="radioGroup">
      <label className="radioLabel">
        <input
          type="radio"
          name="payment"
          value="card"
          checked={mainMethod === "card"}
          onChange={() => setMainMethod("card")}
        />
        <img
          src={
            mainMethod === "card"
              ? "/radio_active.svg"
              : "/radio.svg"
          }
          alt="카드 선택"
          className="radioIcon"
        />
        신용카드 결제
      </label>
      <label className="radioLabel">
        <input
          type="radio"
          name="payment"
          value="other"
          checked={mainMethod === "other"}
          onChange={() => setMainMethod("other")}
        />
        <img
          src={
            mainMethod === "other"
              ? "/radio_active.svg"
              : "/radio.svg"
          }
          alt="다른 수단선택"
          className="radioIcon"
        />
        다른결제 수단
      </label>
      {mainMethod === "other" && (
        <div className="subMethods">
          <label className="radioLabel">
            <input
              type="radio"
              name="subPayment"
              value="kakao"
              checked={subMethod === "kakao"}
              onChange={() => setSubMethod("kakao")}
            />
            <img
              src={
                subMethod === "kakao"
                  ? "/radio_active.svg"
                  : "/radio.svg"
              }
              alt="카카오페이 선택"
              className="radioIcon"
            />
            카카오페이
          </label>
          <label className="radioLabel">
            <input
              type="radio"
              name="subPayment"
              value="naver"
              checked={subMethod === "naver"}
              onChange={() => setSubMethod("naver")}
            />
            <img
              src={
                subMethod === "naver"
                  ? "/radio_active.svg"
                  : "/radio.svg"
              }
              alt="네이버페이 선택"
              className="radioIcon"
            />
            네이버페이
          </label>
        </div>
      )}
    </div>
  );
}

export default PaymentMethod