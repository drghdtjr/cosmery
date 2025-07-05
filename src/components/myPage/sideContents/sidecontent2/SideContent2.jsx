import React, { useState, useRef } from "react";
import styles from "./SideContent2.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../../../assets/calendar.svg"; // 본인 아이콘 경로로 바꿔주세요

const SideContent2 = ({ title, couponCount, head1, head2, head3, head4 }) => {
  const [hasHistory, setHasHistory] = useState(false);

  return (
    <div className={styles.contentWrapper}>
      <h2 className={styles.contentTitle}>{title}</h2>
      <div className={styles.couponArea}>
        <span className={styles.couponInfo1}>유지원님의 보유 쿠폰</span>
        <div className={styles.couponInfo2}>
          <span className={styles.count}>{couponCount}</span>
          <span>장</span>
        </div>
        <div className={styles.addCoupon}>
          <input type="text" placeholder="쿠폰번호를 입력해주세요." />
          <button>등록</button>
        </div>
      </div>
      <div className={styles.tableHead}>
        <div className={styles.content2Head1}>{head1}</div>
        <div className={styles.content2Head2}>{head2}</div>
        <div className={styles.content2Head3}>{head3}</div>
        <div className={styles.content2Head4}>{head4}</div>
      </div>
      <div className={styles.tableBody}>
        <div className={styles.bodyContent}>
          <img src="../../src/assets/empty.svg" alt="empty" />
          <span>{title}내역이 없습니다.</span>
        </div>
      </div>
    </div>
  );
};

export default SideContent2;
