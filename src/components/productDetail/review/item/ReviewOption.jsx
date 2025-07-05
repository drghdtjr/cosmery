import React, { useState } from "react";
import styles from "./review.module.css";

const ReviewOption = () => {  
  const [listActive, setListActive] = useState('latest');
  return (
    <ul className={styles.reviewOption}>
      <li className={`${styles.reviewOptionItem} ${styles.active}`} onClick={() => setListActive('latest')}>최신순</li>
      <li className={`${styles.reviewOptionItem} ${styles.active}`} onClick={() => setListActive('rating')}>별점순</li>
    </ul>
  );
};

export default ReviewOption;
