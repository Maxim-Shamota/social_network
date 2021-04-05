import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.activeLink}>Maxim</div>
                <div className={s.dialog}>Juliya</div>
                <div className={s.dialog}>Nataly</div>
                <div className={s.dialog}>Sofiya</div>
                <div className={s.dialog}>Sergey</div>
                <div className={s.dialog}>Igor</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi, how do you do?</div>
                <div className={s.message}>I have a nice day</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}
export  default Dialogs;