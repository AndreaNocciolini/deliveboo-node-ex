import React from "react";

function Pagination({ usersPerPage, totalUsers, paginate }) {
    //paginate func is declared in App.js
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }
    return <nav>
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a onClick={() => paginate(number)} href="#!" className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
}

export default Pagination;