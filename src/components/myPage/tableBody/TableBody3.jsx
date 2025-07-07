import React from "react";
import { useEffect } from "react";

// 쿠폰 조회용
const TableBody3 = ({ item1, item2, item3, item4, item5 }) => {
  useEffect(() => {
    console.log(item1, item2, item3, item4, item5);
  }, [item1, item2, item3, item4, item5]);
  return (
    <tr className="bodyContent">
      <td>{item1}</td>
      <td>
        {item2}
        <br />
        <span style={{ fontSize: "0.75rem", color: "#999" }}>{item3}</span>
      </td>
      <td style={{fontSize: "0.75rem"}}>{item4}</td>
      {item5 === true ? <td>가능</td> : <td>불가능</td>}
    </tr>
  );
};

export default TableBody3;
