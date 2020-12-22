import "../ticketSystem.css"
import React, { useEffect } from "react"
import NativeSelects from "./selectComp"
function ClassifyPannel() {

    return (
        <div className="ticket-container__center">
            <div style={{marginTop: "10px" }}>
                <h4 className="classify-word" >Classify</h4>
            </div>
            <small style={{marginTop:"0px",color:"gray"}}>What's the user asking for?</small>
            <NativeSelects/>
        </div>
    );
}

export default ClassifyPannel;
