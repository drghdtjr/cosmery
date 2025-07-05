import React from "react";
import RatingSummary from "./review/rating/RatingSummary";
import ReviewOption from "./review/item/ReviewOption";
import ReviewList from "./review/item/ReviewList";
import styles from './productDetail.module.css'

const TabReview = () => {
  return (
    <div className={styles.tabReviewWrapper}>
      <div className={styles.tabReviewHeader}>
        <p>
          리뷰를 작성하면 <em>포인트</em>를 드려요!
        </p>
        <div className={styles.tabReviewHeaderImg}>
            <img src="../../../src/assets/nomalReview.png" alt="리뷰1" />
            <img src="../../../src/assets/cameraReview.png" alt="리뷰1" />
        </div>
      </div>
      <RatingSummary />
      <ReviewOption />
      <ReviewList />
    </div>
  );
};

export default TabReview;
