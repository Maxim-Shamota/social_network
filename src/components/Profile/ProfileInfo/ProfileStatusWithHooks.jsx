import React, { useEffect } from 'react';
import { useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => { 
        setStatus(props.status)
     }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value )
    }

    return (
        <div className={s.status}>
            {!editMode &&
                <div>
                    <b>My status : </b><span onDoubleClick={ activateEditMode }>{props.status || "----------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;