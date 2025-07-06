import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CategoryBreadCrumb = ({ category, subCategory }) => {
  const navigate = useNavigate();

  return (
    <BreadcrumbNav>
      <span onClick={() => navigate("/")}>홈</span> &gt;
      <span onClick={() => navigate("/category-product-list")}>
        {category}
      </span>{" "}
      &gt;
      <span onClick={() => navigate("/category-product-list")}>
        {subCategory}
      </span>
    </BreadcrumbNav>
  );
};

export default CategoryBreadCrumb;

const BreadcrumbNav = styled.nav`
  width: 100%;
  padding: 1.25rem 1.5rem 1.25rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--secondary-color);
  border-bottom: 1px solid var(--border-color2);
`;
