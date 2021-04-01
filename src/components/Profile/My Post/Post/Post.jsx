import React from 'react';
import p from './Post.module.css';

const Post = (props) => {

return (<div className={p.item}>
       
        <img src='https://data.whicdn.com/images/333477434/original.jpg' />
        {props.message}
       <div>
        
        <span>{props.like} Like {props.repost} Repost</span> 
      
         
       
       </div>  

</div>)
}

export default Post
