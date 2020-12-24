import "../ticketSystem.css"
import React, { useEffect, useState } from "react"
import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
function RecievedMessages({ recieved, snoozed, element }) {
    console.log('changed', recieved)

    return (
        <div className="not-seen">
            <Link to={`/${element["_id"]}`} style={{textDecoration:"none"}} >
                <Avatar className="avatar" >{element['sender'][0]}</Avatar>
                <span class="dot__not-seen"></span>
            </Link>
        </div>
    );
}

const mapStateToProps = ({ user: { recieved, snoozed } }) => {
    return {
        recieved,
        snoozed
    }
}
export default connect(mapStateToProps)(RecievedMessages);
