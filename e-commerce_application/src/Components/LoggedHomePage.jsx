import React from "react";
import Good from "./Good";
import { items } from "../Items";
import "./LoggedHome.css";
import Topbarwithcart from "./Topbarwithcart";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoggedHomePage = (props) => {
  const params = useParams();
  const username = params.username;
  console.log(username);
  return (
    <div className="Logged-Home-Whole-Component">
      <ToastContainer/>
      <Topbarwithcart className="cart" />
      <h1 className="welcome-message">Welcome Back {username}</h1>
      <div className="good_component">
        {items.map((item) => (
          <Good key={item.id} data={item}/>
        ))}
      </div>
    </div>
  );
};

export default LoggedHomePage;



