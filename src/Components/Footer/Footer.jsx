import React from "react";
import icon from "../../assets/logo.png";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-media">
          <img src={icon} alt="" />
          <div className="social-media-icons">
            <p>Follow us on social media</p>
            <span>
              {" "}
              <a href="https://www.facebook.com/globalaihubcommunity/">
                <i className="ri-facebook-line"></i>
              </a>
            </span>

            <span>
              {" "}
              <a href="https://www.instagram.com/globalaihub/">
                <i className="ri-instagram-line"></i>
              </a>
            </span>

            <span>
              {" "}
              <a href="https://www.linkedin.com/company/globalaihub/">
                <i className="ri-linkedin-line"></i>
              </a>
            </span>

            <span>
              {" "}
              <a href="https://twitter.com/globalaihub">
                <i className="ri-twitter-line"></i>
              </a>
            </span>
          </div>
        </div>
        <div className="explore">
            <h4>Explore</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div className="info">
            <h4>Information</h4>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Purchases Guide</a></li>
                <li><a href="#">Terms of Service</a></li>
            </ul>
        </div>
        <div className="get-touch">
            <h4>Get in Touch</h4>
            <p>Address:  Sarıyer/İstanbul, Turkey</p>
            <p>Phone: <a href="#">+90 123 456 78 90</a></p>
            <p>Email: <a href="hello@globalaihub.com">hello@globalaihub.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
