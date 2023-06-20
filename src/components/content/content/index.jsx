import React from "react";
import { SlOptions } from "react-icons/sl";
import "./style.css";

const PostContent = () => {
  return (
    <>
      <div className="post-content-area">
        <div className="post-content-header">
          <div className="content-option">
            <SlOptions />
          </div>
        </div>
        <div className="post-content-posted">
          <div className="post-content-posted-pic">
            <picture>
              <img src="./profile/image.png" alt="" />
            </picture>
          </div>
          <div className="post-content-posted-name">
            <h4>Theresa Steward</h4>
            <p>01 hour ago</p>
          </div>
        </div>
        <div className="post-content">
          <p>
            What did the Dursleys care if Harry lost his place on the House
            Quidditch team because he hadn’t practiced all summer? What was it
            to the Dursleys if Harry went back to school without any of his
            homework done? The Dursleys were what wizards called Muggles (not a
            drop of magical blood in their veins).
          </p>
        </div>
      </div>
      <div className="post-content-area">
        <div className="post-content-header">
          <div className="content-option">
            <SlOptions />
          </div>
        </div>
        <div className="post-content-posted">
          <div className="post-content-posted-pic">
            <picture>
              <img src="./profile/image.png" alt="" />
            </picture>
          </div>
          <div className="post-content-posted-name">
            <h4>Theresa Steward</h4>
            <p>01 hour ago</p>
          </div>
        </div>
        <div className="post-content">
          <p>
            What did the Dursleys care if Harry lost his place on the House
            Quidditch team because he hadn’t practiced all summer? What was it
            to the Dursleys if Harry went back to school without any of his
            homework done? The Dursleys were what wizards called Muggles (not a
            drop of magical blood in their veins).
          </p>
          <picture>
            <img src="./post/image.png" alt="" />
          </picture>
        </div>
      </div>
    </>
  );
};

export default PostContent;
