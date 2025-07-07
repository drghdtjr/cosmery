import React from "react";
import "./itemCell.css";

const ItemCell = ({
  checked,
  name,
  option,
  optionList,
  onToggle,
  onChangeOption,
}) => {
  return (
    <div className="cartItemLeft">
      {/* 선택 박스 */}
      <input
        className="cartItemCheckbox"
        type="checkbox"
        checked={checked}
        onChange={onToggle}
      />
      {/* 이미지 */}
      <img
        className="cartItemImg"
        src="/placeholder-image.webp"
        alt="예시 이미지"
      />
      {/* 상품 정보 */}
      <div className="cartItemInfo">
        <span className="infoTitle">{name}</span>
        {optionList && optionList.length > 0 ? (
          <select
            value={option}
            onChange={(e) => onChangeOption(e.target.value)}
            className="infoSelect"
          >
            {optionList.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ItemCell;
