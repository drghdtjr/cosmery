import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryBreadCrumb from "../components/categoryProductList/CategoryBreadCrumb.jsx";
import CategoryFilterBar from "../components/categoryProductList/CategoryFilterBar.jsx";
import categoryData from "../components/data/categoryData.js";
import ProductGrid from "../components/categoryProductList/ProductGrid.jsx";
import "../components/categoryProductList/categoryProductList.css";



const CategoryProductList = () => {
  const { category, subcategory } = useParams();

  useEffect(() => {
    console.log(category, subcategory);
  }, [category, subcategory]);


  return (
    <div className="categoryProductListWrap">
      <div className="categoryProductListInner">
        <CategoryBreadCrumb category={category} subCategory={subcategory} />
        <h2>{category}</h2>
        <CategoryFilterBar
          subCategoryInfo={categoryData.find(cat => cat.name === category)?.subcategories || []}
          selectedSubcategory={subcategory}
        />
        <ProductGrid />
      </div>
    </div>
  );
};

export default CategoryProductList;
