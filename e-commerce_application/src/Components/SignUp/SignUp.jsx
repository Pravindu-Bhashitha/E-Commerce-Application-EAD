import React, { useState } from "react";
import "./SignUp.css";
import { GrClose } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = ({ setIsSignUpOpen }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleFirstNameChange = (e) => {
    const inputValue = e.target.value;
    // Use a regular expression to allow only letters
    const onlyLettersRegex = /^[A-Za-z]+$/;

    if (onlyLettersRegex.test(inputValue) || inputValue === "") {
      setFirstName(inputValue);
      setFirstNameError(""); // Clear any previous error message
    } else {
      setFirstNameError("Please enter only letters.");
    }
  };

  const handleLastNameChange = (e) => {
    const inputValue = e.target.value;
    const onlyLettersRegex = /^[A-Za-z]+$/;
    if (onlyLettersRegex.test(inputValue) || inputValue === "") {
      setLastName(inputValue);
      setLastNameError(""); // Clear any previous error message
    } else {
      setLastNameError("Please enter only letters.");
    }
  };

  const handleEmailBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) && email !== "") {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    const phoneNumberRegex = /^\d{0,10}$/; // Allow only up to 10 numeric characters

    if (!phoneNumberRegex.test(inputValue)) {
      setPhoneNumberError('Please enter a valid 10-digit phone number.');
    } else {
      setPhoneNumberError('');
      setPhoneNumber(inputValue);
    }
  };

  const handlePhoneNumberBlur = () => {
    const phoneNumberRegex = /^\d{10}$/;

    if (!phoneNumberRegex.test(phoneNumber) && phoneNumber !== '') {
      setPhoneNumberError('Please enter a valid 10-digit phone number.');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleSignUp = async () => {
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      phoneNumberError ||
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !password
    ) {
      toast.error("Please enter values correctly.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
  
    try {
      const response = await fetch("http://localhost:15510/api/users/Add User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        }, 3000);
      } else {
        toast.error("Error adding user", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.error("Error adding user:", response.statusText);
      }
    } catch (error) {
      toast.error("Error during signup", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="signup-overlay">
      <div className="signup-box">
        <button
          onClick={() => setIsSignUpOpen(false)}
          className="signup-box_close"
        >
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
              <td>
                <label>First Name</label>
              </td>
              <td>:</td>
              <td>
                <input
                  value={firstName}
                  onChange={handleFirstNameChange}
                  placeholder="First Name"
                  className={firstNameError ? "error" : ""}
                />
                {firstNameError && (
                  <p className="error-message">{firstNameError}</p>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label>Last Name</label>
              </td>
              <td>:</td>
              <td>
                <input
                  value={lastName}
                  onChange={handleLastNameChange}
                  placeholder="Last Name"
                  className={lastNameError ? "error" : ""}
                />
                {lastNameError && (
                  <p className="error-message">{lastNameError}</p>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label>Email</label>
              </td>
              <td>:</td>
              <td>
                <input
                  value={email}
                  onBlur={handleEmailBlur}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className={emailError ? "error" : ""}
                />
                {emailError && <p className="error-message">{emailError}</p>}
              </td>
            </tr>
            <tr>
              <td>
                <label>Phone Number</label>
              </td>
              <td>:</td>
              <td>
              <input
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  onBlur={handlePhoneNumberBlur}
                  placeholder="Phone Number"
                  className={phoneNumberError ? 'error' : ''}
                />
                {phoneNumberError && (
                  <p className="error-message">{phoneNumberError}</p>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label>Password</label>
              </td>
              <td>:</td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </td>
            </tr>
          </table>
        </form>
        <button className="signup-box_signup_btn" onClick={handleSignUp}>
          Sign Up
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
