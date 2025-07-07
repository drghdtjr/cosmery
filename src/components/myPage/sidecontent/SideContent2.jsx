import React, { useState, useRef } from "react";
import "./sideContent2.css";
import TableBody3 from "../tableBody/TableBody3.jsx";

const SideContent2 = ({ title, couponCount, head1, head2, head3, head4, data }) => {
  const [hasHistory, setHasHistory] = useState(false);

  return (
    <div className="contentWrapper">
      <h2 className="contentTitle">{title}</h2>
      <div className="couponArea">
        <span className="couponInfo1">유지원님의 보유 쿠폰</span>
        <div className="couponInfo2">
          <span className="count">{couponCount}</span>
          <span>장</span>
        </div>
        <div className="addCoupon">
          <input type="text" placeholder="쿠폰번호를 입력해주세요." />
          <button>등록</button>
        </div>
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
