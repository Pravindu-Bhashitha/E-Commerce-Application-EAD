import React, { useState } from 'react';
import "./Login.css";
import {GrClose} from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoginOpen }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:15510/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_Name: email,
          password: password,
        }),
      });
  
      if (response.ok) {
        // Login successful, navigate to the logged-home page
        navigate('/logged-home');
      } else {
        // Login failed, display an error message
        alert('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-box">
        <button onClick={() => setIsLoginOpen(false)} className='login-box_close'><GrClose/></button>
        <form>
          <table>
            <tr>
              <td><label>Email </label></td>
              <td>:</td>
              <td><input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/></td>
            </tr>
            <br></br>
            <tr>
              <td><label>Password </label></td>
              <td>:</td>
              <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/></td>
            </tr>
          </table>
        </form>
        <button className='login-box_login_btn' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;