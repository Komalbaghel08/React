import React from "react";
import "./demo.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Side - Contact Form */}
        <div className="contact-form">
          <h2 className="footer-title">Get in Touch</h2><br />
          <p> Accusantium odio nisi minima distinctio, sunt voluptates odit vero ut soluta fugiat nam? Officiis .</p><br /><br />
  
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="contact-info">
          <h3>Contact Info</h3>
          <h4>Address</h4>
          <p>Bhopal, India</p>
          <h4>Phone</h4>
          <p>+91 987 43210</p>
          <h4>Email</h4>
          <p>komal@email.com</p>
        </div>
      </div>

      {/* <p className="footer-bottom">© 2025 MyReactSite | All Rights Reserved</p> */}
    </footer>
  );
}

export default Footer;
