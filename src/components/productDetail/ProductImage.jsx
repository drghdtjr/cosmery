import React from 'react'
import styles from './productDetail.module.css'

const ProductImage = () => {
  return (
    <div className={styles.productImageWrapper}>
        <img src="../../../src/assets/placeholder-image.webp" alt="상품 이미지" />
    </div>
  )
}

export default ProductImage