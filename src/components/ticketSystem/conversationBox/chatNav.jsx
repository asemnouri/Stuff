import React from "react"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import InboxIcon from '@material-ui/icons/Inbox';
import { withRouter } from "react-router";
import { connect } from "react-redux"
import { switchToSnoozed, setHideTicket } from "../../../Redux/ticket/ticketActions"

import "../ticketSystem.css"
import "./conversationBox.css"

function ChatNav({ snoozed, recieved, recievedTask, match, switchToSnoozed, singleObjRecievd, setHideTicket, history }) {

    const handleInboxClick = (e) => {
        e.preventDefault()
        setHideTicket(match.params.id)
        let arr = recieved.filter(ele => ele._id != match.params.id)
        if (!arr.length) {
            arr = snoozed.filter(ele => ele._id != match.params.id)
        }
        if (arr.length > 0) {
            history.push(`/${arr[0]["_id"]}`)
        } else {
            history.push('/')
        }
    }

    const handleTimeIconClick = (e) => {
        e.preventDefault()
        switchToSnoozed(match.params.id)
    }

    return (
        <div className="chat-nav">
            {
                (recievedTask === "New Task") ?
                    <h2 style={{ color: "gray" }}>{recievedTask}</h2>
                    :
                    <h2 >{recievedTask}</h2>
            }
            <div style={{display:"flex",alignItems:"center"}} >
                <p style={{ marginLeft: "20px" }}>{singleObjRecievd[0] && singleObjRecievd[0].counter}</p>
                <AccessTimeIcon style={{ marginLeft: "20px", cursor: "pointer" }} fontSize="medium" onClick={handleTimeIconClick} />
                <InboxIcon onClick={handleInboxClick} style={{ marginLeft: "20px", cursor: "pointer" }} fontSize="medium" />
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        switchToSnoozed: id => dispatch(switchToSnoozed(id)),
        setHideTicket: id => dispatch(setHideTicket(id))

    }
}

const mapStateToProps = ({ user: { recieved, snoozed } }) => {
    return {
        recieved,
        snoozed
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChatNav));
