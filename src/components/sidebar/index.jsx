import React from "react";
import "./style.css";
import SidebarProfile from "../sidebarprofile";
import Friends from "../friends";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar-profile-com">
        <SidebarProfile />
      </div>
      <div className="sidebar-users-com">
        <Friends />
      </div>
    </div>
  );
};

export default Sidebar;
