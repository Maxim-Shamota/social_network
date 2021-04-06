let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how do you do?', likeCount: '2'},
            {id: 2, message: 'I have a nice day', likeCount: '12'},
        ]
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
            {id: 2, name: 'July'},
            {id: 3, name: 'Nataly'},
            {id: 4, name: 'Sofia'},
            {id: 5, name: 'Sergey'},
            {id: 6, name: 'Igor'},
        ]
    }
}

export default state;