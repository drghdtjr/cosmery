import React from "react";
import './rating.css'
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
      <div className="starRating">{stars}</div>
  );
};

export default StarRating;
