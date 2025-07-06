import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import categoryData from "./data/categoryData"; 

const LNB = ({ isCategoryOpen, setIsCategoryOpen }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category, subcategory) => {
    setSelectedCategory(category);
    navigate(`/category-product-list/${category}/${subcategory}`);
  };

  return (
    <LNBWrap>
      <LNBCategoryWrap
        $isActive={isCategoryOpen}
        onMouseLeave={() => setIsCategoryOpen(false)}
      >
        <LNBMainMenu>
          {categoryData.map((category, idx) => (
            <li key={idx}>
              <a onClick={() => handleCategoryClick(category.name, "토너")}>
                {category.name}
              </a>
              <LNBSubMenu>
                {category.subcategories.map((sub, i) => (
                  <li
                    key={i}
                    onClick={() => handleCategoryClick(category.name, sub)}
                  >
                    {sub}
                  </li>
                ))}
              </LNBSubMenu>
            </li>
          ))}
        </LNBMainMenu>
      </LNBCategoryWrap>
    </LNBWrap>
  );
};

export default LNB;

const LNBWrap = styled.div`
  width: 100%;
  z-index: 999;
  background: var(--bg-color1);
`;

const LNBCategoryWrap = styled.div`
  max-height: ${(props) => (props.$isActive ? "62.5rem" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease;
  box-shadow: 0 0 0.1875rem rgba(0, 0, 0, 0.1);
  background: var(--bg-color1);
`;

const LNBMainMenu = styled.ul`
  display: flex;
  gap: 2.5rem;
  padding: 1.875rem 0 2.5rem;
  justify-content: center;

  & > li {
    min-width: 7.5rem;

    & > a {
      font-size: 1.125rem;
      color: var(--text-color);
      display: inline-block;
      margin-bottom: 0.625rem;
      cursor: pointer;
    }
  }
`;

const LNBSubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  & li {
    font-size: 0.8125rem;
    color: var(--secondary-color);
    transition: color 0.2s ease;
    cursor: pointer;

    &:hover {
      color: var(--primary-color);
    }
  }
`;
