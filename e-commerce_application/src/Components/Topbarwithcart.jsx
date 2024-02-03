import React, { useState, useEffect } from "react";
import "./Topbarwithcart.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const Topbarwithcart = () => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showUserProfileMessage, setShowUserProfileMessage] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

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
  const location = useLocation();
  const handleUserProfileClick = async () => {
    try {
      const userId = location.pathname.split("/")[2];
      console.log(userId)
      const response = await fetch(
        `http://localhost:15510/api/Users/UserDetails?id=${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // You may need to include credentials: 'include' if you have CORS issues
          // credentials: 'include',
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUserDetails(data);
        console.log(data)
        setShowUserProfileMessage(true);
      } else {
        // Handle error
        console.error("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
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
          {/* {showMessage && (
            <div className="user-profile-message">View Profile</div>
          )} */}
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
                  <input value={userDetails.firstName} readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Last Name</label>
                </td>
                <td>:</td>
                <td>
                  <input value={userDetails.lastName} readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>:</td>
                <td>
                  <input value={userDetails.email} readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Phone Number</label>
                </td>
                <td>:</td>
                <td>
                  <input value={userDetails.phoneNumber} readOnly />
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
