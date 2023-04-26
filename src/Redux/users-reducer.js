import {UserAPI, followAPI} from './../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGEL_IS_FETCHING = 'TOGGEL_IS_FETCHING'
const FOLLOWING_IS_PROGRES = 'FOLLOWING_IS_PROGRES'

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: true,
    followingIsProgres: [],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.usersId) {
                        return {...u, follow: true}
                    }
                    return u;
                })
            }
        }

            case UNFOLLOW: {
                return {
                    ...state,
                    users: state.users.map( u => {
                        if(u.id === action.usersId) {
                            return {...u, follow: false}
                        }
                        return u;
                    })
                }
            }

            case SET_USERS: {
                return { ...state, users: action.users}
            }
            case SET_CURRENT_PAGE: {
                return { ...state, currentPage: action.currentPage}
            }
            case SET_TOTAL_COUNT: {
                return { ...state, totalUsersCount: action.count}
            }
            case TOGGEL_IS_FETCHING: {
                return { ...state, isFetching: action.isFetching}
            }
            case FOLLOWING_IS_PROGRES: {
                return { 
                    ...state, 
                    followingIsProgres: action.followingIsProgres 
                    ? [...state.followingIsProgres, action.usersId]
                    : state.followingIsProgres.filter(id => id !== action.usersId)
                }
            }
            default: 
            return state;
        
    }
}

export const followSuccess = (usersId) => ({type: FOLLOW, usersId})
export const unfollowSuccess = (usersId) => ({type: UNFOLLOW, usersId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount})
export const toggeleIsFetching = (isFetching) => ({type: TOGGEL_IS_FETCHING, isFetching})
export const followingProgres = (isFetching, userId) => ({type: FOLLOWING_IS_PROGRES, isFetching, userId})

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggeleIsFetching(true));

    let data = await UserAPI.getUsers(currentPage, pageSize)
    dispatch(setCurrentPage(currentPage));
    dispatch(toggeleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnFollowFllow = async (dispatch, userId ,apiMethod, actionCreator) => {
    dispatch(followingProgres(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId));
    };
    dispatch(followingProgres(false, userId));
}

export const follow = (userId) => async (dispatch) => {

    followUnFollowFllow(dispatch, userId, followAPI.follow.bind(followAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    followUnFollowFllow(dispatch, userId, followAPI.unfollow.bind(followAPI), unfollowSuccess);
}

export default usersReducer;