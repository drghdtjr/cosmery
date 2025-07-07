import React, { useState } from 'react'
import TabDescription from './TabDescription'
import TabReview from './TabReview'
import TabDetailInfo from './TabDetailInfo'
import TabInquiry from './TabInquiry'
import styles from './productDetail.module.css'

const ProductTabs = () => {
    const [selectedTab, setSelectedTab] = useState('description');
    const [listActive, setListActive] = useState('description');
  return (
    <div className={styles.productTabsWrapper}>
        <ul className={styles.tabList}>
            <li onClick={() => {setSelectedTab('description'); setListActive('description')}} className={`${styles.tabItem} ${listActive === 'description' ? styles.active : ''}`}>상품설명</li>
            <li onClick={() => {setSelectedTab('review'); setListActive('review')}} className={`${styles.tabItem} ${listActive === 'review' ? styles.active : ''}`}>리뷰</li>
            <li onClick={() => {setSelectedTab('info'); setListActive('info')}} className={`${styles.tabItem} ${listActive === 'info' ? styles.active : ''}`}>정보</li>
            <li onClick={() => {setSelectedTab('inquiry'); setListActive('inquiry')}} className={`${styles.tabItem} ${listActive === 'inquiry' ? styles.active : ''}`}>문의</li>
        </ul>
        {selectedTab === 'description' && <TabDescription />}
        {selectedTab === 'review' && <TabReview />}
        {selectedTab === 'info' && <TabDetailInfo />}
        {selectedTab === 'inquiry' && <TabInquiry />}
    </div>
  )
}

export default ProductTabs