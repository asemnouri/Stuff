import "../ticketSystem.css"
import React, { useEffect } from "react"
import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
function SnoozedMessages({ snoozed,recieved }) {

    useEffect(()=>{

    },[snoozed,recieved])
    return (
        <div className="snoozed">
            {
                snoozed && snoozed.map((element, i) => {
                    return (
                        <Link to={`/${element["_id"]}`} style={{ textDecoration: "none" }} key={i}>
                            <Avatar className="avatar">{element['sender'][0]}</Avatar>
                        </Link>
                    )
                })
            }
        </div>
    );
}
const mapStateToProps = ({ user: { snoozed,recieved } }) => {
    return {
        snoozed,
        recieved
    }
}
export default connect(mapStateToProps)(SnoozedMessages);
