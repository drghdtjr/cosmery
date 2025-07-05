import React, { useState, useRef } from "react";
import styles from "./SideContent2.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../../../assets/calendar.svg"; // 본인 아이콘 경로로 바꿔주세요
import TableBody3 from "../tableBody/TableBody3";

const SideContent2 = ({ title, couponCount, head1, head2, head3, head4, data }) => {
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
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>{head1}</th>
            <th>{head2}</th>
            <th>{head3}</th>
            <th>{head4}</th>
          </tr>
        </thead>
        <tbody>
          {/* 쿠폰 조회용 */}
          {data.map((item, index) => (
            <TableBody3
              key={index}
              item1={item.id}
              item2={item.name}
              item3={item.discount}
              item4={item.period}
              item5={item.usable}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SideContent2;
