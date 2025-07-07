import React, { useState, useEffect } from "react";
import "./categoryRecList.css";
import Product2 from "../products/Product2";
import Product2Text from "../products/Product2Text";
import Category from "../button/Category";
import AddToCartButton from "../cart/AddToCartButton";
import WishButton from "../cart/WishButton";
import { productData } from "../data/productData";

const categoryList = [
  "스킨케어",
  "메이크업",
  "바디케어",
  "헤어케어",
  "클렌징",
  "퍼퓸&디퓨져",
  "뷰티소품",
];

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
    const intervalId = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % filteredProductData.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [selectedCategory]);

  useEffect(() => {
    setCurrentIdx(0);
  }, [selectedCategory]);

  const filteredProductData = productData.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="categoryRecWrapper">
      {showCart && <AddToCartButton onClose={closeCart} />}
      {showWish && <WishButton onClose={closeWish} />}
      <h2>
        카테고리 별로 추천해드릴게요
      </h2>
      <div className="categoryRecTop">
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

      <div className="categoryListWrap">
        <div className="categoryRecList">
          <div className="products">
            <div
              className="productsContainer"
              style={{
                transform: `translateX(-${
                  currentIdx * (100 / filteredProductData.length)
                }%)`,
                width: `${filteredProductData.length * 100}%`,
              }}
            >
              {filteredProductData.map((data, index) => (
                <div
                  key={index}
                  style={{
                    width: `${100 / filteredProductData.length}%`,
                    flexShrink: 0,
                  }}
                >
                  <Product2
                    clickCart={openCart}
                    clickWish={openWish}
                    data={data}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="categoryRecText">
            {filteredProductData.map((product, index) => (
              <Product2Text
                key={index}
                number={index + 1}
                text={product.name}
                isActive={currentIdx === index}
                onClick={() => setCurrentIdx(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryRecList;
