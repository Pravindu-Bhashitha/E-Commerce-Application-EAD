import React from 'react';
import "./SignUp.css";
import {GrClose} from "react-icons/gr";

const SignUp = ({ setIsSignUpOpen }) => {
  return (
    <div className="signup-overlay">
      <div className="signup-box">
        <button onClick={() => setIsSignUpOpen(false)} className='signup_close'>
          <GrClose />
        </button>
        <form>
          <table>
            <tr>
              <td><label>First Name</label></td>
              <td>:</td>
              <td><input placeholder='First Name' /></td>
            </tr>
            <tr>
              <td><label>Last Name</label></td>
              <td>:</td>
              <td><input placeholder='Last Name' /></td>
            </tr>
            <tr>
              <td><label>Email</label></td>
              <td>:</td>
              <td><input placeholder='Email' /></td>
            </tr>
            <tr>
              <td><label>Phone Number</label></td>
              <td>:</td>
              <td><input placeholder='Phone Number' /></td>
            </tr>
            <tr>
              <td><label>Password</label></td>
              <td>:</td>
              <td><input placeholder='Password' /></td>
            </tr>
          </table>
        </form>

        <button className='signup-box_signup_btn'>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
