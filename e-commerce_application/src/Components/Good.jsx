import React from 'react';
import "./Good.css";
import {BsCart2} from "react-icons/bs";

const Good = ({data}) => {
  return (
    <div className='good_box'>
        <div className='good_box_overall'> 
            <img src={data.imageUrl} alt='item_img' className='goodboximg'></img>
            <p className='good_box_description'>This a {data.category}</p>
            <p className='good_box_price'>Rs.{data.price}</p>
            <button className='Add_to_cart_btn'>Add to Cart <BsCart2 style={{fontWeight:"bolder"}}/></button>
        </div>
    </div>
  )
}

export default Good;