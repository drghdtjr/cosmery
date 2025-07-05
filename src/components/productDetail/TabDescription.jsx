import React from "react";
import styles from "./productDetail.module.css";
const TabDescription = () => {
  return (
    <div className={styles.tabDescriptionWrapper}>
        <img src="../../../src/assets/productDetail/description1.png" alt="상품설명1" />
        <img src="../../../src/assets/productDetail/description2.png" alt="상품설명2" />
        <img src="../../../src/assets/productDetail/description3.png" alt="상품설명3" />
        <img src="../../../src/assets/productDetail/description4.png" alt="상품설명4" />
        <img src="../../../src/assets/productDetail/description5.png" alt="상품설명5" />
    </div>
  );
};

export default TabDescription;