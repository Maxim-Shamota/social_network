import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import Question from "./Question/Question";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    let questionsElements = props.state.questions.map(q => <Question question={q.question}/>)

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesElements}>{messagesElements}</div>
                <div className={s.questionsElements}>{questionsElements}</div>
            </div>
        </div>
    )
}
export default Dialogs;