import {
    GET_POST, GET_POSTS, POST_ERROR, ADD_POST, ADD_POST_REQUEST,
    UPDATE_LIKES, ADD_COMMENT, REMOVE_COMMENT, DELETE_POST, CLEAR_POST
} from "./post.types"

const initialState = {
    post: null,
    posts: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_POST:
            return { ...state, post: payload, loading: false }
        case GET_POSTS:
            return { ...state, posts: payload, loading: false }
        case ADD_POST_REQUEST:
            return { ...state, loading: true }
        case ADD_POST:
            return { ...state, posts: [...state.posts, payload], loading: false }
        case CLEAR_POST:
            return { ...state, post: null, loading: false }
        case UPDATE_LIKES:
            return { ...state, post: { ...state.post, likes: payload.likes }, loading: false }
        case ADD_COMMENT:
            return { ...state, post: { ...state.post, comments: payload }, loading: false }
        case REMOVE_COMMENT:
            return {
                ...state, post: {
                    ...state.post,
                    comments: state.post.comments.filter(comment => comment._id !== payload)
                }, loading: false
            }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(post => post._id !== payload), loading: false }
        case POST_ERROR:
            return { ...state, error: payload, loading: false }
        default:
            return state;
    }
}