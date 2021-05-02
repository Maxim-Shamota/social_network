const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi, how do you do?'},
        {id: 2, message: 'I have a nice day'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    dialogs: [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Juliya'},
        {id: 3, name: 'Nataly'},
        {id: 4, name: 'Sofia'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Igor'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages:[...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;