import React, { useState } from "react";
import chooseImg from "../../assets/why-choose-us.png";
import "./ChooseUs.css";
import ReactPlayer from "react-player";
import icon1 from "../../assets/draft-first-icon.webp";
import icon2 from "../../assets/support-discuss.png";
import icon3 from "../../assets/certification.png";

const FeatureData = [
  {
    title: "Quick Learning",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-contacts-book-line",
  },
];

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <div className="container">
        <div className="choose__content">
          <h2>Why Choose Us</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            mollitia nostrum harum eos praesentium odit a sed quod aut fugit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit omnis, culpa eligendi inventore perspiciatis minus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            cupiditate facilis provident quidem accusamus impedit tenetur
            laboriosam debitis nisi eius!
          </p>
        </div>
        <div className="choose__img">
          {showVideo ? (
            <ReactPlayer
              url="https://youtu.be/eo7az9zA61U"
              controls
              width="100%"
              height="350px"
            />
          ) : (
            <img src={chooseImg} alt="" />
          )}

          {!showVideo && (
            <span className="play__icon">
              <i
                class="ri-play-circle-line"
                onClick={() => setShowVideo(!showVideo)}
              ></i>
            </span>
          )}
        </div>
      </div>

      <div className="feature-section">
        {FeatureData.map((item, index) => (
          <div key={index}>
            <div className="single__feature">
              <div className="single-feature-image">
                <i class={item.icon}></i>
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
