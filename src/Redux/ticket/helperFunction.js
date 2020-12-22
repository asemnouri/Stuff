export const goalAndMessageHandler = (RecievedMessages, messageToEdit) => {
    for (let i = 0; i < RecievedMessages.length; i++) {
        if (RecievedMessages[i]["_id"] === messageToEdit["_id"]) {
            RecievedMessages[i]["Goal"] = messageToEdit["Goal"]
            RecievedMessages[i]["message"] = messageToEdit["message"]
        }
    }
    return RecievedMessages
}
