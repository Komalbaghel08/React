import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const pageStyle = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
    minHeight: '100vh',
    padding: '20px',
  
  };

  return (
    <div style={pageStyle}>
      <h1>{darkMode ? 'Dark Mode Activated' : 'Dark Mode Not Activated'}</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;
