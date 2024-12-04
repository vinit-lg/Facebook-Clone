import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag"
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutLinedIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon  from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png"
          alt=""
        />
        <div className="header_input">
            <SearchIcon />
            <input placeholder="Search facebook"type="text" />
        </div>
      </div>


      <div className="header_center">
        <div className="header_options header_option--active">
            <HomeIcon fontSize ="large" /> 
        </div>
    
      <div className="header_options">
            <FlagIcon fontSize ="large" /> 
        </div>
        <div className="header_options">
            <SubscriptionsOutlinedIcon fontSize ="large" /> 
        </div>
        <div className="header_options">
            <StorefrontOutLinedIcon fontSize ="large" /> 
        </div>
        <div className="header_options">
            <SupervisedUserCircleIcon fontSize ="large" /> 
        </div>
        </div>

      <div className="header_right">
        <div className="header_info">
            <Avatar />
            <h4>John</h4>
        </div>
        <IconButton>
            <AddIcon />
        </IconButton>
        <IconButton>
            <ForumIcon />
        </IconButton>
        <IconButton>
            <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
            <ExpandMoreIcon />
        </IconButton>

      </div>
    </div>
  );
}

export default Header;
