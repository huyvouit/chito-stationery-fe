import React from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ pageCount, handleClick, query }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      onPageChange={handleClick}
      breakLabel="..."
      nextLabel={">"}
      previousLabel={"<"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link page-nav-number"}
      containerClassName={"pagination  page-nav-custom"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link page-nav-number"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link page-nav-number"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link page-nav-number"}
      activeLinkClassName={"page-active"}
      disabledClassName={"disabled"}
      forcePage={query?.page - 1 || 0}
    />
  );
};
