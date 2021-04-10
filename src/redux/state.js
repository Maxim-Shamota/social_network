const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how do you do?', likeCount: 2},
                {id: 2, message: 'I have a nice day', likeCount: 12}
            ],
            newPostText: ''
        },

        dialogsPage: {
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
            ],
            newMessageBody: ''
        },

        sidebar : {
            friends: [
                {id: 1, name: 'Maxim'},
                {id: 2, name: 'Juliya'},
                {id: 3, name: 'Nataly'},
            ]
        }
    },
    _callSubscriber () {},

    getState () {
      return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;