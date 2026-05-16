function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = []

  let start = Math.max(1, currentPage - 2)
  let end = Math.min(totalPages, currentPage + 2)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return (
    <div className="d-flex justify-content-center align-items-center gap-2 my-4 flex-wrap">
      <button
        className="btn btn-outline-dark"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        «
      </button>

      <button
        className="btn btn-outline-dark"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`btn ${currentPage === page ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="btn btn-outline-dark"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </button>

      <button
        className="btn btn-outline-dark"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  )
}

export default Pagination