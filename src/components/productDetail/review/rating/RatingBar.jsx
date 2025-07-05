import React from "react";
import styles from "./rating.module.css";

const RatingBar = ({ score, count, total }) => {
  const ratio = count / total;
  return (
    <div className={styles.ratingBar}>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ height: `${ratio * 100}%` }} />
      </div>
      <div className={styles.label}>{score}점</div>
    </div>
  );
};

export default RatingBar;
