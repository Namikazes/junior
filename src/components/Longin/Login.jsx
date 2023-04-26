import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import { maxLenghtCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import {loginThunk,logoutThunk} from "./../../Redux/auth-reducer"
import { Navigate } from "react-router-dom";
import s from "./../common/FormControls/FormControls.module.css"

const LonginForm = ({handleSubmit, error}) => {
    return (
    <form onSubmit={handleSubmit}>
        <div>
        <Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLenghtCreator(50)]}/>
        </div>
        <div>
        <Field placeholder={"Password"} name={"password"} type="password" component={Input} validate={[required, maxLenghtCreator(20)]}/>
        </div>
        <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]}/> remember me
        </div>
        {error && <div className={s.formErorr}>
            {error}
        </div>}
        <div>
        <button>Login</button>
        </div>
    </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LonginForm)

const Longin = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, { loginThunk, logoutThunk })(Longin);