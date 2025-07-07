import React from "react";
import "./rating.css";

const RatingBar = ({ score, count, total }) => {
  const ratio = count / total;
  return (
    <div className="ratingBar">
      <div className="bar">
        <div className="fill" style={{ height: `${ratio * 100}%` }} />
      </div>
      <div className="label">{score}점</div>
    </div>
  );
};

export default RatingBar;
