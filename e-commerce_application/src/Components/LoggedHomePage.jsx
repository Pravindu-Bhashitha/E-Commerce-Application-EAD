import React, { useState } from "react";
import Good from "./Good";
import { items } from "../Items";
import "./LoggedHome.css";
import Topbarwithcart from "./Topbarwithcart";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const itemsPerPage = 8;
const LoggedHomePage = (props) => {
  const params = useParams();
  const username = params.username;
  console.log(username);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="Logged-Home-Whole-Component">
      <ToastContainer />
      <Topbarwithcart className="cart" />
      <h1 className="welcome-message">Welcome Back {username}</h1>
      <div className='good_component'>
        {currentItems.map(item => (
          <Good key={item.id} data={item} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`page-number-button ${
                page === currentPage ? "active" : ""
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default LoggedHomePage;
