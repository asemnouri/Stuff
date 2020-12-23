import { ticketActionTypes } from "./ticketActionType"
import { goalAndMessageHandler, snoozedHandler, recievedHandler } from "./helperFunction"
const INITAIL_STATE = {
    Goal: "",
    pressed: false,

    recieved: [{
        _id: "5cdb6454107a752e479349A",
        Title: "New Task",
        Assignee: "Razan Kiwan",
        Status: "New",
        Goal: "New Task",
        sender: "Asem",
        message: "",
        chatMessages: [],
        pressed:false
    }, {
        _id: "5cdb6454107a752e479349K",
        Title: "New Task",
        Assignee: "Razan Kiwan",
        Status: "New",
        Goal: "New Task",
        sender: "Kamal",
        message: "",
        chatMessages: [],
        pressed:false
    },
    {
        _id: "5cdb6454107a752e479349S",
        Title: "New Task",
        Assignee: "Razan Kiwan",
        Status: "New",
        Goal: "New Task",
        sender: "Sami",
        message: "",
        chatMessages: [],
        pressed:false
    },
    {
        _id: "5cdb6454107a752e479349I",
        Title: "New Task",
        Assignee: "Razan Kiwan",
        Status: "New",
        Goal: "New Task",
        sender: "Israa",
        message: "",
        chatMessages: [],
        pressed:false
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
                recieved: goalAndMessageHandler(state.recieved, action.payload),
                pressed: !state.pressed
            }
        case ticketActionTypes.SET_RECIEVED_SNOOZED:
            return {
                ...state,
                snoozed: snoozedHandler(state.snoozed, state.recieved, action.payload),
                recieved: recievedHandler(state.recieved, action.payload),
            }
        default:
            return state
    }
}
export default ticketReducer