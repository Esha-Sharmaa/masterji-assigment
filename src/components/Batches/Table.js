const Table = ({ paginatedBatches }) => {
  return (
    <div className="table-container">
      <table className="batches-table">
        <thead className="batches-table-head">
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Price</th>
            <th>Validity/Expiry</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="batches-table-body">
          {paginatedBatches.map((batch) => (
            <tr key={batch.id}>
              <td className="batch-title">
                <img className="batch-img" src={batch.imageUrl} alt="batch" />
                <p>{batch.name}</p>
              </td>
              <td className="batch-text">{batch.startDate}</td>
              <td className="batch-text">{batch.endDate}</td>
              <td className="batch-text"> {batch.price}</td>
              <td className="batch-text">{batch.validity}</td>
              <td>
                <span
                  className={`status ${
                    batch.status === "published" ? "published" : "unpublished"
                  }`}
                >
                  {batch.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
