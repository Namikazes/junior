import dialogsReduce from "./dialog-reduce";
import profileReduce from "./profile-reduce";
import saitbarReducer from "./saitbar-reduce";

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, text: 'Its my first post', likeCount: 23 },
                { id: 2, text: 'How are you?', likeCount: 13 },
                { id: 3, text: 'How are you?', likeCount: 13 },
                { id: 4, text: 'FUCH STATE?', likeCount: 13 },
                { id: 5, text: 'How are you?', likeCount: 13 },
                { id: 6, text: 'Oh, shit?', likeCount: 13 },
            ],
    
            newPostText: 'it',
        },
    
        dialogMessagePage: {
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
            newMassegeText: 'it',
    
        },
    
        navBarFreands: {},
    },

    getState() {
        return this._state
    },

    _renderEntiteTree () {
        console.log('dsd')
    },

    subscribe (observer) {
        this._renderEntiteTree = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReduce(this._state.profilePage, action);
        this._state.dialogMessagePage = dialogsReduce(this._state.dialogMessagePage, action);
        this._state.navBarFreands = saitbarReducer(this._state.navBarFreands, action);
        this._renderEntiteTree(this._state);
    }
}

export default store;
window.store = store;