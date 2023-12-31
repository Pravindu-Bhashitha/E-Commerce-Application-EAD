import React, { useState } from 'react';
import "./SignUp.css";
import { GrClose } from "react-icons/gr";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ setIsSignUpOpen }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:15510/api/users/Add User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          First_Name: firstName,
          Last_Name: lastName,
          Email: email,
          Phone_Number: phoneNumber,
          Password: password,
        }),
      });

      if (response.ok) {
        toast.success("Signup Successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          setIsSignUpOpen(false);
        }, 3000)

      } else {
        toast.error('Error adding user', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        console.error('Error adding user:', response.statusText);
      }
    } catch (error) {
      toast.error('Error during signup', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="signup-overlay">
      <div className="signup-box">
        <button onClick={() => setIsSignUpOpen(false)} 
        className='signup-box_close'>
          <GrClose />
        </button>
        {isSignUpSuccess && (
          <div className="signup-success-overlay">
            <p>Sign Up Successfully</p>
          </div>
        )}
        <form>
          <table>
            <tr>
              <td><label>First Name</label></td>
              <td>:</td>
              <td><input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' /></td>
            </tr>
            <tr>
              <td><label>Last Name</label></td>
              <td>:</td>
              <td><input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' required/></td>
            </tr>
            <tr>
              <td><label>Email</label></td>
              <td>:</td>
              <td><input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/></td>
            </tr>
            <tr>
              <td><label>Phone Number</label></td>
              <td>:</td>
              <td><input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' required/></td>
            </tr>
            <tr>
              <td><label>Password</label></td>
              <td>:</td>
              <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/></td>
            </tr>
          </table>
        </form>
        <button className='signup-box_signup_btn' onClick={handleSignUp}>Sign Up</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
