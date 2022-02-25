import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import CommentForm from "../comment-form/CommentForm"
import Comment from "../comment/Comment"
import { deletePost } from "../../redux/post/post.actions"
import "./PostTiles.css"
import { withRouter } from "../../hook/withRouter"

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
    deletePost,
    navigate
}) => {
    return (
        <div className="post-tile-container">
            <div className="post-tile-main">
                <div className="post-tile-left">
                    <div className="post-tile-description">
                        <h1 className="text-bold post-tile-textcolor">Description</h1>
                        <p className="mt-2">
                            {description ? description : "No description provided"}
                        </p>
                        <hr />
                    </div>
                    <div className="post-tile-addcomment">
                        <h1 className="text-bold post-tile-textcolor">Add a Comment</h1>
                        <CommentForm postId={_id} />
                        <hr />
                    </div>
                    <div className="post-tile-comment">
                        <h1 className="text-bold post-tile-textcolor">Comments</h1>
                        {comments.length === 0 ? (
                            <h3 className="fs-4">No comments</h3>
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
                    <div className="post-tile-urls">
                        <a className="btn btn-outline-info post-tile-button " href={liveUrl}>
                            <i className="fas fa-globe me-2"></i>
                            Visit Live Website
                        </a>
                        {codeUrl && (
                            <a className="btn btn-outline-dark post-tile-button " href={codeUrl}>
                                <i className="fab fa-github mr-2"></i>
                                View Source Code
                            </a>
                        )}
                        {user._id === auth.user._id && (
                            <button
                                onClick={(e) => deletePost(_id, navigate)}
                                className="btn btn-outline-danger"
                            >
                                <i className="fas fa-trash mr-2"></i> Delete This Post
                            </button>
                        )}
                        <hr />
                    </div>
                    <div className="post-tile-right-body">
                        <h1 className="text-bold post-tile-textcolor">Tech Stack</h1>
                        <div className="tech-tags d-flex gap-3 align-items-baseline">
                            <i className="fas fa-tag"></i>
                            <p className="text-muted">{techTags.join(", ")}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="post-tile-right-body">
                        <h1 className="text-bold post-tile-textcolor">Other information</h1>
                        <div className="d-flex gap-2 align-items-baseline flex-sm-row flex-column">
                            <i className="fas fa-clock"></i>
                            <span>
                                <Moment fromNow>{date}</Moment>
                            </span>
                            <i className="fas fa-heart"></i>
                            <span>{likes.length} likes</span>

                            <i className="fas fa-comment"></i>
                            <span>{comments.length} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}


const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { deletePost })(withRouter(PostTiles));