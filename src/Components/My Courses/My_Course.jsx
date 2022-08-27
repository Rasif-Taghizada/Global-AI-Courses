import React from "react";
import "./My_Course.css";
import image from "../../assets/AI_Applications_Global_AI_Hub.png";

const My_Course = ({ props }) => {
  return (
    <div className="cards">
      <h1 id="My_Courses">My Courses</h1>
      <div>
        {props.map((data, i) => (
          <div className="card-container" key={i}>
            <img src={data.card_image} alt="" />
            <div className="card-about">
              <h1 className="card-title">{data.title}</h1>
              <p>
                {data.description}
              </p>
              <button onClick={data.link}>Get course</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default My_Course;
