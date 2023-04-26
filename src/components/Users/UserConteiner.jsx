import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, followingProgres, getUsersThunkCreator} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withNavigateConteiner } from "../../hoc/authNavigate";
import { compose } from "redux";
import { getCurrentPage, getFollowingIsProgres, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../Redux/users-selectors";


class UsersAPIComponent extends React.Component {
    
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            followingProgres={this.props.followingProgres}
            followingIsProgres={this.props.followingIsProgres}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgres: getFollowingIsProgres(state),
    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, followingProgres, getUsersThunkCreator}),
    // withNavigateConteiner
)(UsersAPIComponent)