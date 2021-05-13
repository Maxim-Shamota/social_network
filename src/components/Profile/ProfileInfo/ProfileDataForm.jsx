import React from 'react';
import s from './ProfileInfo.module.css';
import { reduxForm } from 'redux-form';
import { createFields, Input, Textarea } from './../../Common/FormsControls/FormsControls';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <b>Full name - </b> {createFields("Full name", [], Input, "fullName")}
            </div>
            <div>
                <div>
                    <b>Looking for a job : </b> {createFields("", [], Input, "lookingForAJob", { type: 'checkbox' })}
                </div>
                <div>
                    <b>My professional skills : </b> {createFields("My professional skills", [], Textarea, "lookingForAJobDescription")}
                </div>
                <div>
                    <b>About me : </b> {createFields("About me", [], Textarea, "aboutMe")}
                </div>
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={s.contact}>
                            <b>{key} : {createFields(key, [], Input, "contacts." + key)} </b>
                        </div>
                    })}
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormReduxForm