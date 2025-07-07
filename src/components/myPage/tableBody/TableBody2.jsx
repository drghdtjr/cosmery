// components/MyPage/SideContent/TableBody.jsx
import React from "react";
import { useEffect } from "react";

// 취소/반품/교환 신청용
const TableBody2 = ({ item1, item2, item3, item4 }) => {
  useEffect(() => {
    console.log(item1, item2, item3, item4);
  }, [item1, item2, item3, item4]);
  return (
    <tr className="bodyContent">
      <td>
        {item1}
        <br />
        <span style={{ fontSize: "0.75rem", color: "#999" }}>{item2}</span>
      </td>

      <td>{item3}</td>
      <td>{item4}</td>
      <td><button style={{ backgroundColor: "#000", color: "#fff", border: "none", padding: "0.3125rem 0.625rem", borderRadius: "0.125rem" }}>신청</button></td>
    </tr>
  );
};

export default TableBody2;
