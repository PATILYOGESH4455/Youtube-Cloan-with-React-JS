import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcons from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

export function Header() {
  return (
    <div className="Header">
      <div class="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>
      
      <div className="header_input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header_inputButton" />
      </div>
      
      <div className="header_icons">
        <VideoCallIcon id="header_icon" />
        <AppsIcon id="header_icon" />
        <NotificationsIcons id="header_icon" />
        <Avatar
          alt="Remy sharp"
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-lzWyBkjHbtD-m6SAt0_7_s55hEOfRCNC8IN1sAA=s32-c-mo"
        />
      </div>
    </div>
  );
}

export default Header;
