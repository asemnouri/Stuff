import "./ticketSystem.css"
import React, { useEffect } from "react"
import Avatar from '@material-ui/core/Avatar';
import AssignedTickets from "./assignedTickets/assignedTickets"
import ClassifyPannel from './classifyPannel/ClassifyPannel'
import ConversationBox from "./conversationBox/ConversationBox"
function TicketSystem() {

    return (
        <div className="ticket-container">
            <AssignedTickets />
            <ClassifyPannel/>
            <ConversationBox/>
        </div>
    );
}



export default TicketSystem;
