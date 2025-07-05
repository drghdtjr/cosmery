import React from "react";
import styles from "../sidecontent/SideContent1.module.css";
import { useEffect } from "react";

// 문의내용 조회용
const TableBody5 = ({ item1, item2, item3, item4, item5 }) => {
  useEffect(() => {
    console.log(item1, item2, item3, item4, item5);
  }, [item1, item2, item3, item4, item5]);
  return (
    <tr className={styles.bodyContent}>
      <td>
        {item1}
      </td>
      <td style={{fontSize: "12px"}}>{item2}</td>
      {item3 === "답변 완료" ? (
          <td>{item4}</td>
        ) : (
            <td style={{color: "#999"}}>{item3}</td>
        )}
        <td style={{fontSize: "12px"}}>{item5}</td>
    </tr>
  );
};

export default TableBody5;
