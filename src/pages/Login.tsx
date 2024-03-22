import React from 'react';
import { NavLink, Link } from 'react-router-dom';


export default function Login() {
  return (
    <div className="app-container">
      <div className="Top-bar">
        <div className="top-bar-item-left">
          <Link to="/">
            <b>OREGON TURTLES</b>
          </Link>
        </div>
        <div className='top-bar-right-item'>
          <NavLink to="/register"><b>REGISTER</b></NavLink>
        </div>
        <div className='top-bar-right-item'>
          <NavLink to="/login"><b>LOGIN</b></NavLink>
        </div>
        <div className='top-bar-right-item'>
          <b> MENU</b>
        </div>
      </div>
      <div className="navbar-header"> LOGIN</div>
    <div className='spacer'></div>
    <div className='navbar-header'> USE A LOCAL ACCOUNT TO LOG IN.
 </div>
    <div className='yellow-line'></div>
    <div className='inputbox-reg'>
        Email
        <input type="text" />
        Password
        <input type="text" />
        Remember Me?
    </div>
      <div className="bottom-bar">
        {/* Add content for the bottom bar */}
        <div className="bottom-bar-content">
          <div className='spacer'></div>
        </div>
      </div>
    </div>
  );
}
