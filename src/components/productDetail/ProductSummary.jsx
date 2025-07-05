import React from 'react'
import style from './productDetail.module.css'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'

// 왼쪽 이미지 + 오른쪽 상품 정보
const ProductSummary = ({ data }) => {
  return (
    <div className={style.productSummaryWrapper}>
        <ProductImage data={data}/>
        <ProductInfo data={data}/>
    </div>
  )
}

export default ProductSummary