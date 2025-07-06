import React from "react";
import styles from './rating.module.css'
const StarRating = ({ score }) => {
  const fullStars = Math.floor(score);
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <span key={i}>
        {i < fullStars ? (
          <img src="/starRating.svg" alt="star" />
        ) : (
          <img src="/starRating_empty.svg" alt="star" />
        )}
      </span>
    ));
  return (
      <div className={styles.starRating}>{stars}</div>
  );
};

export default StarRating;
