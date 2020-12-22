import { userActionTypes } from "./userActionType"

const INITAIL_STATE={
    currentuser:"",
    id:null
}

const userReducer = (state=INITAIL_STATE, action)=>{
switch(action.type){
    case userActionTypes.SET_CURRENT_USER:
    return {
        ...state,
        currentuser:action.payload
    }
    default:
        return state
}
}
export default userReducer