import React from 'react';
import p from './MyPost.module.css';
import Post from './Post/Post';



const MyPost = (props) => {

    let postElement = props.postDate.map(post =><Post message={post.message} like={post.like} repost={post.repost}/> )
    return (
        <div>
            My Post
            <div>
                <textarea> </textarea>
                <button>Add Post</button>

            </div>
            <div className={p.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPost;