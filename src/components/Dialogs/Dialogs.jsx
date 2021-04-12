import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

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