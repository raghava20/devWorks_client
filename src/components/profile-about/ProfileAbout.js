import React from "react";
import GithubRepoCards from "../github-repo-cards/GithubRepoCards";
import "./ProfileAbout.css";

const ProfileAbout = ({
    profile: { bio, website, location, skills, social, githubUsername }
}) => {
    return (
        <>
            <h1 className="profile-about-title">About Me</h1>
            <section className="profile-about-content">
                <div className="about-user">
                    {location && (
                        <h1>
                            <i className="fas fa-map-marker-alt "></i>
                            {location}
                        </h1>
                    )}
                    {skills && (
                        <h1>
                            <i className="fas fa-laptop-code"></i>
                            {skills.join(", ")}
                        </h1>
                    )}
                    {bio && (
                        <h1>
                            <i className="fas fa-comment-alt"></i>
                            {/* {bio} */}
                            bio
                        </h1>
                    )}
                </div>
                <div className="about-socials">
                    {website && (
                        <a href={website}>
                            <i className="fas fa-globe blue-text"></i>
                        </a>
                    )}
                    {social && social.twitter && (
                        <a href={social.twitter}>
                            <i className="fab fa-twitter blue-text"></i>
                        </a>
                    )}
                    {social && social.linkedin && (
                        <a href={social.linkedin}>
                            <i className="fab fa-linkedin skyblue-text"></i>
                        </a>
                    )}
                    {social && social.codepen && (
                        <a href={social.codepen}>
                            <i className="fab fa-codepen dark-text"></i>
                        </a>
                    )}
                    {social && social.github && (
                        <a href={social.github}>
                            <i className="fab fa-github dark-text"></i>
                        </a>
                    )}
                </div>
            </section>
            {githubUsername && (
                <>
                    <h1 className="">
                        Latest GitHub Repos <i className="fab fa-github"></i>
                    </h1>
                    <GithubRepoCards username={githubUsername} />
                </>
            )}
        </>
    );
};

export default ProfileAbout;