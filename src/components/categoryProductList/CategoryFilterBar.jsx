import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const CategoryFilterBar = ({ subCategoryInfo, selectedSubcategory }) => {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <FilterBar>
      {subCategoryInfo.map((subCategory, index) => (
        <CategoryButton
          key={index}
          type="button"
          active={selectedSubcategory === subCategory}
          onClick={() =>
            navigate(`/category-product-list/${category}/${subCategory}`)
          }
        >
          {subCategory}
        </CategoryButton>
      ))}
    </FilterBar>
  );
};

export default CategoryFilterBar;

const FilterBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border-color2);
`;

const CategoryButton = styled.button`
  display: flex;
  padding: 0.5rem 1.25rem;
  border-radius: 6.25rem;
  border: 1px solid var(--secondary-color);
  background: var(--bg-color1);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--secondary-color);
  flex-shrink: 0;
  width: auto;
  height: auto;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
      background: var(--text-color);
      color: var(--bg-color1);
    `}
`;
