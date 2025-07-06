import React from "react";
import styled from "styled-components";

const SearchBar = ({ keyword, setKeyword, onSearch, onFocus, isExpanded }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <Wrapper isExpanded={isExpanded}>
      <Input
        type="text"
        placeholder="찾으시는 상품을 검색해보세요!"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
      />
      <Button type="button" onClick={onSearch}>
        <img src="/search.svg" alt="search" />
      </Button>
    </Wrapper>
  );
};

export default SearchBar;

// styled-components

const Wrapper = styled.div`
  width: 25.125rem;
  height: 2.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  border-bottom-color: var(--text-color);

  ${(props) =>
    props.isExpanded &&
    `
    border-color: var(--primary-color);
    border-bottom-color: var(--border-color2);
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
  `}
`;

const Input = styled.input`
  flex: 1;
  margin-left: 0.625rem;
  border: none;
  outline: none;
  font-size: 0.875rem;
  background: transparent;
`;

const Button = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
