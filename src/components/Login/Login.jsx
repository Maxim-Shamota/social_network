import React from "react";
import s from "./Login.module.css"
import {reduxForm} from "redux-form";
import {createFields, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createFields('Email', [required], Input, 'email', )}
                {createFields('Password', [required], Input, 'password', {type: 'password'})}
                {createFields(null, null, Input, 'rememberMe', {type: 'checkbox'}, 'Remember me')}
                {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button className={s.button}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div className={s.formLogin}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)