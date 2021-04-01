import React from 'react';
import p from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    return(
    <div>
      My Post
    <div>
          <textarea></textarea>
          <button>Add Post</button>
          
    </div>
          <div className={p.posts}>
              <Post message='Hi, how are you' like='71' repost='10' />
              <Post message="It`s my firs post" like='33' repost='12'  />
    </div>
    </div>
   )
}

export default MyPost;