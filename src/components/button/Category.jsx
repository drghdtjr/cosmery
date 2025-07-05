import React from "react";
import "./category.css";

const Category = ({ category, isActive, onClick }) => {
  return (
    <button type="button" className={`category-btn ${isActive ? "active" : ""}`} onClick={onClick}>
      {category}
    </button>
  );
};

export default Category;
