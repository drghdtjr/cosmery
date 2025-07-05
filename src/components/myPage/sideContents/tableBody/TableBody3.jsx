import React from "react";
import styles from "../sidecontent/SideContent1.module.css";
import { useEffect } from "react";

// 쿠폰 조회용
const TableBody3 = ({ item1, item2, item3, item4, item5 }) => {
  useEffect(() => {
    console.log(item1, item2, item3, item4, item5);
  }, [item1, item2, item3, item4, item5]);
  return (
    <tr className={styles.bodyContent}>
      <td>{item1}</td>
      <td>
        {item2}
        <br />
        <span style={{ fontSize: "12px", color: "#999" }}>{item3}</span>
      </td>
      <td style={{fontSize: "12px"}}>{item4}</td>
      {item5 === true ? <td>가능</td> : <td>불가능</td>}
    </tr>
  );
};

export default TableBody3;
