// import React, { useState } from "react";
// import Good from "./Good";
// import { items } from "../Items";
// import "./LoggedHome.css";
// import Topbarwithcart from "./Topbarwithcart";
// import { useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const itemsPerPage = 2;
// const LoggedHomePage = (props) => {
//   const params = useParams();
//   const username = params.username;
//   console.log(username);
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div className="Logged-Home-Whole-Component">
//       <ToastContainer />
//       <Topbarwithcart className="cart" />
//       <h1 className="welcome-message">Welcome Back {username}</h1>
//       <div className='good_component'>
//         {currentItems.map(item => (
//           <Good key={item.id} data={item} />
//         ))}
//       </div>
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//           (page) => (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`page-number-button ${
//                 page === currentPage ? "active" : ""
//               }`}
//             >
//               {page}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoggedHomePage;
// import React, { useState } from "react";
// import Good from "./Good";
// import { items } from "../Items";
// import "./LoggedHome.css"; // Import the updated CSS
// import Topbarwithcart from "./Topbarwithcart";
// import { useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const itemsPerPage = 2;
// const LoggedHomePage = (props) => {
//   const params = useParams();
//   const username = params.username;

//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(Math.ceil(items.length / itemsPerPage));

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//   const generatePaginationLinks = (currentPage = 1, totalPages = 1) => {
//     const paginationLinks = [];

//     // Previous button
//     paginationLinks.push(
//       <button className="page-number-button" key="previous" onClick={() => handlePageChange(currentPage - 1)}>
//         « Previous
//       </button>
//     );

//     // First page link
//     paginationLinks.push(<button className="page-number-button" key="1" onClick={() => handlePageChange(1)}>1</button>);

//     // Ellipses for middle pages
//     if (totalPages > 4) {
//       paginationLinks.push(<span key="ellipsis">…</span>);
//     }

//     // Show up to three pages around the current page
//     const pagesToShow = 3;
//     const startPage = Math.max(1, currentPage - pagesToShow);
//     const endPage = Math.min(totalPages, currentPage + pagesToShow);
//     for (let page = startPage; page <= endPage; page++) {
//       paginationLinks.push(
//         <button className="page-number-button" key={page} onClick={() => handlePageChange(page)}>
//           {page}
//         </button>
//       );
//     }

//     // Ellipses for middle pages
//     if (totalPages > 4 && endPage < totalPages - 2) {
//       paginationLinks.push(<span key="ellipsis">…</span>);
//     }

//     // Last page link
//     paginationLinks.push(
//       <button className="page-number-button" key={totalPages} onClick={() => handlePageChange(totalPages)}>
//         {totalPages}
//       </button>
//     );

//     // Next button
//     paginationLinks.push(
//       <button className="page-number-button" key="next" onClick={() => handlePageChange(currentPage + 1)}>
//         Next »
//       </button>
//     );

//     return paginationLinks;
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div className="Logged-Home-Whole-Component">
//       <ToastContainer />
//       <Topbarwithcart className="cart" />
//       <h1 className="welcome-message">Welcome Back {username}</h1>
//       <div className="good_component">
//         {currentItems.map((item) => (
//           <Good key={item.id} data={item} />
//         ))}
//       </div>
//       <div className="pagination">
//         {generatePaginationLinks(currentPage, totalPages)}
//       </div>
//     </div>
//   );
// };

// export default LoggedHomePage;

import React, { useEffect, useState } from "react";
import Good from "./Good";
import { items } from "../Items";
import "./LoggedHome.css"; // Import the updated CSS
import Topbarwithcart from "./Topbarwithcart";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const itemsPerPage = 8;
const LoggedHomePage = (props) => {
  const [productDetails, setProductDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const params = useParams();
  const username = params.username;

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:15510/api/ProductContoller/AllProductDetails"
        );
        const data = await response.json();
        console.log(data);
        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
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

  return (
    <div className="Home-Whole-Component">
      <ToastContainer />
      <Topbarwithcart className="cart" />
      <h1 className="welcome-message">Welcome Back {username}</h1>
      <div className="good_component">
        {currentItems.map((data) => (
          <Good key={data.id} data={data} />
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
