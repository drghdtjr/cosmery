import React from "react";
import styles from "./productDetail.module.css";
const TabDescription = () => {
  return (
    <div className={styles.tabDescriptionWrapper}>
        <img src="../../../src/assets/description1.png" alt="상품설명1" />
        <img src="../../../src/assets/description2.png" alt="상품설명2" />
        <img src="../../../src/assets/description3.png" alt="상품설명3" />
        <img src="../../../src/assets/description4.png" alt="상품설명4" />
        <img src="../../../src/assets/description5.png" alt="상품설명5" />
    </div>
  );
};

export default TabDescription;