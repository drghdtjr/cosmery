import React from "react";
import { useNavigate } from "react-router-dom";
import categoryData from "./data/categoryData";
import "./lnb.css";

const LNB = ({ isCategoryOpen, setIsCategoryOpen }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category, subcategory) => {
    setIsCategoryOpen(false); // 모바일 메뉴 닫기
    navigate(`/category-product-list/${category}/${subcategory}`);
  };

  return (
    <>
      {/* PC 메뉴 */}
      <div className="lnb-wrap" onMouseLeave={() => setIsCategoryOpen(false)}>
        <div className={`lnb-category-wrap ${isCategoryOpen ? "active" : ""}`}>
          <ul className="lnb-main-menu">
            {categoryData.map((category, idx) => (
              <li key={idx}>
                <a onClick={() => handleCategoryClick(category.name, "토너")}>
                  {category.name}
                </a>
                <ul className="lnb-sub-menu">
                  {category.subcategories.map((sub, i) => (
                    <li
                      key={i}
                      onClick={() => handleCategoryClick(category.name, sub)}
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 모바일 슬라이드 메뉴 */}
      <div className={`lnb-mobile-menu ${isCategoryOpen ? "show" : ""}`}>
        <ul className="lnb-mobile-menu-list">
          {categoryData.map((category, idx) => (
            <li key={idx}>
              <strong>{category.name}</strong>
              <ul>
                {category.subcategories.map((sub, i) => (
                  <li
                    key={i}
                    onClick={() => handleCategoryClick(category.name, sub)}
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`lnb-dim ${isCategoryOpen ? "show" : ""}`}
        onClick={() => setIsCategoryOpen(false)}
      />
    </>
  );
};

export default LNB;
