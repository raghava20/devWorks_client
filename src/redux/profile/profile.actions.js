import axios from "axios"
import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR, GET_REPOS, CLEAR_PROFILE } from "./profile.types"
import { setAlert } from "../alert/alert.actions"
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../../components/API_URL/API_URL"

// Get current user profile
export const getCurrentUserProfile = () => async (dispatch) => {
    dispatch({ type: CLEAR_PROFILE })
    try {

        const result = await axios.get(`${API_URL}/profile/me`);
        dispatch({
            type: GET_PROFILE,
            payload: result.data
        })
    }
    catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        })
    }
}

// Create or update the profile
export const createProfile = (formData, navigate, edit = false) => async (dispatch) => {
    try {
        const result = await axios.post(`${API_URL}/profile`, formData)
        dispatch({
            type: GET_PROFILE,
            payload: result.data
        })
        dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "is-success"))
        navigate('/dashboard')
    }
    catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.message, "is-danger")));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        })
    }
}

// Get all profiles
export const getAllProfiles = () => async (dispatch) => {
    try {
        const result = await axios.get(`${API_URL}/profile`)
        dispatch({ type: CLEAR_PROFILE })
        dispatch({
            type: GET_PROFILES,
            payload: result.data
        })

    }
    catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        })
    }
}

// Get profile by Id
export const getProfileById = (userId, navigate) => async (dispatch) => {
    try {
        const result = await axios.get(`${API_URL}/profile/user/${userId}`)
        dispatch({
            type: GET_PROFILE,
            payload: result.data
        })
    }
    catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        })
        navigate("/profile/404");
    }
}

// Get github repo
export const getGithubRepo = (username) => async (dispatch) => {
    try {
        const result = await axios.get(`${API_URL}/profile/github/${username}`)
        dispatch({
            type: GET_REPOS,
            payload: result.data
        })
    }
    catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        })
    }
}