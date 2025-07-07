import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./categoryProductList.css";

const CategoryFilterBar = ({ subCategoryInfo, selectedSubcategory }) => {
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    console.log(subCategoryInfo, selectedSubcategory);
  }, [subCategoryInfo, selectedSubcategory]);

  return (
    <div className="filterBar">
      {subCategoryInfo.map((subCategory, index) => (
        <button
          key={index}
          type="button"
          className={`categoryButton ${selectedSubcategory === subCategory ? 'active' : ''}`}
          onClick={() =>
            navigate(`/category-product-list/${category}/${subCategory}`)
          }
        >
          {subCategory}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilterBar;
