import "../ticketSystem.css"
import React, { useEffect } from "react"
import Avatar from '@material-ui/core/Avatar';
import RecievedMessages from "./recivedMessages"
import SnoozedMessages from "./snoozedMessages"
function AssignedTickets() {
    return (
        <div className="ticket-container__left" >
            <div className="profile-pic">
                <Avatar className="avatar"><img style={{ width: "50px", height: "50px" }} src="https://static.toiimg.com/photo/72975551.cms" alt="profile-image" /></Avatar>
            </div>
            <RecievedMessages/>
            <SnoozedMessages />
        </div>
    );
}

export default AssignedTickets;
