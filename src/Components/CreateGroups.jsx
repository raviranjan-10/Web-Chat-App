import { IconButton } from "@mui/material";
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import React from "react";
import { AnimatePresence,motion} from "framer-motion";

function CreateGroups(){
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
        className="create-groups-container">
        <input className="search-box" placeholder="Enter Group Name"></input>
        <IconButton>
            <DoneSharpIcon />
        </IconButton>
    </motion.div>
    </AnimatePresence>
);
}
export default CreateGroups;