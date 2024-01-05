import React, { useState } from "react";
import "./Topbarwithcart.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Topbarwithcart = () => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    navigate("/");
    setShowLogoutConfirmation(false);
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  return (
    <div className="topbar">
      <h1 className="topbar_heading">Welcome To Rurazz</h1>
      <div className="buttons">
        <button className="cart">
          <MdOutlineShoppingCart />
        </button>
        <button className="logout_button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {showLogoutConfirmation && (
        <div className="logout-overlay">
          <div className="confirmation-box">
            <p>Are you sure you want to log out?</p>
            <button onClick={handleConfirmLogout}>Yes</button>
            <button onClick={handleCancelLogout}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbarwithcart;
