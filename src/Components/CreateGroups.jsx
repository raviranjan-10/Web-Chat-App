import { IconButton } from "@mui/material";
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import React from "react";
function CreateGroups(){
return (
    <div className="create-groups-container">
        <input className="search-box" placeholder="Enter Group Name"></input>
        <IconButton>
            <DoneSharpIcon />
        </IconButton>
    </div>
);
}
export default CreateGroups;