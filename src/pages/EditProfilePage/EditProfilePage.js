import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import WithRouter from "../../hook/withRouter"
import { getCurrentUserProfile, createProfile } from "../../redux/profile/profile.actions"
import LeftPane from "../../components/left-pane/LeftPane"
import ProfileInput from '../../components/profile-input/ProfileInput'

const EditProfilePage = ({ getCurrentUserProfile, createProfile, profile: { profile, loading }, navigate }) => {
    const [formData, setFormData] = useState({
        bio: "",
        website: "",
        location: "",
        skills: "",
        githubUserName: "",
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
            githubUsername:
                loading || !profile.githubUsername ? "" : profile.githubUsername,
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
        githubUserName,
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
        <section>
            <div>
                <LeftPane>Let's add some values to your profile! </LeftPane>
                <div>
                    <div>
                        <h1>Edit Profile</h1>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div>
                                <div>
                                    <label>Bio</label>
                                </div>
                                <div>
                                    <textarea placeholder="React Developer" row="2" name="bio" value={bio} onChange={(e) => onChange(e)}></textarea>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Skills</label>
                                </div>
                                <div>
                                    <ProfileInput
                                        placeholder="React,Angular,Vue..."
                                        name="skills" icon="fas fa-laptop-code"
                                        value={skills} onChange={onChange}
                                        smallText="Please seperate each skill using a comma"
                                    ></ProfileInput>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Location</label>
                                </div>
                                <div>
                                    <ProfileInput
                                        placeholder="Tamil Nadu, India"
                                        name="location" icon="fas fa-map-marker-alt"
                                        value={location}
                                        onChange={onChange}
                                    ></ProfileInput>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Website & GitHub</label>
                                </div>
                                <div>
                                    <span >
                                        <i className="fas fa-globe"></i>
                                    </span>
                                    <input placeholder="geeks.net" />
                                    <span >
                                        <i className="fab fa-github"></i>
                                    </span>
                                    <input placeholder="GitHub Username" />
                                    <ProfileInput
                                        placeholder="geeks.net" name="website"
                                        icon="fas fa-globe" value={website}
                                        onChange={onChange}
                                    ></ProfileInput>
                                    <ProfileInput
                                        placeholder="Github Username" name="githubUserName"
                                        icon="fas fa-github" value={githubUserName}
                                        onChange={onChange}
                                        smallText="This will be used to fetch your repos"
                                    ></ProfileInput>

                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Social</label>
                                </div>
                                <div>
                                    <ProfileInput
                                        placeholder="Twitter profile"
                                        name="twitter" icon="fab fa-twitter"
                                        value={twitter} onChange={onChange}
                                    ></ProfileInput>
                                    <ProfileInput
                                        placeholder="LinkedIn profile"
                                        name="linkedIn" icon="fab fa-linkedin"
                                        value={linkedIn} onChange={onChange}
                                    ></ProfileInput>
                                </div>
                            </div><div>

                                <div>
                                    <ProfileInput
                                        placeholder="Codepen profile"
                                        name="codepen" icon="fas fa-codepen"
                                        value={codepen} onChange={onChange}
                                    ></ProfileInput>
                                    <ProfileInput
                                        placeholder="GitHub profile"
                                        name="github" icon="fab fa-github"
                                        value={github} onChange={onChange}
                                    ></ProfileInput>
                                </div>
                            </div>
                            <div>
                                <button type="submit" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentUserProfile, createProfile })(WithRouter(EditProfilePage))