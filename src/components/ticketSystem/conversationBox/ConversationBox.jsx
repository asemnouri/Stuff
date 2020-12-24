import "../ticketSystem.css"
import React, { useEffect, useState } from "react"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import InboxIcon from '@material-ui/icons/Inbox';
import ChatNav from "./chatNav"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { setChatMessages } from "../../../Redux/ticket/ticketActions"

function ConversationBox({ recieved, match, pressed, snoozed, setChatMessages }) {
    const [singleObjRecievd, setSingleObjRecievd] = useState([])
    const [chatArray, setChatArray] = useState([])
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
        console.log("arrrr", arr)
        setChatArray(arr[0]['chatMessages'])
        setGoal(arr[0].Goal)
        setPressed(arr[0].pressed)
    }, [pressed])
    useEffect(() => {
        let arr = recieved.filter(ele => ele._id === match.params.id)
        if (!arr.length) {
            arr = snoozed.filter(ele => ele._id === match.params.id)
        }
        setChatArray(arr[0]['chatMessages'])
        setGoal(arr[0].Goal)
        setPressed(arr[0].pressed)
    }, [match.params.id])



    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text) {
            setChatMessages({ _id: match.params.id, newMessage: text })
            setChatArray([...chatArray, text])
        }
        setText("")
    }
    return (
        <div className="ticket-container__right">
            <ChatNav recievedTask={goal} />
            <div className="text-container">
                <div className="gray-text-message__container">
                    <p className="gray-text-message" >I'd like to do something(first message in a task)</p>
                </div>
                {
                    chatArray.map((ele, i) => {
                        return (
                            <div className="blue-text-message__container" key={i}>
                                <p className="blue-text-message" >{ele}</p>
                            </div>
                        )
                    })
                }
            </div>
            {
                press ?
                    <form onSubmit={handleSubmit} style={{ position: "absolute", zIndex: "1", bottom: '30px', right: '30px', width: "90%", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                        <TextField onChange={handleTextChange} value={text} id="standard-required" label="Type a message here" type='text' name='text' style={{ width: "100%" }} />
                        <Button style={{ paddingBottom: "0px" }} type='submit' className='dialog_button' color="primary"> Send </Button>
                    </form>
                    :
                    <TextField disabled id="standard-disabled" label="🚫Type a message here" style={{ width: "90%", zIndex: "1", position: "absolute", bottom: '30px', right: '30px' }} />

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
const mapDispatchToPorps = dispatch => {
    return {
        setChatMessages: obj => dispatch(setChatMessages(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToPorps)(withRouter(ConversationBox));
