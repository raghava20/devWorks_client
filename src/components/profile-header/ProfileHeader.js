import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ProfileHeader.css";
import { API_URL } from "../../components/API_URL/API_URL"


const ProfileHeader = ({ profile, ownProfile, isDashboard, auth, id }) => {
    const followUser = async () => {
        await axios.put(`${API_URL}/profile/follow/${id}`);
        window.location.reload(false);
    };

    const unfollowUser = async () => {
        await axios.put(`${API_URL}/profile/unfollow/${id}`);
        window.location.reload(false);
    };

    const followOrUnfollowButton = () => {
        if (profile.followers.filter((follower) => follower.user._id === auth.user._id).length === 0) {
            return (
                <button onClick={followUser} className="dashboard-profile-btn">
                    <i className="fas fa-user-plus mr-2"></i> Follow
                </button>
            );
        } else {
            return (
                <button onClick={unfollowUser} className="dashboard-profile-btn">
                    <i className="fas fa-user-minus mr-2"></i> Unfollow
                </button>
            );
        }
    };
    return profile ?
        (
            <div id="profile-header" className="mt-3">
                <img src={profile.user.avatar} alt="User avatar" />
                <div className="text-container">
                    <h1 className="title">{profile.user.name}</h1>
                    <h3 className="subtitle">{profile.bio}</h3>
                    {ownProfile || isDashboard ? (
                        <Link to="/profile/edit" className="dashboard-profile-btn text-decoration-none">
                            <i className="fas fa-user-edit mr-2"></i> Edit Profile
                        </Link>
                    ) : (
                        followOrUnfollowButton()
                    )}
                </div>
            </div>
        )

        :
        <div id="profile-header" className="mt-3">
            <div className="text-container ">
                <h1 className="title">Uh oh ! Profile not yet created.</h1>
                <Link to="/profile/create" className="dashboard-profile-btn text-decoration-none">
                    <i className="fas fa-user-cog"></i> Create Profile
                </Link>
            </div>
        </div>
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(ProfileHeader);