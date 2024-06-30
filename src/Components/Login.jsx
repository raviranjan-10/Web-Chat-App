import React from "react";
import logo from "../Images/welcome.jpg";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";

function Login(){
    return (
        <div className="login-container">
            <div className="login-logo">
                <img className="welcome-logo" src={logo} alt="login-logo" />
            </div>
            <div className="login-box">
                <p className="login-header">Login To Your Account</p>
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
                <Button variant="outlined">Login</Button>
                
            </div>
        </div>
    );
}
export default Login;