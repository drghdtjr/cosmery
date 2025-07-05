import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footWrap}>
      <div className={styles.footTop}>
        <div className={styles.footInner}>
          <ul className={styles.footNav1}>
            <li>
              <a href="#">회사소개</a>
            </li>
            <li>
              <a href="#">문의하기</a>
            </li>
            <li>
              <a href="#">배송 및 반품 안내</a>
            </li>
            <li>
              <a href="#">이용약관</a>
            </li>
            <li>
              <a href="#">개인정보처리방침</a>
            </li>
            <li>
              <a href="#">제휴/입점 문의</a>
            </li>
          </ul>
          <ul className={styles.footNav2}>
            <li>
              <a href="#">Facabook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footBottom}>
        <div className={styles.footLeft}>
          <p className={styles.footTitle}>
            <strong>Copyright. My-Portfolio</strong>
          </p>
          <p className={styles.footText}>
            대표: 유지원 | 사업자등록번호: 123-45-67890
          </p>
          <p className={styles.footText}>
            주소: 서울특별시 강남구 테헤란로 123, 4층
          </p>
          <p className={styles.footText}>
            통신판매업신고번호: 제2025-서울강남-01234호
          </p>
          <p className={styles.footText}>Email: jjiwon0768@gmail.com</p>
          <p className={styles.footText}>Contact: 010-3312-0768</p>
        </div>
        <div className={styles.footRight}>
          <p className={styles.footTitle}>
            <strong>고객센터 📞 080-123-4567</strong>
          </p>
          <p className={styles.footText}>
            운영시간: 평일 10:00 - 17:00 (점심시간 12:00 - 13:00)
          </p>
          <p className={styles.footText}>주말/공휴일 휴무</p>
          <p className={styles.footText}>
            자주 묻는 질문: <a href="#">FAQ 바로가기</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
