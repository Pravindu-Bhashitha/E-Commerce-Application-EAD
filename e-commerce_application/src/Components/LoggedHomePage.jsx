import React, { useEffect } from 'react';
import Good from './Good';
import { items } from '../Items';
import './HomePage.css';
import Topbarwithcart from './Topbarwithcart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoggedHomePage = (props) => {
  const userName = props?.location?.state?.userName || 'Guest';

  useEffect(() => {
    toast.success(`Welcome, ${userName}!`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, [userName]);
  return (
    <div>
      <Topbarwithcart className="cart" />
      <h1>Hi {userName}</h1>
      <div className='good_component'>
        {items.map(item => (
          <Good key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default LoggedHomePage;
