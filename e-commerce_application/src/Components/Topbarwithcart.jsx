import React, { useState } from "react";
import "./Topbarwithcart.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Topbarwithcart = () => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showUserProfileMessage, setShowUserProfileMessage] = useState(false);

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

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  const handleUserProfileClick = () => {
    setShowUserProfileMessage(true);
  };

  const handleUserProfileMessageClose = () => {
    setShowUserProfileMessage(false);
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
        <div
          className="user-profile-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleUserProfileClick}
        >
          <img
            src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt="User_Photo"
            className="user-profile-img"
          ></img>
          {showMessage && (
            <div className="user-profile-message">View Profile</div>
          )}
        </div>
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

      {showUserProfileMessage && (
        <div className="profile-details-overlay">
          <div className="profile-details-box">
            <div
              className="profile-details-close-button"
              onClick={handleUserProfileMessageClose}
            >
              &times;
            </div>
            <table>
              <tr>
                <td>
                  <label>First Name</label>
                </td>
                <td>:</td>
                <td>
                  <input placeholder="First Name" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Last Name</label>
                </td>
                <td>:</td>
                <td>
                  <input placeholder="Last Name" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>:</td>
                <td>
                  <input placeholder="Email" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Phone Number</label>
                </td>
                <td>:</td>
                <td>
                  <input placeholder="Phone Number" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password</label>
                </td>
                <td>:</td>
                <td>
                  <input placeholder="Password" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbarwithcart;
