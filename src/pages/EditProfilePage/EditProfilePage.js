import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { withRouter } from "../../hook/withRouter"
import { getCurrentUserProfile, createProfile } from "../../redux/profile/profile.actions"
import AuthLeftPane from "../../components/left-pane/AuthLeftPane"
import ProfileInput from '../../components/profile-input/ProfileInput'
import "../CreateProfilePage/CreateProfilePage.css"

const EditProfilePage = ({ getCurrentUserProfile, createProfile, profile: { profile, loading }, navigate }) => {
    const [formData, setFormData] = useState({
        bio: "",
        website: "",
        location: "",
        skills: "",
        twitter: "",
        linkedIn: "",
        codepen: "",
        github: "",
    });

    useEffect(() => {
        getCurrentUserProfile();
        setFormData({
            bio: loading || !profile.bio ? "" : profile.bio,
            website: loading || !profile.website ? "" : profile.website,
            location: loading || !profile.location ? "" : profile.location,
            skills: loading || !profile.skills ? "" : profile.skills.join(","),
            twitter: loading || !profile.social ? "" : profile.social.twitter,
            linkedIn: loading || !profile.social ? "" : profile.social.linkedIn,
            codepen: loading || !profile.social ? "" : profile.social.codepen,
            github: loading || !profile.social ? "" : profile.social.github,
        });

    }, [loading]);

    const {
        bio,
        website,
        location,
        skills,
        twitter,
        linkedIn,
        codepen,
        github,
    } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, navigate, true);
    };

    return (
        <section className="createprofile-container">
            <div>
                <AuthLeftPane>Let's add some values to your profile! </AuthLeftPane>
            </div>
            <div className="createprofile-main">
                <div>
                    <h1 className="createprofile-heading">Edit Profile</h1>
                </div>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="createprofile-content">
                        <label>Bio</label>
                        <textarea className="p-1" placeholder="React Developer" row="2" name="bio" value={bio} onChange={(e) => onChange(e)}></textarea>
                    </div>
                    <div className="createprofile-content">

                        <label>Skills</label>

                        <ProfileInput
                            placeholder="React,Angular,Vue..."
                            name="skills" icon="fas fa-laptop-code"
                            value={skills} onChange={onChange}
                            smallText="Please seperate each skill using a comma"
                        ></ProfileInput>

                    </div>
                    <div className="createprofile-content">
                        <label>Location</label>

                        <ProfileInput
                            placeholder="Tamil Nadu, India"
                            name="location" icon="fas fa-map-marker-alt"
                            value={location}
                            onChange={onChange}
                        ></ProfileInput>
                    </div>
                    <div className="createprofile-content">

                        <label>Website</label>

                        <div class="createprofile-spantwo">
                            <div class="createprofile-spantwo-content">
                                <ProfileInput
                                    placeholder="geeks.net" name="website"
                                    icon="fas fa-globe" value={website}
                                    onChange={onChange}
                                ></ProfileInput>
                            </div>
                        </div>
                    </div>
                    <div className="createprofile-content">
                        <label>Social</label>

                        <div class="createprofile-spantwo">
                            <div class="createprofile-spantwo-content">
                                <ProfileInput
                                    placeholder="Twitter profile"
                                    name="twitter" icon="fab fa-twitter"
                                    value={twitter} onChange={onChange}
                                ></ProfileInput>
                            </div>
                            <div class="createprofile-spantwo-content">
                                <ProfileInput
                                    placeholder="LinkedIn profile"
                                    name="linkedIn" icon="fab fa-linkedin"
                                    value={linkedIn} onChange={onChange}
                                ></ProfileInput>
                            </div>
                        </div>
                    </div>
                    <div className="createprofile-content">

                        <div class="createprofile-spantwo">
                            <div class="createprofile-spantwo-content">
                                <ProfileInput
                                    placeholder="Codepen profile"
                                    name="codepen" icon="fab fa-codepen"
                                    value={codepen} onChange={onChange}
                                ></ProfileInput>
                            </div>
                            <div class="createprofile-spantwo-content">
                                <ProfileInput
                                    placeholder="GitHub profile"
                                    name="github" icon="fab fa-github"
                                    value={github} onChange={onChange}
                                ></ProfileInput>
                            </div>
                        </div>
                    </div>
                    <div className="createprofile-content-btn">
                        <button type="submit" >Submit</button>
                    </div>
                </form>

            </div>

        </section>
    )

}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentUserProfile, createProfile })(withRouter(EditProfilePage))