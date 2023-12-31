import React from 'react';
import Good from './Good';
import { items } from '../Items';
import './HomePage.css';
import Topbarwithcart from './Topbarwithcart';

const LoggedHomePage = (props) => {
  console.log(props);
  const userName = props?.location?.state?.userName || 'Guest';
  console.log(userName);
  return (
    <div>   
      <Topbarwithcart className="cart"/>
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
