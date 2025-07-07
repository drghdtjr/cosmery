import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import "./search.css";

const SearchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDelete = (id) => {
    setResults((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSearch = () => {
    if (!keyword.trim()) return;
    const dummyResults = [
      { id: 1, name: "검색 결과 1" },
      { id: 2, name: "검색 결과 2" },
    ];
    setResults(dummyResults);
    setIsExpanded(true);
    if (isMobile) setIsFullscreen(true);
  };

  const handleBarFocus = () => {
    setIsExpanded(true);
    if (isMobile) setIsFullscreen(true);
  };

  const handleBack = () => {
    setIsFullscreen(false);
    setIsExpanded(false);
  };

  // Wrapper className 조합
  let wrapperClass = "searchWrapper";
  if (isMobile) wrapperClass += " mobile";
  if (isMobile && isFullscreen) wrapperClass += " fullscreen";

  return (
    <div
      className={wrapperClass}
      onMouseLeave={() => !isMobile && setIsExpanded(false)}
      onMouseOver={() => !isMobile && setIsExpanded(true)}
    >
      {isMobile && isFullscreen && (
        <button className="search-back-btn" onClick={handleBack}>&larr;</button>
      )}
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        onSearch={handleSearch}
        onFocus={handleBarFocus}
        isExpanded={isExpanded || (isMobile && isFullscreen)}
        isMobile={isMobile}
        isFullscreen={isFullscreen}
        setIsFullscreen={setIsFullscreen}
      />
      <div className={`searchResultArea ${isExpanded ? "expand" : "collapse"}`}>
        <span>최근 검색어</span>
        {results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <li key={item.id}>
                {item.name}
                <button className="searchCloseButton" onClick={() => handleDelete(item.id)}>
                  &times;
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="searchPlaceholder">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default SearchContainer;
