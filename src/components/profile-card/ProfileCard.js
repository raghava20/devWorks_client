import React from "react";
import WithRouter from "../../hook/withRouter";
import "./ProfileCard.css";

const ProfileCard = ({
    profile: { user, social, bio, followers, following, skills },
    navigate,
}) => {
    return (
        <div className="profile-card">
            <div className="profile-card-content" onClick={() => navigate(`/profile/${user._id}`)}>
                <header className="card-header">
                    <img src={user.avatar} alt="User avatar" />
                </header>
                <div className="profile-card-body">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{user.name}</p>
                            <p className="subtitle is-6">{bio}</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>
                            Skilled in: {skills.slice(0, 4).join(", ")}
                            {skills.length > 4 && <span> and more</span>}
                        </p>
                        <div className="social-icons">
                            {social && social.twitter && (
                                <a href={social.twitter}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                            )}
                            {social && social.linkedin && (
                                <a href={social.linkedin}>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            )}
                            {social && social.codepen && (
                                <a href={social.codepen}>
                                    <i className="fab fa-codepen"></i>
                                </a>
                            )}
                            {social && social.github && (
                                <a href={social.github}>
                                    <i className="fab fa-github"></i>
                                </a>
                            )}
                        </div>
                        <br />
                    </div>
                </div>
                <footer className="profile-card-footer">
                    <p className="card-footer-item">{followers.length} Followers</p>
                    <p className="card-footer-item">{following.length} Following</p>
                </footer>
            </div>
        </div>
    );
};

export default WithRouter(ProfileCard);