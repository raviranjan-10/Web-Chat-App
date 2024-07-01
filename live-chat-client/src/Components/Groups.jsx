import React from "react";
import "./mystyles.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { IconButton, duration } from "@mui/material";
import {AnimatePresence,motion} from "framer-motion";

function Groups() {
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
            className="list-container">
            <div className="ug-header">
                <p className="con-name"> Available Groups</p>
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchSharpIcon />
                </IconButton>
                <input placeholder="Search" className="search-box" />
            </div>
            <div className="ug-list">
            <motion.div 
                whileHover={{scale: 1.01}}
                whileTap = {{scale : 0.98}}
                className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </motion.div>
                <motion.div 
                whileHover={{scale: 1.01}}
                whileTap = {{scale : 0.98}}
                className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </motion.div>
                <motion.div 
                whileHover={{scale: 1.01}}
                whileTap = {{scale : 0.98}}
                className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </motion.div>
                <motion.div 
                whileHover={{scale: 1.01}}
                whileTap = {{scale : 0.98}}
                className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </motion.div>
                <motion.div 
                whileHover={{scale: 1.01}}
                whileTap = {{scale : 0.98}}
                className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </motion.div>
                <motion.div 
                whileHover={{scale: 1.01}}
                whileTap = {{scale : 0.98}}
                className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </motion.div>
                <motion.div 
                whileHover={{scale: 1.01}}
                whileTap = {{scale : 0.98}}
                className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </motion.div>
                <motion.div 
                whileHover={{scale: 1.01}}
                whileTap = {{scale : 0.98}}
                className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </motion.div>
                <motion.div 
                whileHover={{scale: 1.01}}
                whileTap = {{scale : 0.98}}
                className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </motion.div>
            </div>
        </motion.div>
        </AnimatePresence>
    );
};
export default Groups;