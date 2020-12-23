export const goalAndMessageHandler = (RecievedMessages, messageToEdit) => {
    for (let i = 0; i < RecievedMessages.length; i++) {
        if (RecievedMessages[i]["_id"] === messageToEdit["_id"]) {
            RecievedMessages[i]["Goal"] = messageToEdit["Goal"]
            RecievedMessages[i]["message"] = messageToEdit["message"]
            RecievedMessages[i]["pressed"] = true
        }
    }
    return RecievedMessages
}

export const recievedHandler = (RecievedMessages, id) => {
    for (let i = 0; i < RecievedMessages.length; i++) {
        if (RecievedMessages[i]["_id"] === id) {
            RecievedMessages.splice(i, 1);
            return RecievedMessages
        }
    }
    return RecievedMessages
}
export const snoozedHandler = (SnoozedMessages, RecievedMessages, id) => {
    for (let i = 0; i < RecievedMessages.length; i++) {
        if (RecievedMessages[i]["_id"] === id) {
            SnoozedMessages.push(RecievedMessages[i]);
            return SnoozedMessages
        }
    }
    return SnoozedMessages
}