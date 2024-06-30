import React from "react";
import "./mystyles.css";
import MessageSelf from "./MessageSelf";
import MessageOthers from "./MessageOthers";
import { IconButton } from "@mui/material";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';

//chat section
function ChatArea({props}){
    return (
        <div className="chatArea-container">
            <div className="chatArea-header">
                <p className="con-icon"></p>
                <div className="chatArea-header-text">
                <p className="con-name">Test#1</p>
                <p className="con-timeStamp">today</p>
                </div>
                <IconButton>
                    <DeleteSharpIcon />
                </IconButton>
            </div>
            <div className="messages-container">
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
            </div>
            <div className="text-input-area">
                <input className="search-box" placeholder="Type a Message"></input>
                <IconButton>
                    <SendSharpIcon />
                </IconButton>
            </div>
        </div>
    );
}
export default ChatArea;