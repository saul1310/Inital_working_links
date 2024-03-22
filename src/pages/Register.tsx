import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Register() {
  return (<div className="app-container">
      
      <div className="Top-bar">
        <div className="top-bar-item-left">
          <Link to="/">
          <b>OREGON TURTLES</b>
          </Link>
        </div>




        <div className='top-bar-right-item'>
    
        <button> <b> REGISTER</b> </button>

  
     
        </div>
        <div className='top-bar-right-item'>
        
        <Link to ="/login">
          <button><b> LOGIN</b>
          </button>
          </Link>
        </div>
        
        <div className='top-bar-right-item'>
          <b>MENU</b>
        </div>
      </div>


    <div className="navbar-header"> REGISTER</div>
    <div className='spacer'></div>
    <div className='navbar-header'> Create a New Account. </div>
    <div className='yellow-line'></div>
    <p className='inputbox-reg'> Please enter first name.</p>
    
    <div className='inputbox-reg'>
        Please enter first name.
        <input type="text" />
        Please enter last Name.
        <input type="text"/>
        Organization (Optional)
        <input type="text"/>
        Email
        <input type="text"/>
        Phone number (Optional)
        <input type="text"/>
        Password
        <input type="text"/>
        Confrim Password 
        <input type="text"/>
        <div className='spacer'></div>

        <div className='green-box'>
          
          <p>Your personal data is only used to contact you in case your submission needs clarification. Your data will not be given away.</p>
        </div>

      </div>






     




      {/* Bottom Bar */}
      <div className="bottom-bar">
        {/* Add content for the bottom bar */}
        <div className="bottom-bar-content">
          <div className='spacer'></div>
        </div>
      </div>
    </div>
  );
}
