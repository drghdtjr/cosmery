import React from "react";
import styled from "styled-components";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <PaginationWrapper>
      {[...Array(totalPages)].map((_, idx) => {
        const page = idx + 1;
        return (
          <PageButton
            key={page}
            onClick={() => onPageChange(page)}
            active={currentPage === page}
          >
            {page}
          </PageButton>
        );
      })}
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  margin-top: 1.25rem;
`;

const PageButton = styled.button`
  margin: 0 0.3125rem;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: var(--text-color);

  &:hover {
    text-decoration: underline;
  }
`;
