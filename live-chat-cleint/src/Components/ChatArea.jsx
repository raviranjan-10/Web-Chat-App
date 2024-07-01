import React from "react";
import "./mystyles.css";
import MessageSelf from "./MessageSelf";
import MessageOthers from "./MessageOthers";
import { IconButton } from "@mui/material";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { AnimatePresence, motion } from "framer-motion";
//chat section
function ChatArea({ props }) {
    return (
        <AnimatePresence>
            <motion.div 
            initial = {{opacity:0,scale:0}}
            animate = {{opacity:1,scale:1}}
            exit={{opacity:0, scale:0}}
            transition = {{
                ease:"anticipate",
                duration:"0.3",
            }}
            className="chatArea-container">
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
            </motion.div>
        </AnimatePresence>
    );
}
export default ChatArea;