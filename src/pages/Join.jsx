import React from "react";
import styles from "../components/join/Join.module.css";

const Join = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className={styles.signinWrap}>
        <div className={styles.signinInner}>
          <h2>신규 회원가입을 환영합니다</h2>
          <a href="/join/form">
            <button className={styles.phone} type="button">
              휴대폰 번호로 시작하기
            </button>
          </a>
          <button className={styles.kakao} type="button">
            카카오로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
