const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
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
    newMessageText: '',
}
const dialogsReducer = (state=initialState,action) =>{
   switch(action.type){
       case ADD_MESSAGE:
           let newMessage = {
           id: 7,
           message: state.newMessageText
       };
           state.messagesData.push(newMessage);
           state.newMessageText = '';
           return state;
       case ADD_NEW_MESSAGE :
           state.newMessageText = action.newMessage;
           return state;
       default:
           return state;
   }
}
export let addMessageActionCreator =()=> ({type:'ADD-MESSAGE'});
export let addNewMessageActionCreator = (text) => ({type:'ADD-NEW-MESSAGE',newMessage: text});



export default  dialogsReducer