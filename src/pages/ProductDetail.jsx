import React from 'react'
import BreadCrumb from '../components/productDetail/BreadCrumb.jsx'
import ProductSummary from '../components/productDetail/ProductSummary.jsx'
import ProductList from '../components/productList/ProductList.jsx'
import ProductTabs from '../components/productDetail/ProductTabs.jsx'
import styles from '../components/productDetail/productDetail.module.css'
import { useLocation, useNavigate } from 'react-router-dom'

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;
  
  const handleClose = () => {
    navigate(-1); // 이전 페이지로 돌아가기
  };
  
  if (!data) {
    return <div>상품 정보를 찾을 수 없습니다.</div>;
  }
  return (
    <div className={styles.productDetailWrapper}>
      <BreadCrumb />
      <ProductSummary data={data} />
      <ProductList title="함께보면 좋은 상품" />
      <ProductTabs />
    </div>
  )
}

export default ProductDetail