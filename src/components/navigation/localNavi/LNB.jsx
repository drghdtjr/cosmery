import React, { useState } from "react";
import styles from "./lnb.module.css";
import { useNavigate } from "react-router-dom";
import categoryData from "../../data/categoryData";

const LNB = ({ isCategoryOpen, setIsCategoryOpen }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category, subcategory) => {
    setSelectedCategory(category);
    navigate(`/category-product-list/${category}/${subcategory}`);
  };

  return (
    <div className={styles.lnbWrap}>
      <div
        className={`${styles.lnbCategoryWrap} ${isCategoryOpen ? styles.active : ""}`}  
        onMouseLeave={() => setIsCategoryOpen(false)}
      >
        <ul className={styles.lnbMainMenu}>
          {categoryData.map((category, idx) => (
            <li key={idx}>
              <a onClick={() => handleCategoryClick(category.name, "토너")}>{category.name}</a>
              <ul className={styles.lnbSubMenu}>
                {category.subcategories.map((sub, i) => (
                  <li key={i} onClick={() => handleCategoryClick(category.name, sub)}>{sub}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LNB;
