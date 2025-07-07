import React from "react";
import { useEffect } from "react";

// 주문/배송 조회용, 취소/반품/교환 조회용
const TableBody1 = ({ item1, item2, item3, item4, item5 }) => {
  useEffect(() => {
    console.log(item1, item2, item3, item4, item5);
  }, [item1, item2, item3, item4, item5]);
  return (
    <tr className="bodyContent">
      <td>
        {item1}
        <br />
        <span style={{ fontSize: "0.75rem", color: "#999" }}>{item2}</span>
      </td>
      <td>{item3}</td>
      <td>{item4}</td>
      <td>{item5}</td>
    </tr>
  );
};

export default TableBody1;
