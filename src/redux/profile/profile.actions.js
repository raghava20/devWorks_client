import axios from "axios"
import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR, GET_REPOS, CLEAR_PROFILE } from "./profile.types"
import { setAlert } from "../alert/alert.actions"
import { useNavigate } from "react-router-dom"
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
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Create or update the profile
export const createProfile = (formData, edit = false) => async (dispatch) => {
    try {
        const result = await axios.post(`${API_URL}/profile`, formData)
        dispatch({
            type: GET_PROFILE,
            payload: result.data
        })
        dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "is-success"))
        let navigate = useNavigate()
        navigate("/dashboard")
    }
    catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
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
            payload: { msg: err.response.statusText, status: err.response.status }
        })
        let navigate = useNavigate()
        navigate("/profile/404")
    }
}

// Get profile by Id
export const getProfileById = (userId) => async (dispatch) => {
    try {
        const result = await axios.get(`${API_URL}/profile/${userId}`)
        dispatch({
            type: GET_PROFILE,
            payload: result.data
        })
    }
    catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
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
            payload: { msg: err.response.statusText, status: err.reponse.status }
        })
    }
}