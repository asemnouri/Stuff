import "../ticketSystem.css"
import React, { useEffect,useState } from "react"
import Avatar from '@material-ui/core/Avatar';
import {connect} from "react-redux"
import {Link} from "react-router-dom"
function SnoozedMessages({recieved}) {
    console.log(recieved)
    return (
        <div>
        {
            recieved && recieved.map(element=>{
                return(
                    <Link to={`/${element["_id"]}`} style={{textDecoration:"none"}}>
                    <Avatar className="avatar" >{element['sender'][0]}</Avatar>
                    </Link>
                )
            })
        }
        </div>
    );
}

const mapStateToProps=({user:{recieved}})=>{
    return{
        recieved
    }
}
export default connect(mapStateToProps)(SnoozedMessages);
