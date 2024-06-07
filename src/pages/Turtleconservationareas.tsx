import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import CSS file

function FAQ() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="app-container">
      
      <div className="Top-bar">
        <div className="top-bar-item-left">
          <Link to="/">
          <b>OREGON TURTLES</b>
          </Link>
        </div>

        <div className='top-bar-right-item'>
          <Link to="/register">
            <button><b>REGISTER</b></button>
          </Link>
        </div>
        <div className='top-bar-right-item'>
          <Link to="/login">
            <button><b>LOGIN</b></button>
          </Link>
        </div>
        
        {/* Replacing MENU button with popup trigger */}
        <div className='top-bar-right-item'>
          <button onClick={togglePopup} className='popup-button'><b>MENU</b></button>
        </div>
      </div>
      
      <div className='centered-text'>
        <div className='spacer'></div>
        {/* Add your spacer divs as needed */}
        <div className='spacer'></div>
        {/* Add your spacer divs as needed */}
        <div className='spacer'></div>
        
        <div className='Header-text'> Turtle Conservation Areas</div>
        <div className='spacer'></div>

        {showPopup && (
          <div className="popup-menu">
            <div className="popup-inner">
              <div className="menu-items">
              <Link to="/"> <button> <b> Home</b></button></Link>
                <Link to="/report"><button><b>Report a Turtle</b></button></Link>
                <b> IOS Download</b>
                <b> Android Download ( broke ahh)</b>
                <b> FAQ</b>
                <Link to="/howtohelp"><button> <b> How to Help </b></button></Link>
                <Link to="/support"> <button> <b> Support </b> </button></Link>
                <Link to="/Species"> <button><b> Turtle Species</b> </button></Link>
                <a href="BSM.pdf" target="_blank" rel="noopener noreferrer">
                <button><b> Best Managment Practices</b></button> </a>


            
              </div>
              <button onClick={togglePopup} className='popup-close-button'>Close</button>
            </div>
          </div>
        )}
        
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

export default FAQ;
