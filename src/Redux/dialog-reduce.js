
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialog: [
        { id: 1, name: 'Egor' },
        { id: 2, name: 'Seva' },
        { id: 3, name: 'Maks' },
        { id: 4, name: 'Artem' },
        { id: 5, name: 'Masha' },
        { id: 6, name: 'Body' },
        { id: 7, name: 'Roma' },
    ],

    message: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'No' },
        { id: 4, text: 'Fuck' },
        { id: 5, text: 'Shit Adam' },
        { id: 6, text: 'lol' },
    ],
    
}

let dialogsReduce = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: 
        let body = action.newMassegeText;
            let newMess = {
                id: 7,
                text: body,
                likeCount: 0,
            }
            return {
                ...state,
                message: [ ...state.message, newMess]
            }
        default:
            return state;
    }
}

export let addMassegeCreate = (newMassegeText) => {
    return {
        type: ADD_MESSAGE,
        newMassegeText,
    }
}

export default dialogsReduce;