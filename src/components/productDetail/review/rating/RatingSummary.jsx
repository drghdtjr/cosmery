import React from "react";
import RatingBar from "./RatingBar";
import StarRating from "./StarRating";
import './rating.css'  

const RatingSummary = () => {
  const average = 4.9;
  const satisfaction = 98;
  const ratingCounts = {
    5: 180,
    4: 20,
    3: 10,
    2: 5,
    1: 3,
  };

  const total = Object.values(ratingCounts).reduce((a, b) => a + b, 0);

  return (
    <div className="ratingSummary">
      <div className="left">
        <div className="score">{average}</div>
        <StarRating score={average} />
        <p>
          <strong>{satisfaction}%</strong>의 구매자가 이 상품을 좋아합니다.
        </p>
      </div>
    <div className="right">
        {[5, 4, 3, 2, 1].map((score) => (
          <RatingBar
            key={score}
            score={score}
            count={ratingCounts[score]}
            total={total}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingSummary;
