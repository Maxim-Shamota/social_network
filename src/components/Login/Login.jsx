import React from "react";
import s from "./Login.module.css"
import {reduxForm} from "redux-form";
import {createFields, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createFields('Email', [required], Input, 'email', )}
                {createFields('Password', [required], Input, 'password', {type: 'password'})}
                {createFields(null, null, Input, 'rememberMe', {type: 'checkbox'}, 'Remember me')}

                {captchaUrl && <img src={captchaUrl} />}
                {captchaUrl && createFields('Symbols from image', [required], Input, 'captcha', {}) }

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
        props.login( formData.email, formData.password, formData.rememberMe, formData.captcha )
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div className={s.formLogin}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)