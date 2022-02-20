
import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <div className="post-card-header">
                <Link to={`/posts/${post._id}`}>
                    <img src={post.images[post.images.length - 1]} alt="Post card" />
                </Link>

                <div>
                    <h2>{post.title}</h2>
                </div>
            </div>

            <div className="post-card-footer">
                <div className="post-card-footer-description">
                    <Link to={`/profile/${post.user._id}`}>
                        <div>
                            <img src={post.user.avatar} alt="Profile avatar" />
                            <h2>{post.user.name}</h2>

                        </div>
                    </Link>

                    <div>
                        <i className="far fa-heart"></i> <span>{post.likes.length}</span>
                        <i className="far fa-comment ml-2"></i> <span>{post.comments.length}</span>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default PostCard;