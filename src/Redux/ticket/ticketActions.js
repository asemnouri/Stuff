import {ticketActionTypes } from "./ticketActionType"

export const setUserName=(user)=>{
    return {
        type:ticketActionTypes.SET_CURRENT_USER,
        payload:user
    }
}
