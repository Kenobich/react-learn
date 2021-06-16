import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";

let store = {
    _state: {
        profilePage:{
            postData: [
                {id: 1, message: 'Hi, how are you', like: '71', repost: '10'},
                {id: 2, message: 'It`s my firs post', like: '21', repost: '1'},
                {id: 3, message: 'Hi, good and you?', like: '51', repost: '20'},
                {id: 4, message: 'Idioit', like: '-100', repost: '10'},
                {id: 5, message: 'dioit', like: '-1600', repost: '10'},],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Arsen'},
                {id: 2, name: 'Andrii'},
                {id: 3, name: 'Smit'},
            ],
            messagesData: [
                {id: 1, message: "Hi Lupa"},
                {id: 2, message: "Hi Pupa"},
                {id: 3, message: "Have you become zarplata?"},
                {id: 4, message: "Yeah, i take you zarplata?"},
                {id: 5, message: "Ohh we have a problem, you take zarplara za Lupi?"},
                {id: 6, message: "Ohh kurwa"},
            ],
            newMessageText: 'Add New Message',
        },
    },
    getState() {
        return this._state;
    },
    _callrender() {
        console.log('state change')
    },
    render(observer) {
        this._callrender = observer;
    },
    dispatch(action) { // {type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callrender(this._state);

        }
    }

export default  store