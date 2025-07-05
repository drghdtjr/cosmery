import React, { useState, useRef } from "react";
import styles from "./SideContent3.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../../../assets/calendar.svg";

const SideContent3 = ({ title, head1, head2, head3, head4 }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hasHistory, setHasHistory] = useState(false);

  const [activeRange, setActiveRange] = useState("");

  const startRef = useRef(null);
  const endRef = useRef(null);

  const handleRangeClick = (range) => {
    const today = new Date();
    let newStart = new Date(today);

    switch (range) {
      case "1주일":
        newStart.setDate(today.getDate() - 7);
        break;
      case "1개월":
        newStart.setMonth(today.getMonth() - 1);
        break;
      case "3개월":
        newStart.setMonth(today.getMonth() - 3);
        break;
      case "6개월":
        newStart.setMonth(today.getMonth() - 6);
        break;
      default:
        return;
    }

    setStartDate(newStart);
    setEndDate(today);
    setActiveRange(range); // 클릭된 범위 저장
  };

  return (
    <div className={styles.contentWrapper}>
      <h2 className={styles.contentTitle}>{title}</h2>
      <div className={styles.contentFilter}>
        <div className={styles.filterTitle}>조회 기간</div>
        <div className={styles.buttonFilter}>
          {["1주일", "1개월", "3개월", "6개월"].map((label) => (
            <button
              type="button"
              key={label}
              onClick={() => handleRangeClick(label)}
              className={`${styles.rangeButton} ${
                activeRange === label ? styles.active : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={styles.calendarFilter}>
          {/* 시작일 */}
          <div className={styles.customDateInput}>
            <img
              src={calendarIcon}
              alt="달력 아이콘"
              onClick={() => startRef.current.setFocus()}
              className={styles.calendarIcon}
            />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="yyyy.MM.dd"
              ref={startRef}
              wrapperClassName={styles.hiddenDatePicker}
              className={styles.customDatePicker}
            />
          </div>

          <span>~</span>

          {/* 종료일 */}
          <div className={styles.customDateInput}>
            <img
              src={calendarIcon}
              alt="달력 아이콘"
              onClick={() => endRef.current.setFocus()}
              className={styles.calendarIcon}
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="yyyy.MM.dd"
              ref={endRef}
              wrapperClassName={styles.hiddenDatePicker}
              className={styles.customDatePicker}
            />
          </div>
        </div>

        <button className={styles.queryButton}>조회</button>
      </div>
      <div className={styles.tableHead}>
        <div className={styles.content3Head1}>{head1}</div>
        <div className={styles.content3Head2}>{head2}</div>
        <div className={styles.content3Head3}>{head3}</div>
        <div className={styles.content3Head4}>{head4}</div>
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

export default SideContent3;
