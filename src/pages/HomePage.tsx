import React from 'react';
import { Link } from 'react-router-dom'
import { TouchableOpacity } from 'react-native-web';
import './styles.css'; // Import CSS file
import Testing from './Testing';


function HomePage() {
  return (
    <div className="app-container">
      
      <div className="Top-bar">
        <div className="top-bar-item-left">
          <b>OREGON TURTLES</b>
        </div>




        <div className='top-bar-right-item'>
          <Link to ="/testing">
          <button><b> REGISTER</b>
          </button>
          </Link>
        </div>
        <div className='top-bar-right-item'>
          <b>LOG IN</b>
        </div>
        <div className='top-bar-right-item'>
          <b>MENU</b>
        </div>
      </div>

      {/* <div className='centered-text'>
        <div className='Header-text'> Oregon Turtles</div>
        <div className='spacer'></div>
        <p>Welcome! Oregon’s native freshwater turtles need your help! At this website you can learn more about turtles in our state, why our native species are in trouble, and what you can do to help. You can also download the Oregon Turtles App to help researchers keep track of turtles across the state by reporting your observations of turtles, or use the online reporting tool.</p>
        <div className='spacer'></div>
        <p>This website was developed by Western Oregon University, the Port of Portland, and the Oregon Native Turtle Working Group, a group formed to share expertise among various organizations and agencies involved in turtle conservation and to promote appreciation and conservation of turtles by all Oregonians. The Oregon Turtles App and web reporting tool was developed by Western Oregon University in collaboration with the Oregon Department of Fish & Wildlife and the City of Salem, with support from the Oregon Conservation and Recreation Fund.</p>
      </div>

      <div className="spacer"></div>
      <div className="spacer"></div> */}


      <Link to ="/testing">
    <button> please god work</button>
  </Link>

  


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
