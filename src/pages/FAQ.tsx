import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'; // Import CSS file


function HomePage() {
  return (
    <div className="app-container">
      
      <div className="Top-bar">
        <div className="top-bar-item-left">
          <Link to="/">
          <b>OREGON TURTLES</b>
          </Link>
        </div>




        <div className='top-bar-right-item'>
          <Link to ="/register">
          <button><b> REGISTER</b>
          </button>
          </Link>
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
      
    
    <div className='centered-text'>
      <div className='spacer'></div>

      {/* Lmao fix this  */}
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
<div className='spacer'></div>
      
   
      
        <div className='Header-text'> What You Should Know About Turtles</div>
        
        
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

export default HomePage;
