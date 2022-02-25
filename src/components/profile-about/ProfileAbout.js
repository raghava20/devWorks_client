import React from "react";
import "./ProfileAbout.css";

const ProfileAbout = ({
    profile: { bio, website, location, skills, social }
}) => {
    return (
        <>
            <h2 className="profile-about-title mt-3 ms-1">About Me</h2>
            <section className="profile-about-content">
                <div className="about-user">
                    {bio && (
                        <h5>
                            <i className="fas fa-comment-alt ms-1"></i>
                            {bio}
                        </h5>
                    )}
                    {skills && (
                        <h5>
                            <i className="fas fa-laptop-code me-1"></i>
                            {skills.join(", ")}
                        </h5>
                    )}
                    {location && (
                        <h5>
                            <i className="fas fa-map-marker-alt ms-1"></i>
                            {location}
                        </h5>
                    )}
                </div>
                <div className="about-socials">
                    {website && (
                        <a href={website} target="_blank" rel="noreferrer">
                            <i className="fas fa-globe blue-text"></i>
                        </a>
                    )}
                    {social && social.twitter && (
                        <a href={social.twitter} target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter blue-text"></i>
                        </a>
                    )}
                    {social && social.linkedIn && (
                        <a href={social.linkedIn} target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin skyblue-text"></i>
                        </a>
                    )}
                    {social && social.codepen && (
                        <a href={social.codepen} target="_blank" rel="noreferrer">
                            <i className="fab fa-codepen dark-text"></i>
                        </a>
                    )}
                    {social && social.github && (
                        <a href={social.github} target="_blank" rel="noreferrer">
                            <i className="fab fa-github dark-text"></i>
                        </a>
                    )}
                </div>
            </section>
        </>
    );
};

export default ProfileAbout;