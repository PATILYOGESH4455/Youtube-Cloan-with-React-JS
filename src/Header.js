import React, {useState} from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcons from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

export function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="Header">
      <div class="header__left">
        <MenuIcon />
        <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
        </Link>
        
      </div>
      
      <div onChange={e => setInputSearch(e.target.value)} value={inputSearch} className="header_input">
        <input placeholder="Search" type="text" />
        <Link to={`/search/${inputSearch}`} >
          <SearchIcon className="header_inputButton" />

        </Link>
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
