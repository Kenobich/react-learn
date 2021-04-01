import React from 'react';
import FriendsList from './FriendsList/FriendsList';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
    <div className={s.display}>
     <FriendsList/>
    </div>

    )
}
export default Friends;





