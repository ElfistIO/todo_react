import ReactPaginate from "react-paginate";

export const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<i className="material-icons">chevron_right</i>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<i className="material-icons">chevron_left</i>}
      renderOnZeroPageCount={null}
      className="pagination center-align"
      activeClassName="active"
      pageClassName="waves-effect"
      nextClassName="waves-effect"
      previousClassName="waves-effect"
    />
  );
};
