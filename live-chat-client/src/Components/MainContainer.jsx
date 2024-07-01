import React from "react";
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";
import "./mystyles.css";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import { Outlet } from "react-router-dom";

// Side bar and chat section container
function MainContainer(){
    return(
        <div className="main-container">
            <SideBar />
            <Outlet />
        </div>
    );
}
export default MainContainer;