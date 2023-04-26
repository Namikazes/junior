import { stopSubmit } from 'redux-form';
import {authAPI} from './../api/api'

const SET_AUTH_UESER_DATA = 'it/auth/SET_AUTH_UESER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_UESER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_AUTH_UESER_DATA, data:{id, email, login, isAuth}});

export const getHeaderThunk = () => async (dispatch) => {
    let response = await authAPI.getHeader()
    
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getHeaderThunk());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', { _error: message }))
    }
}

export const logoutThunk = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}

export default authReducer;