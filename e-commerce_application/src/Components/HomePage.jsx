import React from 'react'
import Good from './Good'
import Topbar from './Topbar'
import { items } from '../Items'
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="Home-Whole-Component">
        <Topbar/>
        <div className='good_component'>
        {items.map(item => (
            <Good key={item.id} data={item} />
        ))}
        </div>
    </div>
  )
}

export default HomePage;

