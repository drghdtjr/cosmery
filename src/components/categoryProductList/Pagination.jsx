import React from "react";
import "./categoryProductList.css";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="paginationWrapper">
      {[...Array(totalPages)].map((_, idx) => {
        const page = idx + 1;
        return (
          <button
            key={page}
            className={`pageButton ${currentPage === page ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
