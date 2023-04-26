import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsFromNavigate = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const withNavigateConteiner = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Navigate to="/login"/>
            return <Component {...this.props}/>
        }
    }
    let ConnectedAuthNavigateConteiner = connect(mapStateToPropsFromNavigate)(NavigateComponent)

    return  ConnectedAuthNavigateConteiner;
}