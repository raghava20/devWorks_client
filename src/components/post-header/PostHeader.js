
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addLike, removeLike } from "../../redux/post/post.actions"
import "./PostHeader.css"

const PostHeader = ({
    post: { user, title, likes, _id },
    auth,
    addLike,
    removeLike
}) => {
    const [changeLikeText, setChangeLikeTest] = useState("Like");

    const likeOrUnlike = () => {
        <button onClick={() => {
            if (changeLikeText === "Like") {
                addLike(_id);
                setChangeLikeTest("Unlike");
            } else {
                removeLike(_id);
                setChangeLikeTest("Like");
            }
        }}><i className="fas fa-heart mr-2"></i> {changeLikeText}</button>
    }
    useEffect(() => {
        if (likes.filter((like) => like.user._id === auth.user._id).length === 0) {
            setChangeLikeTest("Like");
        } else {
            setChangeLikeTest("Unlike");
        }
        // eslint-disable-next-line
    }, [auth.user._id]);

    return (
        <div className="post-header justify-content-between">
            <div className="post-header-left">
                <img src={user.avatar} alt="Post owner avatar" />
                <div className="post-header-text">
                    <h1>{title}</h1>
                    <h3>
                        by{" "}
                        <Link
                            to={`/profile/${user._id}`}
                            className="text-muted"
                        >
                            {user.name}
                        </Link>
                    </h3>
                </div>
            </div>
            <div className="post-header-right">{likeOrUnlike()}</div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addLike, removeLike })(PostHeader)
