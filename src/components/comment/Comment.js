import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteComment } from "../../redux/post/post.actions"
import './Comment.css'

const Comment = ({ comment, postId, auth, commentId, deleteComment }) => {
    return (
        <article className="comment">
            <figure>
                <img src={comment.avatar} alt="avatar" />
                <div>
                    <p>
                        <strong>{comment.name}</strong><br />
                        <small className="text-muted"><Moment fromNow>{comment.date}</Moment></small><br />
                        {comment.text}
                    </p>
                </div>
            </figure>
            {
                comment.userId === auth.user._id && (
                    <div class="text-right">
                        <button class="btn btn-outline-danger btn-sm  rounded-circle" onClick={e => deleteComment(postId, commentId)}>x</button>
                    </div>
                )
            }
        </article>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { deleteComment })(Comment)