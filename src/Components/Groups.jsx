import React from "react";
import "./mystyles.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { IconButton } from "@mui/material";
function Groups() {
    return (
        <div className="list-container">
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
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </div>
                <div className="list-item">
                    <p className="con-icon">T</p>
                    <p className="con-name">Test Group #1</p>
                </div>
            </div>
        </div>
    );
};
export default Groups;