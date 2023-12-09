import React from 'react'
import Good from './Good'
import Topbar from './Topbar'
import { items } from '../Items'
import "./HomePage.css";

const LoggedHomePage = () => {
  return (
    <div>
        <Topbar/>
        <h1>Hi logged</h1>
        <div className='good_component'>
        {items.map(item => (
            <Good key={item.id} data={item}/>
        ))}
        </div>
    </div>
  )
}

export default LoggedHomePage;