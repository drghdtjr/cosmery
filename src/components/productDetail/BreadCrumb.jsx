import React from 'react'
import styles from './productDetail.module.css'

// 네비게이션 경로
const BreadCrumb = () => {
  return (
    <nav className={styles.breadcrumb}>
        <span>홈</span> &gt;
        <span>스킨케어</span> &gt;
        <span>크림</span> 
    </nav>
  )
}

export default BreadCrumb