import React from "react";
import styles from "./CategoryRecList.module.css";
import Product2 from "../../products/Product2";
import Product2Text from "../../products/Product2Text";
import Category from "../../button/Category";
import { useState } from "react";
import { useEffect } from "react";
import AddToCartButton from "../../cart/addToCartButton/AddToCartButton";
import WishButton from "../../wish/WishButton";
import { productData } from "../../products/productData";
const productText = [
  { number: 1, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
  { number: 2, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
  { number: 3, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
  { number: 4, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
  { number: 5, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
];
const categoryList = [
  "스킨케어",
  "메이크업",
  "바디케어",
  "헤어케어",
  "클린징",
  "퍼퓸&디퓨져",
  "뷰티소품",
];
const categoryProductMap = {
  "스킨케어": [
    { number: 1, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 2, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 3, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 4, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 5, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
  ],
  "메이크업": [
    { number: 1, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 2, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 3, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 4, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 5, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
  ],
  "바디케어": [
    { number: 1, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 2, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 3, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 4, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 5, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
  ],
  "헤어케어": [
    { number: 1, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 2, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 3, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 4, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 5, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
  ],
  "클린징": [
    { number: 1, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 2, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 3, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 4, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 5, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
  ],
  "퍼퓸&디퓨져": [
    { number: 1, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 2, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 3, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 4, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 5, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
  ],
  "뷰티소품": [
    { number: 1, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 2, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 3, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 4, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
    { number: 5, text: "[대용량 500ml]클리어 피니쉬 선젤 SPF50++(1+1 기획전)" },
  ],
};
const CategoryRecList = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoryList[0]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const openWish = () => setShowWish(true);
  const closeWish = () => setShowWish(false);
  useEffect(() => {
    setSelectedCategory(categoryList[0]);
    const intervalId = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % productText.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={styles.categoryRecWrapper}>
      {showCart && <AddToCartButton onClose={closeCart} />}
      {showWish && <WishButton onClose={closeWish} />}
      <h2 style={{ fontSize: "28px", fontWeight: "400" }}>카테고리 별로 추천해드릴게요</h2>
      <div className={styles.categoryRecTop}>
        {categoryList.map((category, index) => (
          <Category
            key={index}
            category={category}
            isActive={selectedCategory === category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIdx(0);
            }}
          />
        ))}
      </div>
      <div className={styles.categoryListWrap}>
        <div
          className={styles.categoryListContainer}
          style={{
            transform: `translateX(-${
              categoryList.indexOf(selectedCategory) * 1200
            }px)`,
          }}
        >
          {categoryList.map((category, catIdx) => (
            <div key={catIdx} className={styles.categoryRecList}>
              <div className={styles.products}>
                <div
                  className={styles.productsContainer}
                  style={{ transform: `translateX(-${currentIdx * 570}px)` }}
                >
                  {productData
                    .map((data, index) => (
                      <Product2 key={index} clickCart={openCart} clickWish={openWish} data={data} />
                    ))}
                </div>
              </div>
              <div className={styles.categoryRecText}>
                {categoryProductMap[category].map((product, index) => (
                  <Product2Text
                    key={index}
                    number={product.number}
                    text={product.text}
                    isActive={currentIdx === index}
                    onClick={() => setCurrentIdx(product.number - 1)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryRecList;
