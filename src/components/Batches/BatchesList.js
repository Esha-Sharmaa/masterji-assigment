import { useState, useEffect } from "react";
import batchesData from "../../utils/batchesdata";
import Table from "./Table";
import Pagination from "./Pagination";

const BatchesList = () => {
  const [search, setSearch] = useState("");
  const [batches, setBatches] = useState(batchesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [paginatedBatches, setPaginatedBatches] = useState([]);

  useEffect(() => {
    updatePaginatedBatches();
  }, [batches, currentPage, rowsPerPage]);

  const updatePaginatedBatches = () => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    setPaginatedBatches(batches.slice(start, end));
  };

  const handleSearch = () => {
    if (search === "") setBatches(batches);
    const searchResult = batchesData.filter((batch) =>
      batch.name.toLowerCase().includes(search.toLowerCase())
    );
    setBatches([...searchResult]);
    setCurrentPage(1);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(batches.length / rowsPerPage))
    );
  };

  return (
    <div className="batches-container">
      <h1 className="heading">Chai Aur Code</h1>
      <div className="course-container">
        <h2>Batches</h2>
        <p>Create learner’s batch and share information at the same time.</p>
        <div>
          <input
            className="search-input"
            type="text"
            placeholder="Search by Title (alt+k or cmd+k)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
          <Table paginatedBatches={paginatedBatches} />
          <Pagination
            rowsPerPage={rowsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            currentPage={currentPage}
            batchesLength={batches.length}
          />
        </div>
      </div>
    </div>
  );
};

export default BatchesList;
