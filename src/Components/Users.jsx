import React from "react";
import "./mystyles.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { IconButton } from "@mui/material";
import { AnimatePresence,motion} from "framer-motion";
function Users() {
    return (
        <AnimatePresence >
            <motion.div 
            initial = {{opacity:0,scale:0}}
            animate = {{opacity:1,scale:1}}
            exit={{opacity:0, scale:0}}
            transition = {{
                ease:"anticipate",
                duration:"0.3",
            }}
            className="list-container">
            <div className="ug-header">
                <p className="con-name"> Online Users</p>
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchSharpIcon />
                </IconButton>
                <input placeholder="Search" className="search-box" />
            </div>
            <div className="ug-list">
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test User #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test User #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test User #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test User #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test User #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test User #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test User #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test User #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test User #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test User #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test User #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test User #1</p>
                </div>
            </div>
        </motion.div>
        </AnimatePresence>
    );
};
export default Users;