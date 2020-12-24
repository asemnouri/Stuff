import "../ticketSystem.css"
import React, { useEffect } from "react"
import Avatar from '@material-ui/core/Avatar';
import RecievedMessages from "./recivedMessages"
import SnoozedMessages from "./snoozedMessages"
import { connect } from "react-redux";
function AssignedTickets({ snoozed, recieved }) {
    // console.log('mm',snoozed,recieved)

    return (
        <div className="ticket-container__left" >
            <div className="profile-pic">
                <Avatar className="avatar"><img style={{ width: "50px", height: "50px" }} src="https://static.toiimg.com/photo/72975551.cms" alt="profile-image" /></Avatar>
                <span class="dot__profile"></span>
            </div>
            {
                recieved && recieved.map((element, i) => {
                    return (
                        <RecievedMessages element={element} key={i} />
                    )
                })
            }
                <div style={{borderTop:" 1px solid gray"}}>
            {
                snoozed && snoozed.map((element, i) => {
                    return (
                        <SnoozedMessages element={element} key={i} />
                    )
                })
            }
                </div>
        </div>
    );
}
const mapStateToProps = ({ user: { snoozed, recieved } }) => {
    return {
        snoozed, recieved
    }
}
export default connect(mapStateToProps)(AssignedTickets);
