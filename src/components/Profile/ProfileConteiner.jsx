import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import  {setUserProfile, getProfileThunk, getStatus, updateStatus} from './../../Redux/profile-reduce'
import { useLocation, useNavigate, useParams,} from "react-router-dom";
import { withNavigateConteiner } from "../../hoc/authNavigate";
import { compose } from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId =  this.props.router.params.userId;
        if (!userId) {
            userId = this.props.auraizUserId;
        } if (!userId) {
            this.props.history.push('/login');
        }

        this.props.getProfileThunk(userId);
        this.props.getStatus(userId);

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        auraizUserId: state.auth.id
    }
}


export default compose(
    connect(mapStateToProps, {setUserProfile, getProfileThunk, getStatus, updateStatus}),
    withRouter,
    withNavigateConteiner)
    (ProfileContainer)