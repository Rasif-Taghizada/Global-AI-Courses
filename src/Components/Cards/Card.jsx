import React, { useState } from "react";
import "./Card.css";
import image from "../../assets/artificial-intelligence-big-data.jpg";
import Modal from "../Modal/Modal";

const Card = ({ props }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="cards">
      <h1>All Courses</h1>
      <div>
        {props.map((data, i) => (
          <div className="card-container" key={i}>
            <img src={image} alt="" />
            <div className="card-about">
              <h1 className="card-title">
                {data.title.rendered.length >= 30
                  ? data.title.rendered.slice(0, 30).concat("...")
                  : data.title.rendered}
              </h1>
              <p>
                {data.slug
                  ? data.slug
                  : "Discover Python, one of the most powerful programming languages."}
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

export default Card;
