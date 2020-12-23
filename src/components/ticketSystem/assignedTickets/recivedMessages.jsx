import "../ticketSystem.css"
import React, { useEffect,useState } from "react"
import Avatar from '@material-ui/core/Avatar';
import {connect} from "react-redux"
import {Link} from "react-router-dom"
function RecievedMessages({recieved,snoozed}) {
    console.log('changed',recieved)

    return (
        <div>
        {
            recieved && recieved.map((element,i)=>{
                return(
                    <Link to={`/${element["_id"]}`} style={{textDecoration:"none"}} key={i}>
                    <Avatar className="avatar" >{element['sender'][0]}</Avatar>
                    </Link>
                )
            })
        }
        </div>
    );
}

const mapStateToProps=({user:{recieved,snoozed}})=>{
    return{
        recieved,
        snoozed
    }
}
export default connect(mapStateToProps)(RecievedMessages);
