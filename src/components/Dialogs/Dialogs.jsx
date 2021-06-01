import React from "react";
import s from './Dialogs.module.css'
import Person from "./Person/Person";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsData = [
        {id:1, name:'Arsen'},
        {id:2, name:'Andrii'},
        {id:3, name:'Smit'}
    ]
    let messagesData = [
        {id:1, message:"Hi Lupa"},
        {id:2, message:"Hi Pupa"},
        {id:3, message:"Have you become zarplata?"},
        {id:4, message:"Yeah, i take you zarplata?"},
        {id:5, message:"Ohh we have a problem, you take zarplara za Lupi?"},
        {id:6, message:"Ohh kurwa"}
    ]

    let dialogsElement = dialogsData
        .map(dialog => <Person name={dialog.name} id={dialog.id}/>)
    let messagesElement = messagesData
        .map(messages =>  <Message massege={messages.message} />)
    return (
        <div className={s.chat}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};
export default Dialogs;
