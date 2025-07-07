import React, { useState, useRef } from "react";
import "./sideContent1.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "/calendar.svg";
import TableBody1 from "../tableBody/TableBody1.jsx";
import TableBody2 from "../tableBody/TableBody2.jsx";
import TableBody4 from "../tableBody/TableBody4.jsx";
import TableBody5 from "../tableBody/TableBody5.jsx";

const SideContent1 = ({ title, head1, head2, head3, head4, data, type }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hasHistory, setHasHistory] = useState(data.length);

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
    setActiveRange(range);
  };

  return (
    <div className="contentWrapper">
      <h2 className="contentTitle">{title}</h2>
      <div className="contentFilter">
          <div className="filterTitle">조회 기간</div>
          <div className="buttonFilter">
            {["1주일", "1개월", "3개월", "6개월"].map((label) => (
              <button
                type="button"
                key={label}
                onClick={() => handleRangeClick(label)}
                className={`rangeButton ${
                  activeRange === label ? "active" : ""
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        <div className="calendarFilter">
          <div className="customDateInput">
            <img
              src={calendarIcon}
              alt="달력 아이콘"
              onClick={() => startRef.current.setFocus()}
              className="calendarIcon"
            />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="yyyy.MM.dd"
              ref={startRef}
              wrapperClassName="hiddenDatePicker"
              className="customDatePicker"
            />
          </div>

          <span>~</span>

          <div className="customDateInput">
            <img
              src={calendarIcon}
              alt="달력 아이콘"
              onClick={() => endRef.current.setFocus()}
              className="calendarIcon"
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
              wrapperClassName="hiddenDatePicker"
              className="customDatePicker"
            />
          </div>
        </div>

        <button className="queryButton">조회</button>
      </div>

      <table className="table">
        <thead className="tableHead">
          <tr>
            <th>{head1}</th>
            <th>{head2}</th>
            <th>{head3}</th>
            <th>{head4}</th>
          </tr>
        </thead>

        <tbody>
          {/* 주문/배송 조회용 */}
          {type === "1" &&
            data.map((item, index) => (
              <TableBody1
                key={index}
                item1={item.orderId}
                item2={item.orderDate}
                item3={item.name}
                item4={item.deliveryStatus}
                item5={item.totalPrice}
              />
            ))}
          {/* 취소/반품/교환 조회용 */}
          {type === "3" &&
            data.map((item, index) => (
              <TableBody1
                key={index}
                item1={item.orderId}
                item2={item.orderDate}
                item3={item.type}
                item4={item.reason}
                item5={item.status}
              />
            ))}
          {/* 취소/반품/교환 신청용 */}
          {type === "2" &&
            data.map((item, index) => (
              <TableBody2
                key={index}
                item1={item.orderId}
                item2={item.orderDate}
                item3={item.name}
                item4={item.totalAmount}
              />
            ))}
          {/* 나의 리뷰 조회용 */}
          {type === "5" &&
            data.map((item, index) => (
              <TableBody4
                key={index}
                item1={item.orderId}
                item2={item.orderDate}
                item3={item.name}
                item4={item.deliveryStatus}
                item5={item.written}
                item6={item.reviewTitle}
                item7={item.reviewBody}
              />
            ))}
          {/* 문의내용 조회용 */}
          {type === "6" &&
            data.map((item, index) => (
              <TableBody5
                key={index}
                item1={item.type}
                item2={item.content}
                item3={item.status}
                item4={item.answer}
                item5={item.date}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SideContent1;
