import React from "react";
import Slider from "../components/slide/Slider.jsx";
import ProductList from "../components/productList/ProductList.jsx";
import PromotionList from "../components/productList/PromotionList.jsx";
import CategoryRecList from "../components/productList/CategoryRecList.jsx";
import InfluencerAd from "../components/productList/InfluencerAd.jsx";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Slider />
      <ProductList title="추천상품" />
      <PromotionList />
      <CategoryRecList />
      <InfluencerAd />
      <ProductList title="HOT한 아이템만 모아봤어요" />
    </div>
  );
};

export default Home;
