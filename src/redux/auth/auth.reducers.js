import {
    SIGNUP_FAIL, SIGNUP_SUCCESS, SIGNUP_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    LOGIN_REQUEST, LOGOUT, AUTH_ERROR, USER_LOADED

} from "./auth.types"

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case USER_LOADED:
            return { ...state, isAuthenticated: true, loading: false, user: payload }
        case SIGNUP_SUCCESS:
            localStorage.setItem("token", payload.token)
            return { ...state, ...payload, isAuthenticated: true, loading: false }
        case SIGNUP_FAIL:
        case AUTH_ERROR:
        case LOGIN_REQUEST:
            return { ...state, loading: true }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token)
            return { ...state, ...payload, isAuthenticated: true, loading: false }
        case LOGIN_FAIL:
            return { ...state, loading: false }
        case LOGOUT:
            localStorage.removeItem("token");
            return { ...state, token: null, isAuthenticated: false, loading: false }
        default:
            return state;
    }

}