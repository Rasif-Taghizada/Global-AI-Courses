import React from "react";
import "./Card.css";
import image from "../../assets/artificial-intelligence-big-data.jpg";

const Card = ({ props }) => {
  return (
    <div className="cards">
      {/* {props.map((data , key) => (
        <div className="card-container">
          <img src="" alt="" />
          <div className="card-about">
            <h1 className="card-title"></h1>
            <p></p>
          </div>
        </div>
      ))} */}
      <div>
        <div className="card-container">
          <img src={image} alt="" />
          <div className="card-about">
            <h1 className="card-title">
              Introduction to AI, Robotics and Data
            </h1>
            <p>
              Discover the fascinating new opportunities opened up by modern
              digital and AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
