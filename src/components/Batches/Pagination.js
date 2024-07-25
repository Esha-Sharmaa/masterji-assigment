const Pagination = ({
  rowsPerPage,
  handleRowsPerPageChange,
  handlePrevPage,
  handleNextPage,
  currentPage,
  batchesLength,
}) => {
  const lastPage = Math.ceil(batchesLength / rowsPerPage);
  return (
    <div className="pagination-actions">
      <p> Rows per page</p>
      <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
      <button
        className="pagination-nav"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/${
            currentPage === 1 ? "prevDis.png" : "previous.png"
          }`}
          alt="prev"
          height={"17px"}
        />
      </button>
      <button
        className="pagination-nav"
        onClick={handleNextPage}
        disabled={currentPage === lastPage}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/${
            currentPage === lastPage ? "nextDis.png" : "next.png"
          }`}
          height={"17px"}
          alt="next"
        />
      </button>
    </div>
  );
};

export default Pagination;
