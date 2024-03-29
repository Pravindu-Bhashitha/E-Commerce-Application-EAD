import React from 'react';
import "./Good.css";
import {BsCart2} from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Good = ({data}) => {
  const location = useLocation();
  const path = location.pathname;
  const { pathname } = location;

  const handleAddtoCart = () => {
  
    if (path === '/') {
      toast.warn("Please Login or Create an account", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else if (pathname.startsWith('/loggedhome/')) {
      toast.success("Successfully Added to Cart", {
        position: "top-center",
        autoClose: 200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  
  
  return (
    <div className='good_box'>
      <div className='good_box_overall'>
        <img src={data.imgUrl} alt='item_img' className='goodboximg' />
        <p className='good_box_description'>This is a {data.category}</p>
        <p className='good_box_price'>Rs.{data.price}</p>
        <button className='Add_to_cart_btn' onClick={handleAddtoCart}>
          Add to Cart <BsCart2 style={{ fontWeight: "bolder" }} />
        </button>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Good;