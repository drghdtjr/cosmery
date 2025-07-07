import "./productList.css";
import Product1 from "../products/Product1";
import { useState, useEffect } from "react";
import AddToCartButton from "../cart/AddToCartButton";
import WishButton from "../cart/WishButton";
import { productData } from "../data/productData.js";

const ProductList = ({ title }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5); // 한 화면에 보이는 제품 수
  const [slideGap, setSlideGap] = useState(1.25); // 슬라이드 간격

  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setVisibleCount(1);
      setSlideGap(0.75);
    } else if (width <= 768) {
      setVisibleCount(2);
      setSlideGap(1);
    } else if (width <= 1024) {
      setVisibleCount(3);
      setSlideGap(1.25);
    } else {
      setVisibleCount(5);
      setSlideGap(1.25);
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const clickLeft = () => {
    setCurrentIdx((prev) => Math.max(prev - 1, 0));
  };

  const clickRight = () => {
    const maxSlide = Math.max(productData.length - visibleCount, 0);
    setCurrentIdx((prev) => Math.min(prev + 1, maxSlide));
  };

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const openWish = () => setShowWish(true);
  const closeWish = () => setShowWish(false);

  // 슬라이드 트랙의 transform 계산
  const slideTransform = currentIdx * (12.5 + slideGap);

  return (
    <div className="recPrdtWrapper">
      {showCart && <AddToCartButton onClose={closeCart} />}
      {showWish && <WishButton onClose={closeWish} />}
      <div className="listTop">
        <h2>{title}</h2>
        <div className="slideNav">
          <button type="button" onClick={clickLeft}>
            <img src="/left.svg" alt="button" />
          </button>
          <button type="button" onClick={clickRight}>
            <img src="/right.svg" alt="button" />
          </button>
        </div>
      </div>

      <div className="listWrapper">
        <div
          className="slideTrack"
          style={{
            transform: `translateX(-${slideTransform}rem)`,
          }}
        >
          {productData.map((data, index) => (
            <Product1
              key={index}
              clickCart={openCart}
              clickWish={openWish}
              data={data}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
