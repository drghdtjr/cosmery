import React from 'react'
import styles from './productDetail.module.css'

const ProductImage = ({ data }) => {
  return (
    <div className={styles.productImageWrapper}>
        <img src={data.image} alt="상품 이미지" />
    </div>
  )
}

export default ProductImage