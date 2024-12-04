import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined, ExpnadMoreOutLined }from "@material-ui/icons";



function Sidebar() {
  return (
    <div className="sidebar">
    <SidebarRow src="https://st1.bollywoodlife.com/wp-content/uploads/2020/09/FotoJet382.jpg"
    title="John" />

    <SidebarRow Icon = {LocalHospitalIcon}
    title="Covid-19 Information center"/>

    <SidebarRow Icon = {EmojiFlagsIcon} title="Pages"

    />
    <SidebarRow Icon = {PeopleIcon} title = "Friends"

    />    

    <SidebarRow Icon = { ChatIcon} title = " Messenger"

    />

    <SidebarRow Icon = { StorefrontIcon} title = "MarketPlace"
    />

    <SidebarRow Icon = { VideoLibraryIcon} title = "videos"/>

    <SidebarRow Icon = { ExpandMoreOutlined} title = " MarketPlace"
    />

    </div>
  )
}

export default Sidebar