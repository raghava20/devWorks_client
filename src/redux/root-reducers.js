import { combineReducers } from "redux"
import alert from "./alert/alert.reducers"
import auth from "./auth/auth.reducers"
import post from "./post/post.reducers"
import posts from "./posts/posts.reducers"
import profile from "./profile/profile.reducers"

export default combineReducers({ alert, auth, post, posts, profile })