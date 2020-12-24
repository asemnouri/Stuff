import "../ticketSystem.css"
import React, { useEffect } from "react"
import Avatar from '@material-ui/core/Avatar';
import RecievedMessages from "./recivedMessages"
import SnoozedMessages from "./snoozedMessages"
import { connect } from "react-redux";
import { withRouter } from "react-router";

function AssignedTickets({ snoozed, recieved, match, pressed }) {

    useEffect(() => {
    }, [pressed])
    return (
        <div className="ticket-container__left" >
            <div className="profile-pic">
                <Avatar className="avatar"><img style={{ width: "50px", height: "50px" }} src="https://static.toiimg.com/photo/72975551.cms" alt="profile-image" /></Avatar>
                <span class="dot__profile"></span>
            </div>
            {
                recieved && recieved.map((element, i) => {
                    return (
                        <RecievedMessages element={element} key={i} match={match.params.id} />
                    )
                })
            }
            <div style={{ borderTop: " 1px solid gray", width: "100%" }}>
                {
                    snoozed && snoozed.map((element, i) => {
                        return (
                            <SnoozedMessages element={element} key={i} match={match.params.id} />
                        )
                    })
                }
            </div>
        </div>
    );
}
const mapStateToProps = ({ user: { snoozed, recieved, pressed } }) => {
    return {
        snoozed, recieved, pressed
    }
}
export default connect(mapStateToProps)(withRouter(AssignedTickets));
