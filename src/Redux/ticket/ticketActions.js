import {ticketActionTypes } from "./ticketActionType"


export const setSelectedGoal=(goal)=>{
    return {
        type:ticketActionTypes.SET_SELECTED_GOAL,
        payload:goal
    }
}

export const setMessageGoal=(obj)=>{
    return {
        type:ticketActionTypes.SET_MESSAGE_GOAL,
        payload:obj
    }
}