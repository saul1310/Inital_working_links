import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import CSS file

const Register: React.FC = () => {
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
          <button><b>REGISTER</b></button>
        </div>
        <div className='top-bar-right-item'>
          <Link to="/login">
            <button><b>LOGIN</b></button>
          </Link>
        </div>
        <div className='top-bar-right-item'>
          <button onClick={togglePopup} className='popup-button'><b>MENU</b></button>
        </div>
      </div>

      <div className="navbar-header">REGISTER</div>
      <div className='spacer'></div>
      <div className='navbar-header'>Create a New Account.</div>
      <div className='yellow-line'></div>
      <p className='inputbox-reg'>Please enter first name.</p>

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
        <input type="password"/>
        Confirm Password
        <input type="password"/>
        <div className='spacer'></div>

        <div className='green-box'>
          <p>Your personal data is only used to contact you in case your submission needs clarification. Your data will not be given away.</p>
        </div>
      </div>

      {showPopup && (
        <div className="popup-menu">
          <div className="popup-inner">
            <div className="menu-items">
              <Link to="/"><button><b>Home</b></button></Link>
              <Link to="/report"><button><b>Report a Turtle</b></button></Link>
              <b>IOS Download</b>
              <b>Android Download (broke ahh)</b>
              <b>FAQ</b>
              <Link to="/howtohelp"><button><b>How to Help</b></button></Link>
              <Link to="/support"><button><b>Support</b></button></Link>
              <Link to="/Species"><button><b>Turtle Species</b></button></Link>
              <a href="BSM.pdf" target="_blank" rel="noopener noreferrer">
                <button><b>Best Management Practices</b></button>
              </a>
              <Link to="/Turtleconservationareas"><button><b>Turtle Conservation Areas</b></button></Link>
            </div>
            <button onClick={togglePopup} className='popup-close-button'>Close</button>
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className='spacer'></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
