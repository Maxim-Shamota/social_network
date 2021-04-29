import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom"

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesElements}>
                    <div>{messagesElements}</div>
                </div>
                <div>
                    <div><textarea cols="30" rows="3"
                                   value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='enter your message'></textarea></div>
                    <div onClick={onSendMessageClick}>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;