import "../ticketSystem.css"
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from "react"
import NativeSelects from "./selectComp"
import Button from '@material-ui/core/Button';
import { connect } from "react-redux"
import { withRouter } from "react-router";
import {setMessageGoal} from "../../../Redux/ticket/ticketActions"

function ClassifyPannel({Goal,match,setMessageGoal}) {
    const [counter, setCounter] = useState(25)
    const [input, setInput] = useState("")
    
    
    useEffect(() => {
        setCounter(25 - input.length)
    }, [input])


    const handleButtonClick=(e)=>{
        e.preventDefault()
        let obj={
            Goal:Goal,
            _id:match.params.id,
            message:input
        }
        setMessageGoal(obj)
    }

    const handleTextChange = (e) => {
        // let inputValue = e.target.value
        setInput(e.target.value)
    }
    return (
        <div className="ticket-container__center">
            <div style={{ marginTop: "10px" }}>
                <h4 className="classify-word" >Classify</h4>
            </div>
            <small style={{ marginTop: "0px", color: "gray", marginBottom: "10px" }}>What's the user asking for?</small>
            <NativeSelects />
            <small style={{ marginTop: "10px", color: "gray" }}>Task name as shown to the user</small>
            <TextField
                onChange={handleTextChange}
                style={{ width: "80%", marginBottom: "10px", marginTop: "25px" }}
                id="outlined-textarea"
                label="Buy what"
                placeholder="Start typing..."
                multiline
                variant="outlined"
            />
            {
                counter > -1
                    ?
                    <small style={{ marginTop: "10px", color: "gray" }}>Charecters Left : {counter}</small>
                    :
                    <small style={{ marginTop: "10px", color: "red" }}>Charecters Left : {counter}</small>
            }
            {
                counter < 25 && counter > -1 && Goal.length //add the selected here
                    ?
                    <Button onClick={handleButtonClick} className="button-style" variant="contained" color="primary">proceed</Button>
                    :
                    <Button className="button-style" disabled variant="contained" color="primary">proceed</Button>

            }
        </div>
    );
}
const mapStateToProps = ({ user: { Goal } }) => {
    return {
        Goal
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        setMessageGoal:obj=>dispatch(setMessageGoal(obj))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ClassifyPannel));
