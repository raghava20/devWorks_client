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
        dispatch({
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
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({ name, email, password })

    try {
        dispatch({
            type: SIGNUP_REQUEST
        })
        const result = await axios.post(`${API_URL}/signup`, body, config)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: result.data
        });
        dispatch(loadUser())
    }
    catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, "is-danger")))
        }
        if (err.response.data.msg) {
            dispatch(setAlert(err.response.data.msg, "is-danger"))
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
        console.log(email, password)
        // const config = {
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // };
        // const body = JSON.stringify({ email, password });
        const result = await axios.post(`${API_URL}/login`, { email: email, password: password }).catch(err => console.log(err))

        // const data = { email: email, password: password }
        // const result = await fetch(`${API_URL}/login`, {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSON.stringify(data) // body data type must match "Content-Type" header
        // })
        //     .then(response => response.json())
        //     .then(data => console.log(data));
        console.log(result)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: result.data
        })
        console.log("exit")
        dispatch(loadUser())
    }
    catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, "is-danger")))
        }
        if (err.response.data.msg) {
            dispatch(setAlert(err.response.data.msg, "is-danger"))
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