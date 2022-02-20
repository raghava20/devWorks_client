import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteComment } from "../../redux/post/post.actions"
import './Comment.css'

const Comment = ({ comment, postId, auth, commentId, deleteComment }) => {
    return (
        <article>
            <figure>
                <p>{comment.avatar}</p>
            </figure>
            <div>
                <div>
                    <p>
                        <strong>{comment.name}</strong><br />
                        <small fromNow><Moment>{comment.date}</Moment></small><br />
                        {comment.text}
                    </p>
                </div>
            </div>
            {
                comment.userId === auth.user._id && (
                    <div class="text-right">
                        <button class="btn btn-outline-danger rounded-circle" onClick={e => deleteComment(postId, commentId)}>x</button>
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