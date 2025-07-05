import React from 'react'
import CategoryBreadCrumb from '../components/categoryProductList/CategoryBreadCrumb'
import { useParams } from 'react-router-dom';

const CategoryProductList = () => {
  const { category, subcategory } = useParams();
  return (
    <div>
      <CategoryBreadCrumb category={category} subCategory={subcategory} />
    </div>
  )
}

export default CategoryProductList