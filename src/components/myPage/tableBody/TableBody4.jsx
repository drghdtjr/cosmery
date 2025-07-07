import React from "react";
import { useState } from "react";    
import Modal from "../modal/Modal";
import ReviewWriteModal from "../modal/ReviewWriteModal";

// 나의 리뷰용
const TableBody4 = ({ item1, item2, item3, item4, item5, item6, item7 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewWriteModalOpen, setIsReviewWriteModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && (
        <Modal
          title={item6}
          content={item7}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {isReviewWriteModalOpen && (
        <ReviewWriteModal
          onClose={() => setIsReviewWriteModalOpen(false)}
        />
      )}
      <tr className="bodyContent">
        <td>
          {item1}
          <br />
          <span style={{ fontSize: "0.75rem", color: "#999" }}>{item2}</span>
        </td>
        <td>{item3}</td>
        <td>{item4}</td>
        {item5 === true ? (
          <td>
            <button style={{cursor: "pointer", color: "#999"}} onClick={() => setIsModalOpen(true)}>내용보기</button>
          </td>
        ) : (
          <td style={{cursor: "pointer", textDecoration: "underline"}} onClick={() => setIsReviewWriteModalOpen(true)}>작성하기</td>
        )}
      </tr>
    </>
  );
};

export default TableBody4;
