import "../ticketSystem.css"
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from "react"
import NativeSelects from "./selectComp"
function ClassifyPannel() {
    const [counter, setCounter] = useState(25)
    const [input, setInput] = useState("")
    
    useEffect(() => {
        setCounter(25 - input.length)
    }, [input])

    const handleTextChange = (e) => {
        // let inputValue = e.target.value
        setInput(e.target.value)
    }
    return (
        <div className="ticket-container__center">
            <div style={{ marginTop: "10px" }}>
                <h4 className="classify-word" >Classify</h4>
            </div>
            <small style={{ marginTop: "0px", color: "gray",marginBottom:"10px" }}>What's the user asking for?</small>
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
        </div>
    );
}

export default ClassifyPannel;
