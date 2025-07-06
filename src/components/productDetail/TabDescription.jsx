import React from "react";
import styles from "./productDetail.module.css";
const TabDescription = () => {
  return (
    <div className={styles.tabDescriptionWrapper}>
        <img src="/productDetail/description1.png" alt="상품설명1" />
        <img src="/productDetail/description2.png" alt="상품설명2" />
        <img src="/productDetail/description3.png" alt="상품설명3" />
        <img src="/productDetail/description4.png" alt="상품설명4" />
        <img src="/productDetail/description5.png" alt="상품설명5" />
    </div>
  );
};

export default TabDescription;