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
export const switchToSnoozed=(id)=>{
    return {
        type:ticketActionTypes.SET_RECIEVED_SNOOZED,
        payload:id
    }
}