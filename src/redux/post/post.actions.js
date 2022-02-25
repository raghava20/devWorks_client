import axios from "axios";
import { setAlert } from "../alert/alert.actions"
import {
    GET_POST, GET_POSTS, POST_ERROR, ADD_POST, ADD_POST_REQUEST,
    UPDATE_LIKES, ADD_COMMENT, REMOVE_COMMENT, DELETE_POST
} from "./post.types"
import { API_URL } from "../../components/API_URL/API_URL"

// to get current user feed
export const getFeed = () => async (dispatch) => {
    try {
        const result = await axios.get(`${API_URL}/posts/feed`);
        dispatch({
            type: GET_POSTS,
            payload: result.data
        })
    }
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        });
    }
}

// Add a new post
export const addPost = (post, navigate) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
    try {
        dispatch({ type: ADD_POST_REQUEST })
        const result = await axios.post(`${API_URL}/posts`, post, config);
        dispatch({
            type: ADD_POST,
            payload: result.data
        })
        dispatch(setAlert("Successfully created a Post", "is-success"))

        navigate("/posts")
    }
    catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.message, "is-danger")))
        }
        dispatch({
            type: POST_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        })
    }
}

// Get post by Id
export const getPostById = (postId, navigate) => async (dispatch) => {
    try {
        const result = await axios.get(`${API_URL}/posts/${postId}`)
        dispatch({
            type: GET_POST,
            payload: result.data
        })
    }
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { message: err.response, status: err.response }
        })
        navigate("/posts/404")
    }

}

// Add like using Id
export const addLike = (postId) => async (dispatch) => {
    try {
        const result = await axios.put(`${API_URL}/posts/like/${postId}`)
        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: result.data }
        })
    }
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        })
    }
}

// Remove like using Id
export const removeLike = (postId) => async (dispatch) => {
    try {
        const result = await axios.put(`${API_URL}/posts/unlike/${postId}`)
        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: result.data }
        })
    }
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        })
    }
}

// Add comment by Id
export const addComment = (postId, text) => async (dispatch) => {
    console.log(text)
    try {
        const result = await axios.post(`${API_URL}/posts/comment/${postId}`, { text: text })
        dispatch({
            type: ADD_COMMENT,
            payload: result.data
        })
        dispatch(setAlert("Comment added", "is-success"))
    }
    catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.message), "is-danger"))
        }
        dispatch({
            type: POST_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        })
    }
}

// Delete a comment by Id
export const deleteComment = (postId, commentId) => async (dispatch) => {
    try {
        await axios.delete(`${API_URL}/posts/comment/${postId}/${commentId}`)
        dispatch({
            type: REMOVE_COMMENT,
            payload: commentId
        })
        dispatch(setAlert("Comment deleted", "is-danger"))
    }
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { message: err.response.statusText, status: err.response.status }
        })
    }
}

// Delete a post by id
export const deletePost = (postId, navigate) => async (dispatch) => {
    try {
        await axios.delete(`${API_URL}/posts/${postId}`)
        dispatch({
            type: DELETE_POST,
            payload: postId
        })
        dispatch(setAlert("Post deleted", "is-success"))
        navigate('/posts')
    }
    catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { message: err.response, status: err.response }
        })
    }
}