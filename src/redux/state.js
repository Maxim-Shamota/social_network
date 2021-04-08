import {rerenderEntireTree} from "../rerender";

let state = {
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
        questions: [
            {id:1, question: 'Nice'},
            {id:1, question: 'I am too'},
            {id:1, question: 'What?'},
            {id:1, question: 'Ok'}
        ],
        dialogs: [
            {id: 1, name: 'Maxim'},
            {id: 2, name: 'Juliya'},
            {id: 3, name: 'Nataly'},
            {id: 4, name: 'Sofia'},
            {id: 5, name: 'Sergey'},
            {id: 6, name: 'Igor'},
        ]
    },

    sidebar : {
        friends: [
            {id: 1, name: 'Maxim'},
            {id: 2, name: 'Juliya'},
            {id: 3, name: 'Nataly'},
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state;