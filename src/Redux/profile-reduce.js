import { profileAPI } from './../api/api'

const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_STATUS = 'SET_STATUS';
const DELETINT_POST = 'DELETINT_POST';

let initialState = {
    posts: [
        { id: 1, text: 'Its my first post', likeCount: 23 },
        { id: 2, text: 'How are you?', likeCount: 13 },
        { id: 3, text: 'How are you?', likeCount: 13 },
        { id: 4, text: 'FUCH STATE?', likeCount: 13 },
        { id: 5, text: 'How are you?', likeCount: 13 },
        { id: 6, text: 'Oh, shit?', likeCount: 13 },
    ],
    profile: null,
    status: 'gi',
}

let profileReduce = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                text: action.addPostText,
                likeCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_PROFILE_USER:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case DELETINT_POST: 
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId),
            }
        default:
            return state;
    }
}

export let addPostActionCreate = (addPostText) => ({type: ADD_POST,addPostText});
export let deletingPost = (postId) => ({type: DELETINT_POST, postId});
export let setUserProfile = (profile) => ({type: SET_PROFILE_USER, profile});
export let setStatus = (status) => ({type: SET_STATUS, status});

export const getProfileThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId)
            dispatch(setStatus(response.data));

    }

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
        .then((data) => {
            if (data.resultCode === 0) {
              dispatch(setStatus(status));
            }
        })
    }
}

export default profileReduce;