import React, { useEffect } from 'react'
import CategoryBreadCrumb from '../components/categoryProductList/CategoryBreadCrumb'
import { useParams } from 'react-router-dom';

const CategoryProductList = () => {
  const { category, subcategory } = useParams();
  useEffect(() => {
    console.log(category, subcategory);
  }, [category, subcategory]);
  return (
    <div>
      <CategoryBreadCrumb category={category} subCategory={subcategory} />
      <h2>{category}</h2>
      <CategoryFilterBar />

    </div>
  )
}

export default CategoryProductList