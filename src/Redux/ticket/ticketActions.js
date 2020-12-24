import { ticketActionTypes } from "./ticketActionType"


export const setSelectedGoal = (goal) => {
    return {
        type: ticketActionTypes.SET_SELECTED_GOAL,
        payload: goal
    }
}

export const setMessageGoal = (obj) => {
    return {
        type: ticketActionTypes.SET_MESSAGE_GOAL,
        payload: obj
    }
}
export const switchToSnoozed = (id) => {
    return {
        type: ticketActionTypes.SET_RECIEVED_SNOOZED,
        payload: id
    }
}

export const setChatMessages = (obj) => {
    return {
        type: ticketActionTypes.SET_CHAT_MESSAGES,
        payload: obj
    }
}
export const setPressed = (id) => {
    return {
        type: ticketActionTypes.SET_SEEN,
        payload: id
    }
}
export const setIncreaseCounter = (obj) => {
    return {
        type: ticketActionTypes.SET_ICREASE_COUNTER,
        payload: obj
    }
}
export const setHideTicket = (id) => {
    return {
        type: ticketActionTypes.SET_HIDE_TICKET,
        payload: id
    }
}