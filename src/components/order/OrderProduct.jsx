import React from 'react'
import styles from './OrderProduct.module.css'

const OrderProduct = ({ name, option, quantity, salePrice }) => {
  return (
    <div className={styles.orderProductWrapper}>
        <div className={styles.orderProductLeft}>
            <img src="/placeholder-image.webp" alt="예시이미지" className={styles.orderProductImg} />
            <div className={styles.orderProductInfo}>
                <span className={styles.orderProductTitle}>{name}</span>
                <span className={styles.orderProductOption}>{option}</span>
            </div>
        </div>
        <div className={styles.orderProductRight}>
            <span className={styles.rightQuantity}>{quantity}</span>
            <span className={styles.rightSalePrice}>{salePrice}원</span>
        </div>
    </div>
  )
}

export default OrderProduct