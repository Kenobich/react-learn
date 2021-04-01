import React from 'react';
import s from './FriendsList.module.css';
const FriendsList = (props) => {
const Andrii = {name:"Andrii",surname:"Kirchei",age:20,hobby:['Js ','Beer ','Music ']};
const Arsen = {name:'Arsen',surname:'Debil',age:21,hobby:['Smite ','Pivo ']}; 
const Max = {name:'Max',surname:'Baby',age:20,hobby:['3D','Vodka ']};
const Orest = {name:'Ores',surname:'Xz',age:21,hobby:['Lazeti ','Vodka ']};


const persons = [Andrii,Arsen,Max,Orest,Arsen,Andrii,Max,Orest,Andrii,Andrii,Max,Max,Max,Max];


return(
<div className= {s.cardContainer}>
   {persons.map(person=>{return(
   <div className={s.card}>
     <div className={s.cardHeader}>
        <div className={s.cardTitle}>
        <span >{person.name} </span> 
        <span >{person.surname}</span>
       </div>
      </div>
      <div className ={s.subtitle}>
        <span >{person.age} years old</span>
      </div>
        <div className={s.interests}>Interests:</div>
        
        <ul>{person.hobby.map(hob=>{return(
        <li className ={s.hobby}>{hob}</li>
        
        )})}</ul>

   
   </div> )})} 
  
 


</div>)




}






export default FriendsList