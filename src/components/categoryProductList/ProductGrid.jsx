import React, { useState } from "react";
import styled from "styled-components";
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
    <ProductGridWrap>
      {showCart && <AddToCartButton onClose={closeCart} />}
      {showWish && <WishButton onClose={closeWish} />}
      <SortList>
        <SortItem
          active={sortType === "인기순"}
          onClick={() => {
            setSortType("인기순");
            setCurrentPage(1);
          }}
        >
          인기순
        </SortItem>
        <SortItem
          active={sortType === "최신순"}
          onClick={() => {
            setSortType("최신순");
            setCurrentPage(1);
          }}
        >
          최신순
        </SortItem>
      </SortList>

      <ProductList>
        {currentItems.map((product) => (
          <Product1
            key={product.id}
            clickCart={openCart}
            clickWish={openWish}
            data={product}
          />
        ))}
      </ProductList>

      <Pagination
        totalItems={sortedData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </ProductGridWrap>
  );
};

export default ProductGrid;

const ProductGridWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

const SortList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;
`;

const SortItem = styled.li`
  cursor: pointer;
  color: var(--secondary-color);
  ${({ active }) =>
    active &&
    `
    color: var(--text-color);
  `}
`;

const ProductList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
`;
