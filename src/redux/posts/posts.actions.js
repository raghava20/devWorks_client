import axios from "axios"
import { GET_POSTS, CLEAR_POST, POST_ERROR } from "./posts.types"
import { API_URL } from "../../components/API_URL/API_URL"

// Get all the posts
export const getAllPosts = () => async (dispatch) => {
    try {
        const result = await axios.get(`${API_URL}/posts`)
        dispatch({ type: CLEAR_POST })
        return dispatch({
            type: GET_POSTS,
            payload: result.data
        })
    }
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        })
    }
}

// Get all post by userId
export const getUserPostById = (userId) => async (dispatch) => {
    try {
        const result = await axios.get(`${API_URL}/posts/user/${userId}`)
        dispatch({
            type: GET_POSTS,
            payload: result.data
        })
    }
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        })
    }
}