import { ticketActionTypes } from "./ticketActionType"

const INITAIL_STATE = {
    _id: "5cdb6454107a752e479349f",
    Title: "New Task",
    Assignee: "Razan Kiwan",
    Status: "New",
    Goal: "Buy a product",
    recieved:[],
    snoozed:[]
}

const ticketReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case ticketActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentuser: action.payload
            }
        default:
            return state
    }
}
export default ticketReducer