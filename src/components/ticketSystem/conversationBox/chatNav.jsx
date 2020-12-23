import "../ticketSystem.css"
import React from "react"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import InboxIcon from '@material-ui/icons/Inbox';
import { withRouter } from "react-router";
import {connect } from "react-redux"
import {switchToSnoozed} from "../../../Redux/ticket/ticketActions"


function ChatNav({recievedTask,match,switchToSnoozed}) {

    const handleTimeIconClick=(e)=>{
        e.preventDefault()
        console.log("i am clicked")
        console.log(match.params.id)
        switchToSnoozed(match.params.id)
        window.location.reload()
    }
    return (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", }}>
                <h2 style={{color:"gray"}}>{recievedTask}</h2>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ marginLeft: "20px" }}>00:00</p>
                    <AccessTimeIcon style={{ marginLeft: "20px",cursor:"pointer" }} fontSize="medium" onClick={handleTimeIconClick} />
                    <InboxIcon style={{ marginLeft: "20px" ,cursor:"pointer"}} fontSize="medium" />
                </div>
            </div>
    );
}
const mapDispatchToProps =dispatch=>{
    return{
        switchToSnoozed:id=>dispatch(switchToSnoozed(id))
    }
}
export default connect(null,mapDispatchToProps)(withRouter(ChatNav));
