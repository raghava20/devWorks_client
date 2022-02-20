import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { CommentForm } from "../comment-form/CommentForm"
import { Comment } from "../comment/Comment"
import { deletePost } from "../../redux/post/post.actions"

const PostTiles = ({
    post: {
        _id,
        description,
        liveUrl,
        codeUrl,
        techTags,
        comments,
        date,
        likes,
        user,
    },
    auth,
    deletePost
}) => {

    <div className="post-tile-container">
        <div className="post-tile-main">
            <div className="post-tile-left">
                <div className="post-tile-description">
                    <h1 className="text-bold">Description</h1>
                    <p className="subtitle mt-2">
                        {description ? description : "No description provided"}
                    </p>
                    <hr />
                </div>
                <div className="post-tile-addcomment">
                    <h1 className="text-bold">Add a Comment</h1>
                    <CommentForm postId={_id} />
                    <hr />
                </div>
                <div className="post-tile-comment">
                    <h1 className="text-bold">Comments</h1>
                    {comments.length === 0 ? (
                        <h3 className="post-tile-subtitle">No comments</h3>
                    ) : (
                        comments.map((comment) => (
                            <Comment
                                key={comment._id}
                                postId={_id}
                                commentId={comment._id}
                                comment={comment}
                            />
                        ))
                    )}
                    <hr />
                </div>
            </div>
            <div className="post-tile-right">
                <div className="post-tile-right-body">
                    <div className="post-tile-urls">
                        <a className="post-tile-button" href={liveUrl}>
                            <i className="fas fa-globe mr-2"></i>
                            Visit Live Website
                        </a>
                        {codeUrl && (
                            <a className="post-tile-button " href={codeUrl}>
                                <i className="fab fa-github mr-2"></i>
                                View Source Code
                            </a>
                        )}
                        {user._id === auth.user._id && (
                            <button
                                onClick={(e) => deletePost(_id)}
                                className="button is-danger"
                            >
                                <i className="fas fa-trash mr-2"></i> Delete This Post
                            </button>
                        )}
                        <hr />
                    </div>
                </div>
                <div className="post-tile-right-body">
                    <h1 className="text-bold">Tech Stack</h1>
                    <div className="tech-tags">
                        <i className="fas fa-tag"></i>
                        <p className="text-muted">{techTags.join(", ")}</p>
                    </div>
                    <hr />
                </div>
                <div className="post-tile-right-body">
                    <h1 className="text-bold">Other information</h1>
                    <div className="other-info">
                        <i className="fas fa-clock"></i>
                        <span>
                            <Moment fromNow>{date}</Moment>
                        </span>
                        <br />
                        <i className="fas fa-heart"></i>
                        <span>{likes.length} likes</span>
                        <br />
                        <i className="fas fa-comment"></i>
                        <span>{comments.length} comments</span>
                    </div>
                </div>
            </div>
        </div>
    </div >

}


const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { deletePost })(PostTiles);