import React, { useState } from "react";
import ProfileAbout from "../profile-about/ProfileAbout";
import FollowList from "../follow-list/FollowList";
import ProfilePosts from "../profile-posts/ProfilePosts";
import "./ProfileTabs.css";

const ProfileTabs = ({ profile, userId }) => {
    const [activeTab, setActiveTab] = useState("posts");

    return (
        <>
            {!profile ? null : (
                <><div className="profile-tabs-container">

                    <div className="profile-tabs">
                        <ul class="nav nav-tabs mt-2 flex-nowrap">
                            <li class="nav-item" onClick={() => setActiveTab("posts")}>
                                <a class={activeTab === "posts" ? "nav-link active" : "nav-link"} href="#!"><i class="fa-solid fa-image"></i> Posts</a>
                            </li>
                            <li class="nav-item" onClick={() => setActiveTab("followers")}>
                                <a class={activeTab === "followers" ? "nav-link active" : "nav-link"} href="#!"><i class="fa-solid fa-users"></i> Followers</a>
                            </li>
                            <li class="nav-item" onClick={() => setActiveTab("following")}>
                                <a class={activeTab === "following" ? "nav-link active" : "nav-link"} href="#!"><i class="fa-solid fa-users"></i> Following</a>
                            </li>
                            <li class="nav-item" onClick={() => setActiveTab("about")}>
                                <a class={activeTab === "about" ? "nav-link active" : "nav-link"} href="#!"><i class="fa-solid fa-user"></i> About</a>
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
                            parent="followers"
                        />
                    </div>
                    <div
                        className="profile-tabs-contents"
                        style={activeTab === "following" ? { display: "block" } : null}
                    >
                        <FollowList
                            list={profile ? profile.following : []}
                            parent="following"
                        />
                    </div>
                </div>
                </>
            )}
        </>
    );
};

export default ProfileTabs;