import React from "react";
import styles from "./GNB.module.css";

const GNB = () => {
  return (
    <ul className={styles.gnbMenu}>
      <li>
        <a href="/login">로그인</a>
      </li>
      <li>
        <a href="/join">회원가입</a>
      </li>
    </ul>
  );
};

export default GNB;
