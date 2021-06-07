import React from 'react';
import p from './MyPost.module.css';
import Post from './Post/Post';
const MyPost = (props) => {
    let postElement = props.postDate.map(post =><Post message={post.message} like={post.like} repost={post.repost}/> )

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let  onPostChange = () =>{
        let text =  newPostElement.current.value;
        props.addNewPost(text);
    }
    return (
        <div>
            My Post
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPost}
                          placeholder={'add text'}/>
            </div>
            <button onClick={addPost} >Add Post</button>
            <div className={p.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPost;