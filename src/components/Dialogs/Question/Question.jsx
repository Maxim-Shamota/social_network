import React from 'react';
import s from './../Dialogs.module.css';

const Question = (props) => {
    return (
        <div className={s.question}>
            <div className={s.questionAvatar}></div>
            <div>{props.question}</div>
        </div>
    )
}

export default Question;