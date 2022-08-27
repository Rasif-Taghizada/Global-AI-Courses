import React from "react";
import "./Header.css";
import icon from "../../assets/logo.png";
import headerImage from "../../assets/ai_in_education.jpg";
import partners1 from "../../assets/google.png.webp";
import partners2 from "../../assets/amazon.png.webp"
import partners3 from "../../assets/aibs-beyaz.png.webp"
import partners4 from "../../assets/uipath.png.webp"
import partners5 from "../../assets/tata-logo.png.webp"
import partners6 from "../../assets/aa-logo.png.webp"

const Header = () => {
  return (
    <div className="header">
      <div className="nav-container">
        <div className="nav-content">
          <img src={icon} alt="" />
          <ul className="page-list">
            <li>Home</li>
            <li>About</li>
            <li>My Courses</li>
            <li>Pages</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="user-login">
          <p>Log in </p>
          <button>Join now</button>
        </div>
      </div>
      <div className="header-container">
        <div className="head-content">
          <div className="header-left-content">
            <h1>Education</h1>
            <p>
              Get access to world-class learning programs and courses
              co-produced by globally leading tech firms, universities and
              education providers. Follow effective learning paths to boost your
              professional career in the future workplace.
            </p>
          </div>
          <div className="header-right-content">
            <img src={headerImage} alt="" />
          </div>
        </div>
      </div>
      <div className="header-bottom-container">
        <div className="head-bottom">
          <h2>Global education partners</h2>
          <div className="partner-areas">
            <img src={partners1} alt="" />
            <img src={partners2} alt="" />
            <img src={partners3} alt="" />
            <img src={partners4} alt="" />
            <img src={partners5} alt="" />
            <img src={partners6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
