import React from 'react'
import {NavLink} from 'react-router-dom'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
        <ul className="page">
          {pageNumbers.map(number => (
            <li  class="nation" key={number}>
              <NavLink className="bling" onClick={() => paginate(number)} to='#'>
                {number}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
  )
}

export default Pagination