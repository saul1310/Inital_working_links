import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'; // Import CSS file
import {Menu} from './Menu';


function HomePage() {
  return (
    <Menu>
    
    
    

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
      
   
      
        <div className='Header-text'> Oregon Turtles</div>
        <div className='spacer'></div>
        <p>Welcome! Oregon’s native freshwater turtles need your help! At this website you can learn more about turtles in our state, why our native species are in trouble, and what you can do to help. You can also download the Oregon Turtles App to help researchers keep track of turtles across the state by reporting your observations of turtles, or use the online reporting tool.</p>
        <div className='spacer'></div>
        <p>This website was developed by Western Oregon University, the Port of Portland, and the Oregon Native Turtle Working Group, a group formed to share expertise among various organizations and agencies involved in turtle conservation and to promote appreciation and conservation of turtles by all Oregonians. The Oregon Turtles App and web reporting tool was developed by Western Oregon University in collaboration with the Oregon Department of Fish & Wildlife and the City of Salem, with support from the Oregon Conservation and Recreation Fund.</p>

        <div className='spacer'></div>
        <div className='spacer'></div>
        <div className="button-group">
        <Link to="https://www.cityofsalem.net/" target="_blank">
        <button> <b>City of Salem</b></button>
        
      </Link>
      <Link to="http://www.wou.edu/" target="_blank">
        <button> <b>Western Oregon University</b></button>
        
      </Link>
      <Link to="http://www.dfw.state.or.us/" target="_blank">
        <button> <b> Oregon Fish and Wildlife</b></button>
        
      </Link>

      <Link to ="https://www.oregonisalive.org/" target="_blank">
        <button><b> Oregon conservation</b> </button>
      </Link>

      </div>
      <div className='spacer'> </div>
      <div className='spacer'> </div>
      <div className='Header-text'> The Oregon Native Turtle Working Group</div>
      <div className='spacer'> </div>
      <div className='spacer'> </div>
      <div className='button-group'>
      <Link to ="http://www.oregonzoo.org/" target="_blank">
        <button><b> Oregon Zoo</b> </button>
      </Link>
      <Link to ="https://www.columbiaslough.org/" target="_blank">
        <button><b> Columbia Slough</b> </button>
      </Link>
      <Link to ="https://www.fs.fed.us/" target="_blank">
        <button><b> Forest Service</b> </button>
      </Link>
      <Link to ="http://www.oregonmetro.gov/" target="_blank">
        <button><b> Metro</b> </button>
      </Link>
      
      <Link to ="https://www.portlandoregon.gov/parks/" target="_blank">
        <button><b> Portland parks and Rec</b> </button>
      </Link>
      
      <Link to ="http://www.portofportland.com/" target="_blank">
        <button><b> Port of Portland </b> </button>
      </Link>
      
      <Link to ="http://www.mcdd.org/" target="_blank">
        <button><b> MCDD</b> </button>
      </Link>
      
      <Link to ="http://www.cleanwaterservices.org/" target="_blank">
        <button><b> Clean Water Services </b> </button>
      </Link>
      

      
      
      
        </div>
      <div className='transparent-div'>
        <Link to="/report">
          <b> Report A Turtle</b>
        </Link>
        
      </div>
      <div className='spacer'></div>

      <div className='t-div-container'>
        < div className='transparent-div-small'>
          <Link to="/turtlefaq"> <b>Turtle FAQ</b></Link> </div>
        < div className='transparent-div-small'> <Link to =
        "howtohelp"> <b>How to Help</b></Link> </div>
        < div className='transparent-div-small'><Link to='/support'> <b> Support</b></Link> </div>
        < div className='transparent-div-small'><Link to="/species"> <b> Species</b></Link> </div>
        < div className='transparent-div-small'> </div>
        < div className='transparent-div-small'> </div>
      
          

  
      </div>
        
      



   




      {/* Bottom Bar */}
      <div className="bottom-bar">
        {/* Add content for the bottom bar */}
        <div className="bottom-bar-content">
          <div className='spacer'></div>
        </div>
      </div>
  
    </Menu>
  );
}

export default HomePage;
