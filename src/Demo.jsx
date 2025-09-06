import React from "react";
import Navbar from "./Demo_Header";
import Footer from "./Demo_footer";
import "./demo.css";

function App() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://image.shutterstock.com/image-photo/react-write-on-sticky-notes-260nw-2131042313.jpg"
          alt="React Sticky Notes"
          className="hero-img"
        />
        <div className="hero-content">
          <h1>Welcome to My React Website</h1>
          <p>
            This is a sample page with a modern navbar, a footer, and some styled
            content. You can customize it as per your project needs.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
