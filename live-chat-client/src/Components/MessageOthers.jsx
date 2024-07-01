import React from "react";
function MessageOthers(){
    var props1 = {name:"RandomUser",message:"This is a Sample Message."};
    return (
        <div className="other-message-container">
                <div className="other-text-content">
                    <p className="con-lastMessage">{props1.message}</p>
                    <p className="con-timeStamp">12.00am</p>
                </div>
        </div>
    );
}
export default MessageOthers;