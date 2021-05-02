import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'Login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field type="text" placeholder={'Password'} component={'input'} name={'password'}/>
            </div>
            <div>
                <Field type="checkbox" component={'input'} name={'rememberMe'}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const  onSubmit = (formData) => { }

    return <div className={s.formLogin}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login