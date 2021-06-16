import React from "react";
import s from './Dialogs.module.css'
import Person from "./Person/Person";
import Message from "./Message/Message";
import {addMessageActionCreator, addNewMessageActionCreator} from "../../redux/DialogsReducer";
const Dialogs = (props) => {
    let dialogsElement = props.dialogsData.map(dialog => <Person name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.messagesData.map(messages =>  <Message massege={messages.message} />)

    let newMessageElement = React.createRef();
    let addMessage = ()=> {
       props.dispatch(addMessageActionCreator());
   }
    let onChangeMessage= () =>{
        let text = newMessageElement.current.value ;
        props.dispatch(addNewMessageActionCreator(text));
    }
    return (
        <div className={s.chat}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea onChange={onChangeMessage}
                                ref={newMessageElement}
                                value={props.newMessage}
                               placeholder={'add text'}/>
                <button onClick={addMessage}> New messages </button>
            </div>
        </div>
    );
};
export default Dialogs;
