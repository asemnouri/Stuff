import "../ticketSystem.css"
import React, { useEffect, useState } from "react"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import InboxIcon from '@material-ui/icons/Inbox';
import ChatNav from "./chatNav"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ConversationBox({ recieved, match, pressed, snoozed }) {
    const [singleObjRecievd, setSingleObjRecievd] = useState([])
    const [goal, setGoal] = useState("")
    const [press, setPressed] = useState(false)
    const [text, setText] = useState("")
    console.log("reacieved", recieved)
    let arr = recieved.filter(ele => ele._id === match.params.id)
    console.log(arr)


    useEffect(() => {
        let arr = recieved.filter(ele => ele._id === match.params.id)
        if (!arr.length) {
            arr = snoozed.filter(ele => ele._id === match.params.id)
        }
        setPressed(arr[0].pressed)
        setGoal(arr[0].Goal)
        console.log("ffffffffffffff")
    }, [match.params.id])


    useEffect(() => {
        let arr = recieved.filter(ele => ele._id === match.params.id)
        if (!arr.length) {
            arr = snoozed.filter(ele => ele._id === match.params.id)
        }
        console.log("arrrr", arr)
        setGoal(arr[0].Goal)
        setPressed(arr[0].pressed)
    }, [pressed])

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("submit")
        setText("")
    }
    return (
        <div className="ticket-container__right">
            <ChatNav recievedTask={goal} />
            {
                press ?
                    <form  onSubmit={handleSubmit} style={{ position: "absolute",bottom: '30px',right:'30px',width:"90%",display:"flex",alignItems:"flex-end",justifyContent:"space-between"}}>
                        <TextField  onChange={handleTextChange} value={text} id="standard-required" label="Type a message here" type='text' name='text' style={{ width: "100%" }} />
                        <Button style={{paddingBottom:"0px"}} type='submit' className='dialog_button'  color="primary"> Send </Button>
                    </form>
                    :
                    <TextField  disabled id="standard-disabled" label="🚫Type a message here" style={{ width: "90%",position: "absolute",bottom: '30px',right:'30px' }} />

            }
        </div>
    );
}

const mapStateToProps = ({ user: { recieved, pressed, snoozed } }) => {
    return {
        recieved,
        pressed,
        snoozed
    }
}

export default connect(mapStateToProps)(withRouter(ConversationBox));
