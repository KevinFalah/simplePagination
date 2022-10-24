import React from 'react'

const Pagination = ({postPerPage, totalPost, changePage}) => {

    const paginationBar = []

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        paginationBar.push(i);
    }

  return (
    <ul className='pagination'>
        {paginationBar.map(number => (
            <li key={number} className="page-item">
              <a href="!#" onClick={() => changePage(number)} className='page-link'>{number}</a>
            </li>
        ))}
    </ul>
  )
}

export default Pagination