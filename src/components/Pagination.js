import React from "react";
import "../styles/Pagination.css";

function Pagination({ page, setPage }) {
  function prevPage() {
    if (page <= 1) {
      return setPage(1);
    } else {
      return setPage(page - 1);
    }
  }
  return (
    <div className="pagination">
      <button className="films__btn" onClick={() => prevPage()}>
        Previous
      </button>
      <button className="films__btn" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
