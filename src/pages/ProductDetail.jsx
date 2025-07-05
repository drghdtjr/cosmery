import React from 'react'
import BreadCrumb from '../components/productDetail/BreadCrumb'
import ProductSummary from '../components/productDetail/ProductSummary'
import ProductCarosel from '../components/productDetail/ProductCarosel'
import ProductTabs from '../components/productDetail/ProductTabs'
import styles from '../components/productDetail/productDetail.module.css'

const ProductDetail = () => {
  return (
    <div className={styles.productDetailWrapper}>
        <BreadCrumb />
        <ProductSummary />
        <ProductCarosel />
        <ProductTabs />
    </div>
  )
}

export default ProductDetail