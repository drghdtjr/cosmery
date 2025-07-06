import React, { useState } from "react";
import styled from "styled-components";
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
    <Wrapper
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
      <ResultArea className={isExpanded ? "expand" : "collapse"}>
        <span>최근 검색어</span>
        {results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <li key={item.id}>
                {item.name}
                <CloseButton onClick={() => handleDelete(item.id)}>
                  &times;
                </CloseButton>
              </li>
            ))}
          </ul>
        ) : (
          <Placeholder>검색 결과가 없습니다.</Placeholder>
        )}
      </ResultArea>
    </Wrapper>
  );
};

export default SearchContainer;

// styled-components
const Wrapper = styled.div`
    width: 25.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ResultArea = styled.div`
  position: absolute;
  top: 2.75rem;
  left: 0;
  width: 100%;
  height: 21.875rem;
  background: var(--bg-color3);
  border-left: 1px solid var(--primary-color);
  border-right: 1px solid var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
  overflow: hidden;
  transition: max-height 0.1s ease, padding 0.1s ease, opacity 0.1s ease;

  &.expand {
    max-height: 21.875rem;
    padding: 1.25rem;
    opacity: 1;
  }

  &.collapse {
    max-height: 0;
    padding: 0;
    opacity: 0;
    border: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 0.25rem 0;
    font-size: 0.875rem;
    color: var(--secondary-color);
  }
`;

const Placeholder = styled.p`
  font-size: 0.875rem;
  color: var(--secondary-color);
`;

const CloseButton = styled.button`
  margin-left: 0.625rem;
  font-size: 1rem;
  color: var(--secondary-color);
  background: none;
  border: none;
  cursor: pointer;
`;
