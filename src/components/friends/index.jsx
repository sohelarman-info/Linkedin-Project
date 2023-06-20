import React from "react";
import "./style.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";

const Friends = () => {
  return (
    <div className="friends-wrapper">
      <div className="friends-header">
        <BsFillPeopleFill />
        <h3>firends</h3>
      </div>
      <div className="friends-user-area">
        <div className="friends-user">
          <div className="friends-user-pic">
            <picture>
              <img src="./profile/image.png" alt="" />
            </picture>
          </div>

          <div className="friends-user-name">
            <h4>Dmitry Kargaev</h4>
            <p>Web Developer</p>
          </div>
        </div>
        <div className="friends-user-option">
          <SlOptionsVertical />
        </div>
      </div>
      <div className="friends-user-area">
        <div className="friends-user">
          <div className="friends-user-pic">
            <picture>
              <img src="./profile/image.png" alt="" />
            </picture>
          </div>

          <div className="friends-user-name">
            <h4>Sohel Arman</h4>
            <p>Web Developer</p>
          </div>
        </div>
        <div className="friends-user-option">
          <SlOptionsVertical />
        </div>
      </div>
      <div className="friends-user-area">
        <div className="friends-user">
          <div className="friends-user-pic">
            <picture>
              <img src="./profile/image.png" alt="" />
            </picture>
          </div>

          <div className="friends-user-name">
            <h4>Sohel Arman</h4>
            <p>Web Developer</p>
          </div>
        </div>
        <div className="friends-user-option">
          <SlOptionsVertical />
        </div>
      </div>
    </div>
  );
};

export default Friends;
