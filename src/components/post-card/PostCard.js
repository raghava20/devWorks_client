
import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.css"

const PostCard = ({ post }) => {

    return (
        <div className="post-card">
            <div className="post-card-header">
                <Link to={`/posts/${post._id}`}>
                    <img className="post-image" src={post.images[post.images.length - 1]} alt="Post card" />
                </Link>

                <div className="card-overlay">
                    <h2>{post.title}</h2>
                </div>
            </div>

            <div className="post-card-footer">
                <div className="post-card-footer-description">
                    <Link to={`/profile/${post.user._id}`} className="text-decoration-none">
                        <div className="user-info ">
                            <img src={post.user.avatar} alt="ProfileAvatar" />
                            <h2>{post.user.name}</h2>
                        </div>
                    </Link>

                    <div className="like-comment">
                        <i className="far fa-heart"></i> <span>{post.likes.length}</span>
                        <i className="far fa-comment ms-2"></i> <span>{post.comments.length}</span>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default PostCard;