import React from "react";
import { connect } from "react-redux";
import Header from './Header';
import { setAuthUserData, logoutThunk } from './../../Redux/auth-reducer';

class HeaderConteiner extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        
    }
}

export default connect(mapStateToProps, { setAuthUserData, logoutThunk })(HeaderConteiner);