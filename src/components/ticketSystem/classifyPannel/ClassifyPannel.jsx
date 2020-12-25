import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from "react"
import NativeSelects from "./selectComp"
import Button from '@material-ui/core/Button';
import { connect } from "react-redux"
import { withRouter } from "react-router";
import { setMessageGoal, setIncreaseCounter } from "../../../Redux/ticket/ticketActions"

import "../ticketSystem.css"
import "./classifyPannel.css"

function ClassifyPannel({ Goal, match, setMessageGoal, setIncreaseCounter }) {
    const [counter, setCounter] = useState(25)
    const [input, setInput] = useState("")
    const [goal, setGoal] = useState("")

    //handling the imput counter change
    useEffect(() => {
        setCounter(25 - input.length)
    }, [input])

    //setting the goal in redux
    const handleGoalSet = (goal) => {
        
        setGoal(goal)
    }

    //changing the input from disabled to enabled, and starting the counter using setInterval
    const handleButtonClick = (e) => {
        e.preventDefault()
        setInput("")
        let obj = {
            Goal: Goal,
            _id: match.params.id,
            message: input
        }
        setInterval(() => {
            setIncreaseCounter(obj)
        }, 60000);
        setMessageGoal(obj)
        setGoal("")
    }

    //changing the state when the input changed
    const handleTextChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="ticket-container__center">
            <div style={{ marginTop: "10px" }}>
                <h4 className="classify-word" >Classify</h4>
            </div>
            <small style={{ marginTop: "0px", color: "gray", marginBottom: "10px" }}>What's the user asking for?</small>
            <NativeSelects handleGoalSet={handleGoalSet} />
            <small style={{ marginTop: "10px", color: "gray" }}>Task name as shown to the user</small>
            <TextField
                onChange={handleTextChange}
                style={{ width: "80%", marginBottom: "10px", marginTop: "25px" }}
                id="outlined-textarea"
                label="Buy Title"
                placeholder="Start typing..."
                multiline
                variant="outlined"
                value={input}
            />
            {
                counter > -1
                    ?
                    <small style={{ marginTop: "10px", color: "gray" }}>Charecters Left : {counter}</small>
                    :
                    <small style={{ marginTop: "10px", color: "red" }}>Charecters Left : {counter}</small>
            }

            {
                counter < 25 && counter > -1 && goal //add the selected here
                    ?
                    <button className="button-style" onClick={handleButtonClick}>PROCEED</button>
                    :
                    <button className="disabled" type="button" disabled >PROCEED</button>


            }
        </div>
    );
}

const mapStateToProps = ({ user: { Goal } }) => {
    return {
        Goal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMessageGoal: obj => dispatch(setMessageGoal(obj)),
        setIncreaseCounter: obj => dispatch(setIncreaseCounter(obj))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ClassifyPannel));
