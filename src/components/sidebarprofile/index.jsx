import React from "react";

import { MdOutlineVerified } from "react-icons/md";
import "./style.css";
import { useSelector } from "react-redux";

const SidebarProfile = () => {
  const user = useSelector((users) => users.loginSlice.login);
  return (
    <div className="sidebar-profile-area">
      <div className="profile-cover">
        <div className="profile-cover-pic">
          <picture>
            <img src="./cover/cover.png" alt="" />
          </picture>
          <div className="cover-profile-pic">
            <picture>
              <img src="./profile/image.png" alt="" />
            </picture>
          </div>
        </div>

        <div className="cover-profile-name-area">
          <div className="cover-profile-name">
            <h4>{user.displayName}</h4>
            <span>
              <MdOutlineVerified />
            </span>
          </div>
          <div className="cover-profile-tagline">
            <p>
              Freelance UX/UI designer, 80+ projects in web design, mobile apps
              (iOS & android) and creative projects. Open to offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
