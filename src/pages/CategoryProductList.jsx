import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryBreadCrumb from "../components/categoryProductList/CategoryBreadCrumb.jsx";
import CategoryFilterBar from "../components/categoryProductList/CategoryFilterBar.jsx";
import categoryData from "../components/data/categoryData.js";
import ProductGrid from "../components/categoryProductList/ProductGrid.jsx"


const CategoryProductList = () => {
  const { category, subcategory } = useParams();

  useEffect(() => {
    console.log(category, subcategory);
  }, [category, subcategory]);

  const subCategoryList = categoryData[category]?.subCategory || [];

  return (
    <div>
      <CategoryBreadCrumb category={category} subCategory={subcategory} />
      <h2>{category}</h2>
      <CategoryFilterBar
        subCategoryInfo={subCategoryList}
        selectedSubcategory={subcategory}
      />
      <ProductGrid />
    </div>
  );
};

export default CategoryProductList;
