import React from "react";
import { useNavigate } from "react-router-dom";
import "./categoryProductList.css";

const CategoryBreadCrumb = ({ category, subCategory }) => {
  const navigate = useNavigate();

  return (
    <nav className="breadcrumbNav">
      <span onClick={() => navigate("/")}>홈</span> &gt;
      <span onClick={() => navigate("/category-product-list")}>
        {category}
      </span>{" "}
      &gt;
      <span onClick={() => navigate("/category-product-list")}>
        {subCategory}
      </span>
    </nav>
  );
};

export default CategoryBreadCrumb;
