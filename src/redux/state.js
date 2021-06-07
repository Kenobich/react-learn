import {rerenderEntireTree} from "../render";

let state = {
    postData: [
        {id: 1, message: 'Hi, how are you', like: '71', repost: '10'},
        {id: 2, message: 'It`s my firs post', like: '21', repost: '1'},
        {id: 3, message: 'Hi, good and you?', like: '51', repost: '20'},
        {id: 4, message: 'Idioit', like: '-100', repost: '10'},
        {id: 5, message: 'dioit', like: '-1600', repost: '10'},
    ],
    dialogsData: [
        {id: 1, name: 'Arsen'},
        {id: 2, name: 'Andrii'},
        {id: 3, name: 'Smit'}
    ],
    messagesData: [
        {id: 1, message: "Hi Lupa"},
        {id: 2, message: "Hi Pupa"},
        {id: 3, message: "Have you become zarplata?"},
        {id: 4, message: "Yeah, i take you zarplata?"},
        {id: 5, message: "Ohh we have a problem, you take zarplara za Lupi?"},
        {id: 6, message: "Ohh kurwa"}
    ],
    newPostText:'',
    newMessageText:'Add New Message'
}
export let addPost = () => {
    let newPost = {
        id:6,
        message:state.newPostText,
        like:'1000',
        repost:'5'
    };
    state.postData.push(newPost);
    state.newPostText='';
    rerenderEntireTree(state);
}
export let addNewPost = (newText) => {
    state.newPostText = newText;
    rerenderEntireTree(state);

}
export let addMessage = ()=>{
    let newMessage = {
        id:7,
        message:state.newMessageText
    };
    state.messagesData.push(newMessage);
    state.newMessageText='';
    rerenderEntireTree(state);
}
export let addNewMessage = (newMessage)=> {
    state.newMessageText = newMessage;
    rerenderEntireTree(state);
}


export default  state