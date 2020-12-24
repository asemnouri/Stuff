import "../ticketSystem.css"
import "./assignedTickets.css"
import React, { useEffect } from "react"
import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { setPressed } from "../../../Redux/ticket/ticketActions"

import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },

    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));

function RecievedMessages({ element, match, setPressed }) {
    const classes = useStyles();
    const style = (match === element._id) ? `${classes.purple} avatar` : "avatar"
    const seen = (match === element._id || element.seen) ? `` : "dot__not-seen"
    
    useEffect(() => {
        if (match === element._id) {
            setPressed(match)
        }
    }, [match])
    
    return (
        <div className="not-seen">
            <Link to={`/${element["_id"]}`} style={{ textDecoration: "none" }} >
                <Avatar className={style} >{element['sender'][0]}</Avatar>
                <span class={seen}></span>
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
const mapDispatchToPorps = dispatch => {
    return {
        setPressed: id => dispatch(setPressed(id))
    }
}
export default connect(mapStateToProps, mapDispatchToPorps)(RecievedMessages);
