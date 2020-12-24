import "../ticketSystem.css"
import React, { useEffect } from "react"
import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
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

function SnoozedMessages({ snoozed, recieved, element,match }) {
    const classes = useStyles();
    const style=(match===element._id)?`${classes.purple} avatar`:"avatar"
    useEffect(() => {

    }, [snoozed, recieved])


    return (
        <div className="snoozed">
            <Link to={`/${element["_id"]}`} style={{ textDecoration: "none" }} >
                <Avatar className={style}>{element['sender'][0]}</Avatar>
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
