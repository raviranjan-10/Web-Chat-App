import React from "react";
import logo from "../Images/welcome.jpg";
function Welcome(){
    return (
        <div className="welcome-container">
            <img className="welcome-logo" src={logo} alt="welcome-logo"></img>
            <p className="welcome-text">View and text directly to people present in the chat rooms.</p>
        </div>
    );
}
export default Welcome;