import React, { useState } from 'react';
import moonIcon from '../images/moon.png'; // Import moon icon image
import sunIcon from '../images/sun.png'; // Import sun icon image
import ReactNavBar from '../components/ReactNavBar';

function Theme() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle the state
  };

  return (
    <div className="themeDiv">
      <nav>
        {/* <ReactNavBar/> */}
        <button id="mode-toggle" onClick={toggleDarkMode}>
          <img src={isDarkMode ? moonIcon : sunIcon} alt="Dark Mode Toggle" /> {/* Toggle button icon based on dark mode state */}
        </button>
      </nav>
      
    </div>
  );
}

export default Theme;
