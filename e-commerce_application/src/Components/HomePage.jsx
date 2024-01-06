import React, { useState } from 'react';
import Good from './Good';
import Topbar from './Topbar';
import { items } from '../Items';
import "./HomePage.css";

const itemsPerPage = 8;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="Home-Whole-Component">
      <Topbar />
      <div className='good_component'>
        {currentItems.map(item => (
          <Good key={item.id} data={item} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`page-number-button ${page === currentPage ? 'active' : ''}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
