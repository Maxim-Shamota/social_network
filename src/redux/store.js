import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
}

export default store;
window.store = store;