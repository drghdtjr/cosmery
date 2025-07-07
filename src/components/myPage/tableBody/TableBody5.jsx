import React from "react";

// 문의내용 조회용
const TableBody5 = ({ item1, item2, item3, item4, item5 }) => {
  return (
    <tr className="bodyContent">
      <td>{item1}</td>
      <td style={{ fontSize: "0.75rem" }}>{item2}</td>
      {item3 === "답변 완료" ? (
        <td>{item4}</td>
      ) : (
        <td style={{ color: "#999" }}>{item3}</td>
      )}
      <td style={{ fontSize: "0.75rem" }}>{item5}</td>
    </tr>
  );
};

export default TableBody5;
