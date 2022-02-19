import axios from "axios"
import { GET_POSTS, CLEAR_POST, POST_ERROR } from "./posts.types"

// Get all the posts
export const getAllPosts = () => async (dispatch) => {
    try {
        const result = await axios.get("/posts")
        dispatch({ type: CLEAR_POST })
        dispatch({
            type: GET_POSTS,
            payload: result.data
        })
    }
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Get all post by userId
export const getUserPostById = (userId) => async (dispatch) => {
    try {
        const result = await axios.get(`/posts/user/${userId}`)
        dispatch({
            type: GET_POSTS,
            payload: result.data
        })
    }
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}