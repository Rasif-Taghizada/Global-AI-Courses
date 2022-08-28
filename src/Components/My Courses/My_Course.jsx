import React, { useState } from "react";
import "./My_Course.css";
import image from "../../assets/AI_Applications_Global_AI_Hub.png";
import Modal from "../Modal/Modal";

const My_Course = ({ props }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="cards">
      <h1 id="My_Courses">My Courses</h1>
      <div>
        {props.map((data, i) => (
          <div className="card-container" key={i}>
            <img src={data.card_image ? data.card_image : image} alt="" />
            <div className="card-about">
              <h1 className="card-title">
                {data.title.length > 30
                  ? data.title.slice(0, 30).concat("...")
                  : data.title}
              </h1>
              <p>
                { data.description && data.description.length > 50
                  ? data.description.slice(0, 50).concat("...")
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              </p>
              <button
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Get course
              </button>
            </div>
          </div>
        ))}
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default My_Course;
