const ADD_POST = 'ADD-POST';
const ADD_NEW_POST = 'ADD-NEW-POST';

let getRandomArbitrary =(min, max)=> {
    return Math.random() * (max - min) + min;
}

let initialState= {
    postData: [
        {id: 1, message: 'Hi, how are you', like: '71', repost: '10'},
        {id: 2, message: 'It`s my firs post', like: '21', repost: '1'},
        {id: 3, message: 'Hi, good and you?', like: '51', repost: '20'},
        {id: 4, message: 'Idioit', like: '-100', repost: '10'},
        {id: 5, message: 'dioit', like: '-1600', repost: '10'},],
    newPostText: '',
};

const profileReducer = (state=initialState, action) =>{
   switch (action.type) {
       case ADD_POST:
           let newPost = {
           id: 6,
           message: state.newPostText,
           like: '1000',
           repost: 5
       };
           state.postData.push(newPost);
           state.newPostText = '';
           return state;
       case ADD_NEW_POST: state.newPostText = action.newText;
            return state;
       default:
           return state;
   }
}

export let addPostActionCreator =()=> ({type: 'ADD-POST'})
export let addNewPostActionCreator = (text) => ({type:'ADD-NEW-POST',newText: text})

export default  profileReducer