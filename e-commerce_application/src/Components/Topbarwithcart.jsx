import React from "react";
import "./Topbarwithcart.css";
import { MdOutlineShoppingCart } from "react-icons/md";

const Topbarwithcart = () => {
    return (
    <div className="topbar">
      <h1 className="topbar_heading">Welcome To Rurazz</h1>
      <div className="buttons">
        <button className="login_button">
            <MdOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Topbarwithcart;
