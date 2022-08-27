import React from "react";
import "./Card.css";
import image from "../../assets/artificial-intelligence-big-data.jpg";

const Card = ({ props }) => {
  return (
    <div className="cards">
      <h1>All Courses</h1>
      <div>
        {props.map((data, i) => (
          <div className="card-container" key={i}>
            <img src={image} alt="" />
            <div className="card-about">
              <h1 className="card-title">{data.title.rendered}</h1>
              <p>
                Discover the fascinating new opportunities opened up by modern
                digital and AI
              </p>
              <button>Get course</button>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default Card;
