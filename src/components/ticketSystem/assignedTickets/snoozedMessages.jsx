import "../ticketSystem.css"
import React, { useEffect } from "react"
import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
function SnoozedMessages({ snoozed, recieved, element }) {

    useEffect(() => {

    }, [snoozed, recieved])
    return (
        <div className="snoozed">
            <Link to={`/${element["_id"]}`} style={{ textDecoration: "none" }} >
                <Avatar className="avatar">{element['sender'][0]}</Avatar>
                <span class="dot__snoozed">s</span>
            </Link>
        </div>
    );
}
const mapStateToProps = ({ user: { snoozed, recieved } }) => {
    return {
        snoozed,
        recieved
    }
}
export default connect(mapStateToProps)(SnoozedMessages);
