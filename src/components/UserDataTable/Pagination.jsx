import React from 'react'

export default function Pagination({
  meta,
  fetchUsers,
  firstPage,
  prevPage,
  nextPage,
  lastPage
}) {

  const renderPageNumbers = () => {
    let paginationNumbers = [];
    let head = 1;
    let tail = meta.current_page + 2;

    if (meta.current_page > 2) {
      head = meta.current_page - 1;
      tail = meta.current_page + 1;
    }
    if (tail > meta.last_page) {
      tail = meta.last_page;
    }

    for (let i = head; i <= tail; i++) {
      paginationNumbers.push(
        <button key={i} onClick={() => {
          fetchUsers(`${import.meta.env.VITE_API_URL}api/v1/users?page=${i}`);
        }} className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mr-2'>
          {i}
        </button>
      )
    }
    return paginationNumbers;
  }

  return (
    <div className='flex justify-end items-center mt-4'>
      <div className='mr-4'>
        Page {meta.current_page} of {meta.last_page}
      </div>

      <div>
        <button onClick={firstPage} className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mr-2'>
          First
        </button>
        <button onClick={prevPage} className='bg-green-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mr-2'>
          Prev
        </button>
        {renderPageNumbers(meta)}
        <button onClick={nextPage} className='bg-green-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mr-2'>
          Next
        </button>
        <button onClick={lastPage} className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mr-2'>
          Last
        </button>
      </div>
    </div>
  )
}
