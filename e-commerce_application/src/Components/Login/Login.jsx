import React, { useState } from "react";
import "./Login.css";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = ({ setIsLoginOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!password || !username) {
      toast.error("Please enter all the values.", {
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
      const response = await fetch("http://localhost:15510/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_Name: username,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const username = data.userName;
        const message = data.message;
        console.log(message);
        console.log(username);
        setTimeout(() => {
          navigate(`/loggedhome/${username}`);
        }, 500); 
      } else {
        toast.error("Invalid email or password. Please try again", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Error during login:", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error("Error during login:", error);
    }
  };
  return (
    <div className="login-overlay">
      <ToastContainer />
      <div className="login-box">
        <button
          onClick={() => setIsLoginOpen(false)}
          className="login-box_close"
        >
          <GrClose />
        </button>
        <form>
          <table>
            <tr>
              <td>
                <label>User Name </label>
              </td>
              <td>:</td>
              <td>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Email"
                />
              </td>
            </tr>
            <br></br>
            <tr>
              <td>
                <label>Password </label>
              </td>
              <td>:</td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </td>
            </tr>
          </table>
        </form>
        <button className="login-box_login_btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
