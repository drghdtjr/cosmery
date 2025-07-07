// SearchBar.jsx
import React from "react";
import "./search.css";

const SearchBar = ({ keyword, setKeyword, onSearch, onFocus, isExpanded, isMobile, isFullscreen, setIsFullscreen }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };
  
  let wrapperClass = "searchBarWrapper";
  if (isExpanded || (isMobile && isFullscreen)) wrapperClass += " expanded";
  if (isMobile && isFullscreen) wrapperClass += " fullscreen";

  return (
    <div className={wrapperClass}>
      <input
        type="text"
        className="searchInput"
        placeholder="찾으시는 상품을 검색해보세요!"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        style={isMobile && !isFullscreen ? { display: "none" } : {}}
      />
      <button type="button" className="searchButton" onClick={() => {
        if (isMobile && !isFullscreen) {
          setIsFullscreen(true);
        } else {
          onSearch();
        }
      }}>
        <img src="/search.svg" alt="search" />
      </button>
    </div>
  );
};

export default SearchBar;
