import React from 'react';
import Card from "./Child";
import './props.css';
import Img1 from '../assets/download (1).jpeg';
import Img2 from '../assets/download (2).jpeg';
import Img3 from '../assets/download.jpeg';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="heading">Our Team</h1>
      <div className="card-wrapper">
        <Card 
          name="Aman Verma" 
          role="Frontend Developer" 
          img={Img1}
        />
        <Card 
          name="Priya Sharma" 
          role="UI/UX Designer" 
          img={Img2}
        />
        <Card 
          name="Ravi Kumar" 
          role="Backend Developer" 
          img={Img3}
        />
      </div>
    </div>
  );
};

export default App;