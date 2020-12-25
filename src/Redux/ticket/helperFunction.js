export const goalAndMessageHandler = (RecievedMessages, messageToEdit) => {
    for (let i = 0; i < RecievedMessages.length; i++) {
        if (RecievedMessages[i]["_id"] === messageToEdit["_id"]) {
            RecievedMessages[i]["Goal"] = messageToEdit["Goal"]
            RecievedMessages[i]["message"] = messageToEdit["message"]
            RecievedMessages[i]["Title"] = messageToEdit["message"]

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

export const chatMessageHandler = (RecievedMessages, messageToEdit) => {
    for (let i = 0; i < RecievedMessages.length; i++) {
        if (RecievedMessages[i]["_id"] === messageToEdit["_id"]) {
            RecievedMessages[i]["chatMessages"] = [...RecievedMessages[i]["chatMessages"], messageToEdit["newMessage"]]
        }
    }
    return RecievedMessages
}

export const pressHandler = (RecievedMessages, id) => {
    for (let i = 0; i < RecievedMessages.length; i++) {
        if (RecievedMessages[i]["_id"] === id) {
            RecievedMessages[i]["seen"] = true
        }
    }
    return RecievedMessages
}
export const counterHandler = (RecievedMessages, obj) => {
    for (let i = 0; i < RecievedMessages.length; i++) {
        if (RecievedMessages[i]["_id"] === obj["_id"]) {
            RecievedMessages[i]["counter"] = increaseCounter(RecievedMessages[i]["counter"])
        }
    }
    return RecievedMessages
}
const increaseCounter = function (string) {
    let arr = string.split(":")
    if (Number(arr[1]) + 1 < 10) {
        return `${arr[0]}:0${Number(arr[1]) + 1}`
    } else if (Number(arr[1]) + 1 >= 10 && Number(arr[1]) + 1 < 60) {
        return `${arr[0]}:${Number(arr[1]) + 1}`
    } else if (Number(arr[0]) + 1 < 10) {
        return `0${Number(arr[0]) + 1}:00`
    } else {
        return `${Number(arr[0]) + 1}:00`
    }
}