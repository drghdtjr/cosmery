// components/search/SearchBar.jsx
import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ keyword, setKeyword, onSearch, onFocus, isExpanded }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };
  return (
    <div
      className={`${styles.headSearch} ${
        isExpanded === true ? styles.active : ""
      }`}
    >
      <input
        type="text"
        placeholder="찾으시는 상품을 검색해보세요!"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
      />
      <button type="button" onClick={onSearch}>
        <img src="../../../src/assets/search.svg" alt="search" />
      </button>
    </div>
  );
};

export default SearchBar;
