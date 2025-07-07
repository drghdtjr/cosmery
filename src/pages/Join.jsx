import React from "react";
import "../components/join/join.css";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="signinWrap">
        <div className="signinInner">
          <h2>신규 회원가입을 환영합니다</h2>
          <button
            className="phone"
            type="button"
            onClick={() => navigate("/join/form")}
          >
            휴대폰 번호로 시작하기
          </button>
          <button className="kakao" type="button">
            카카오로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
