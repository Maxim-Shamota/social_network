import React from "react";
import { Field } from "redux-form";
import s from "./FormsControls.module.css";

export const  FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div className={s.formControl + " " + ( hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}
export const  Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const  Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createFields = (placeholder, validators, component, name, props={}, text='') => (
    <div>
        <Field type="text" placeholder={placeholder} validate={validators}
                       component={component} name={name} {...props}/>{ text }
    </div>
)