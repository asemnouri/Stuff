import { ticketActionTypes } from "./ticketActionType"
import { goalAndMessageHandler } from "./helperFunction"
const INITAIL_STATE = {
    Goal: "",
    recieved: [{
        _id: "5cdb6454107a752e479349A",
        Title: "New Task",
        Assignee: "Razan Kiwan",
        Status: "New",
        Goal: "",
        sender: "Asem",
        message: ""
    }, {
        _id: "5cdb6454107a752e479349K",
        Title: "New Task",
        Assignee: "Razan Kiwan",
        Status: "New",
        Goal: "",
        sender: "Kamal",
        message: ""
    },
    {
        _id: "5cdb6454107a752e479349S",
        Title: "New Task",
        Assignee: "Razan Kiwan",
        Status: "New",
        Goal: "",
        sender: "Sami",
        message: ""
    },
    {
        _id: "5cdb6454107a752e479349I",
        Title: "New Task",
        Assignee: "Razan Kiwan",
        Status: "New",
        Goal: "",
        sender: "Israa",
        message: ""
    }],
    snoozed: []
}

const ticketReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case ticketActionTypes.SET_SELECTED_GOAL:
            return {
                ...state,
                Goal: action.payload
            }
        case ticketActionTypes.SET_MESSAGE_GOAL:
            return {
                ...state,
                recieved: goalAndMessageHandler(state.recieved, action.payload)
            }
        default:
            return state
    }
}
export default ticketReducer