import React, { useState, useEffect } from "react";
import ProfileAbout from "../profile-about/ProfileAbout";
import FollowList from "../follow-list/FollowList";
import ProfilePosts from "../profile-posts/ProfilePosts";
import "./ProfileTabs.css";

const ProfileTabs = ({ profile, userId }) => {
    const [activeTab, setActiveTab] = useState("posts");

    useEffect(() => {

        const list = document.querySelectorAll(".profile-tabs a")

        function activeLink() {

            list.forEach(item => {
                item.classList.remove("active")
                this.classList.add("active")
            })
        }
        list.forEach(item => {
            item.addEventListener("click", activeLink)
        })
    }, [])

    return (
        <>
            {!profile ? null : (
                <>
                    {/* <div className="tabs is-boxed">
                        <ul>
                            <li
                                onClick={() => setActiveTab("posts")}
                                className={activeTab === "posts" ? "is-active" : undefined}
                            >
                                <a href="#!">
                                    <span className="icon is-small">
                                        <i className="fas fa-image" aria-hidden="true"></i>
                                    </span>
                                    <span>Posts</span>
                                </a>
                            </li>
                            <li
                                onClick={() => setActiveTab("about")}
                                className={activeTab === "about" ? "is-active" : undefined}
                            >
                                <a href="#!">
                                    <span className="icon is-small">
                                        <i className="fas fa-user" aria-hidden="true"></i>
                                    </span>
                                    <span>About</span>
                                </a>
                            </li>
                            <li
                                onClick={() => setActiveTab("followers")}
                                className={activeTab === "followers" ? "is-active" : undefined}
                            >
                                <a href="#!">
                                    <span className="icon is-small">
                                        <i className="fas fa-user-friends" aria-hidden="true"></i>
                                    </span>
                                    <span>Followers</span>
                                </a>
                            </li>
                            <li
                                onClick={() => setActiveTab("following")}
                                className={activeTab === "following" ? "is-active" : undefined}
                            >
                                <a href="#!">
                                    <span className="icon is-small">
                                        <i className="fas fa-user-friends" aria-hidden="true"></i>
                                    </span>
                                    <span>Following</span>
                                </a>
                            </li>
                        </ul>
                    </div> */}
                    <div className="profile-tabs  ">
                        <ul class="nav nav-tabs mt-2 flex-nowrap">
                            <li class="nav-item" onClick={() => setActiveTab("posts")}>
                                <a class="nav-link active" href="#!"><i class="fa-solid fa-image"></i> Posts</a>
                            </li>
                            <li class="nav-item" onClick={() => setActiveTab("followers")}>
                                <a class="nav-link" href="#!"><i class="fa-solid fa-users"></i> Followers</a>
                            </li>
                            <li class="nav-item" onClick={() => setActiveTab("following")}>
                                <a class="nav-link" href="#!"><i class="fa-solid fa-users"></i> Following</a>
                            </li>
                            <li class="nav-item" onClick={() => setActiveTab("about")}>
                                <a class="nav-link" href="#!"><i class="fa-solid fa-user"></i> About</a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="profile-tabs-contents"
                        style={activeTab === "posts" ? { display: "block" } : null}
                    >
                        <ProfilePosts userId={userId} />
                    </div>
                    <div
                        className="profile-tabs-contents"
                        style={activeTab === "about" ? { display: "block" } : null}
                    >
                        <ProfileAbout profile={profile} />
                    </div>
                    <div
                        className="profile-tabs-contents"
                        style={activeTab === "followers" ? { display: "block" } : null}
                    >
                        <FollowList
                            list={profile ? profile.followers : []}
                            which="followers"
                        />
                    </div>
                    <div
                        className="profile-tabs-contents"
                        style={activeTab === "following" ? { display: "block" } : null}
                    >
                        <FollowList
                            list={profile ? profile.following : []}
                            which="following"
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default ProfileTabs;