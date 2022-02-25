import React from "react";
import "./ProfileCard.css";
import { withRouter } from "../../hook/withRouter"

const ProfileCard = ({
    profile: { user, social, bio, followers, following, skills },
    navigate
}) => {
    return (
        <div className="profile-card">
            <div className="profile-card-content" onClick={() => navigate(`/profile/${user._id}`)}>
                <div className="profile-card-header">
                    <img src={user.avatar} alt="User avatar" />
                </div>
                <div className="profile-card-body">
                    <div className="media">
                        <div className="media-content">
                            <p className="mt-2"><strong>{user.name}</strong></p>
                            <p className="text-muted">{bio}</p>
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
                    <p className="mb-0 text-muted">{followers.length} Followers</p>
                    <p className="mb-0 text-muted">{following.length} Following</p>
                </footer>
            </div>
        </div>
    );
};

export default withRouter(ProfileCard);