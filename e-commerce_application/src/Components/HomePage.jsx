import React, { useState, useEffect } from 'react';
import Good from './Good';
import Topbar from './Topbar';
import "./HomePage.css";
import Footer from './Footer';

const itemsPerPage = 8;

const HomePage = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch("http://localhost:15510/api/ProductContoller/AllProductDetails");
        const data = await response.json();
        console.log(data);
        setProductDetails(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProductDetails();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productDetails.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(productDetails.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const targetElement = document.querySelector(".Home-Whole-Component");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="Home-Whole-Component">
      <Topbar />
      <div className='good_component'>
        {currentItems.map((data) => (
          <Good key={data.id} data={data}/>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`page-number-button ${page === currentPage ? 'active' : ''}`}
          >
            {page}
          </button>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
