import React, { useState } from "react";
import "./categoryProductList.css";
import { productData } from "../data/productData.js";
import Pagination from "./Pagination.jsx";
import AddToCartButton from "../cart/AddToCartButton.jsx";
import WishButton from "../cart/WishButton.jsx";
import Product1 from "../products/Product1.jsx";

const ProductGrid = () => {
  const [sortType, setSortType] = useState("인기순");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const sortedData = [...productData].sort((a, b) => {
    if (sortType === "인기순") return b.sales - a.sales;
    if (sortType === "최신순")
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    return 0;
  });

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirst, indexOfLast);

  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const openWish = () => setShowWish(true);
  const closeWish = () => setShowWish(false);

  return (
    <div className="productGridWrap">
      {showCart && <AddToCartButton onClose={closeCart} />}
      {showWish && <WishButton onClose={closeWish} />}
      <ul className="sortList">
        <li
          className={`sortItem ${sortType === "인기순" ? 'active' : ''}`}
          onClick={() => {
            setSortType("인기순");
            setCurrentPage(1);
          }}
        >
          인기순
        </li>
        <li
          className={`sortItem ${sortType === "최신순" ? 'active' : ''}`}
          onClick={() => {
            setSortType("최신순");
            setCurrentPage(1);
          }}
        >
          최신순
        </li>
      </ul>

      <div className="productListWrap">
        <div className="productList">
          {currentItems.map((product) => (
            <Product1
              key={product.id}
              clickCart={openCart}
              clickWish={openWish}
              data={product}
            />
          ))}
        </div>
      </div>

      <Pagination
        totalItems={sortedData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductGrid;
