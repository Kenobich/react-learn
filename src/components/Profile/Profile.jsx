import React from 'react';
import PersonCard from '../PersonCard/PersonCard';
import MyPost from './My Post/MyPost';
import p from './Profile.module.css';

const Profile = () => {
   
    return  <div>
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgDyYLHRaU7_scQIHovt3AyD3v85Cva4ODw&usqp=CAU' />
    </div>
   <div>
     ava + descrip 
  </div>
   <MyPost  />
   <PersonCard />
   
</div>


}

export default Profile;