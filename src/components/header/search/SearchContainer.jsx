import React from "react";
import styles from "./SearchContainer.module.css";
import { useState } from "react";
import SearchBar from "./SearchBar";

const SearchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDelete = (id) => {
    setResults((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSearch = () => {
    if (!keyword.trim()) return;
    // TODO: 검색 API 연동 또는 가짜 데이터 사용
    const dummyResults = [
      { id: 1, name: "검색 결과 1" },
      { id: 2, name: "검색 결과 2" },
    ];
    setResults(dummyResults);
    setIsExpanded(true);
  };
  const handleBarFocus = () => {
    setIsExpanded(true);
  };
  return (
    <div
      className={styles.searchContainer}
      onMouseLeave={() => setIsExpanded(false)}
      onMouseOver={() => setIsExpanded(true)}
    >
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        onSearch={handleSearch}
        onFocus={handleBarFocus}
        isExpanded={isExpanded}
      />
      <div
        className={`${styles.resultArea} ${
          isExpanded ? styles.expand : styles.collapse
        }`}
      >
        <span>최근 검색어</span>
        {results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <li key={item.id}>
                {item.name}
                <button className={styles.closeButton} onClick={() => (handleDelete(item.id))}>&times;</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.placeholder}>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default SearchContainer;
