// components/MyPage/SideContent/TableBody.jsx
import React from "react";
import styles from "../sidecontent/SideContent1.module.css";
import { useEffect } from "react";

// 취소/반품/교환 신청용
const TableBody2 = ({ item1, item2, item3, item4 }) => {
  useEffect(() => {
    console.log(item1, item2, item3, item4);
  }, [item1, item2, item3, item4]);
  return (
    <tr className={styles.bodyContent}>
      <td>
        {item1}
        <br />
        <span style={{ fontSize: "12px", color: "#999" }}>{item2}</span>
      </td>

      <td>{item3}</td>
      <td>{item4}</td>
      <td><button style={{ backgroundColor: "#000", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "2px" }}>신청</button></td>
    </tr>
  );
};

export default TableBody2;
