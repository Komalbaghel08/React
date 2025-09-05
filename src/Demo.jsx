import React from "react";
import Navbar from "./Demo_Header";
import Footer from "./Demo_footer";
import "./demo.css";
import image from "./assets/images.jpeg";

function App() {
  return (
    <div>
      <Navbar />
      <main className="content">
        <h1>Welcome to My React Website </h1>
        <p>
          This is a sample page with a modern navbar, a footer, and some styled
          content. You can customize it as per your project needs.
        </p> <br /><br />
         {/* <img src={image} alt="React Logo" width="150" /> */}
        <img
        src="https://image.shutterstock.com/image-photo/react-write-on-sticky-notes-260nw-2131042313.jpg"
        alt="React Sticky Notes"
         style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />
      </main>
      <Footer />
    </div>
  );
}

export default App;
