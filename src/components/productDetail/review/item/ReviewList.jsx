import React from "react";
import styles from "./review.module.css";
import reviewData from "./reviewData";

function ReviewItem({ review }) {
  console.log(review);
  return (
    <div className={styles.reviewItem}>
      <div className={styles.reviewItemHeader}>
        {/* 별점 */}
        <div className={styles.reviewItemRating}>
          {Array.from({ length: review.rating }, (_, index) => (
            <img
              key={index}
              src="../../../src/assets/starRating.svg"
              alt="star"
            />
          ))}
        </div>
        {/* 작성 날짜 */}
        <p className={styles.reviewItemDate}>{review.date}</p>
      </div>
      {/* 작성자 */}
      <p className={styles.reviewItemUser}>{review.user}</p>
      <div className={styles.reviewItemContentWrapper}>
        {/* 제목 */}
        <p className={styles.reviewItemTitle}>“{review.title}”</p>
        {/* 본물 */}
        <p>{review.content}</p>
      </div>
      {/* 이미지 */}
      <div className={styles.reviewItemImage}>
        <img src={review.image} alt="reviewImage" />
      </div>
    </div>
  );
};

function ReviewList() {
  return (
    <div>
      {reviewData.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
