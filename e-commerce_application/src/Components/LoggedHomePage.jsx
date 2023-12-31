import React from 'react';
import Good from './Good';
import { items } from '../Items';
import './HomePage.css';
import Topbarwithcart from './Topbarwithcart';

const LoggedHomePage = (props) => {
  const username = props.location && props.location.state ? props.location.state.username : '';
  return (
    <div>
      <Topbarwithcart className="cart"/>
      <h1>Hi logged {username}</h1>
      <div className='good_component'>
        {items.map(item => (
          <Good key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default LoggedHomePage;
