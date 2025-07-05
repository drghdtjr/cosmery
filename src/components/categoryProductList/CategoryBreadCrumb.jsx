import React from "react";
import styles from "./categoryProductList.module.css";
import { useEffect } from "react";

// 네비게이션 경로
const CategoryBreadCrumb = ({ category, subCategory }) => {
    useEffect(() => {
        console.log(category, subCategory);
    }, [category, subCategory]);
  return (
    <nav className={styles.breadcrumb}>
      <span onClick={() => navigate("/")}>홈</span> &gt;
      <span onClick={() => navigate("/category-product-list")}>{category}</span> &gt;
      <span onClick={() => navigate("/category-product-list")}>{subCategory}</span>
    </nav>
  );
};

export default CategoryBreadCrumb;
