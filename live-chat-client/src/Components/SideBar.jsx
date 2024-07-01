import React from "react";
import {useState} from "react";
import "./mystyles.css";
import { IconButton } from "@mui/material";
import ChatItem from "./ChatItem";
//Importing Material UI Icons
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import { useNavigate } from "react-router-dom";

//Side nav bar
function SideBar() {
    const [conversations] = useState([
        {
            name:"Test#1",
            lastMessage : "Last Message #1",
            timeStamp : "today"

        },
        {
            name:"Test#2",
            lastMessage : "Last Message #2",
            timeStamp : "yesterday"

        },
        {
            name:"Test#3",
            lastMessage : "Last Message #3",
            timeStamp : "Monday"

        }
    ]);
    const navigate = useNavigate();
    return (<div className="sidebar-container">
        <div className="sb-header">
            
            <div className="account-icon">
            <IconButton>
                <AccountCircleSharpIcon />
            </IconButton>
            </div>
            <div className="other-icons">
            <IconButton  onClick={()=>{navigate('users')}}>
                <PersonAddSharpIcon 
                />
            </IconButton>
            <IconButton onClick={()=>{navigate('groups')}}>
                <GroupAddSharpIcon />
            </IconButton>
            <IconButton onClick={()=>{navigate('create-groups')}}>
                <AddCircleOutlineSharpIcon />
            </IconButton>
            </div>
        </div>
        <div className="sb-search">
        <IconButton>
            <SearchSharpIcon/>
        </IconButton>
        <input placeholder="Search" className="search-box"/>
        </div>
        <div className="sb-conversations">
            {/* Chat conversations */}
            {conversations.map(conversation=>{
                return <ChatItem props={conversation} key = {conversation.name}/>
            })}
        </div>
    </div>);
}
export default SideBar;