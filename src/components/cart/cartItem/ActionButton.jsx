import React from "react";
import "./actionButton.css"

const ActionButton = ({ onDelete }) => {
  return (
    <div className="itemOption">
      <button type="button" className="option1">
        바로구매
      </button>
      <button type="button" className="option2" onClick={onDelete}>
        삭제
      </button>
    </div>
  );
};

export default ActionButton;
