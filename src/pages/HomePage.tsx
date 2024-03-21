import React from 'react';
import { Link } from 'react-router-dom'
import { TouchableOpacity } from 'react-native-web';
import './styles.css'; // Import CSS file

function HomePage() {
  return (
    <div className="app-container">
    
    <div>
      {/* Top Bar */}
      <div className="Top-bar">
        {/* Add content for the top bar */}
        <div className="Top-bar-content">
          <p>This is the top bar content.</p>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>

      <Link to ="/testing">
        <button> please god work</button>
      </Link>

      
      
      {/* Main Content */}
      <h1>Home Page</h1>
      {/* Button to navigate to ProfilesPage */}
      <Link to="/profiles">
        <button>Go to Profiles Page</button>
      </Link>
      <div className="spacer"></div>
      
      {/* Button to navigate to NotFoundPage */}
      <Link to="/not-found">
        <button>Go to Not Found Page</button>
      </Link>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        {/* Add content for the bottom bar */}
        <div className="bottom-bar-content">
          <p>This is the bottom bar content.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomePage;
