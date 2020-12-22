import {userActionTypes } from "./userActionType"

export const setUserName=(user)=>{
    return {
        type:userActionTypes.SET_CURRENT_USER,
        payload:user
    }
}
