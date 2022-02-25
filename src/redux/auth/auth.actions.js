import axios from "axios"
import {
    SIGNUP_FAIL, SIGNUP_SUCCESS, SIGNUP_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    LOGIN_REQUEST, LOGOUT, AUTH_ERROR, USER_LOADED

} from "./auth.types"
import setAuthToken from "../../auth/setAuthToken"
import { CLEAR_PROFILE } from "../profile/profile.types"
import { setAlert } from "../alert/alert.actions"
import { API_URL } from "../../components/API_URL/API_URL"


// Load user by getting token
export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        const result = await axios.get(`${API_URL}/auth`);
        return dispatch({
            type: USER_LOADED,
            payload: result.data
        })
    }
    catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// Signup
export const signupUser = ({ name, email, password }) => async (dispatch) => {
    try {
        const result = await axios.post(`${API_URL}/signup`, { name: name, email: email, password: password })
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: result.data
        });
        dispatch(setAlert("Account created successfully", "is-success"))
        dispatch(loadUser())
    }
    catch (err) {
        const errors = err.response;
        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.message), "is-danger"))
        }
        if (err.response) {
            dispatch(setAlert(err.response, "is-danger"))
        }
        dispatch({
            type: SIGNUP_FAIL
        })
    }
}

// Login
export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        const result = await axios.post(`${API_URL}/login`, { email: email, password: password })
        dispatch({
            type: LOGIN_SUCCESS,
            payload: result.data
        })
        dispatch(loadUser())
    }
    catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.message, "is-danger")))
        }
        if (err.response.data.message) {
            dispatch(setAlert(err.response.data.message, "is-danger"))
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

// LOGOUT
export const logoutUser = () => (dispatch) => {
    dispatch({
        type: CLEAR_PROFILE
    })
    dispatch({
        type: LOGOUT
    })
}