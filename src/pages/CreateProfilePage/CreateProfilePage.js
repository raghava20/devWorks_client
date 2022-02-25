import React, { useState } from 'react'
import { createProfile } from "../../redux/profile/profile.actions"
import { withRouter } from "../../hook/withRouter"
import AuthLeftPane from "../../components/left-pane/AuthLeftPane"
import { connect } from "react-redux"
import ProfileInput from "../../components/profile-input/ProfileInput"
import "./CreateProfilePage.css"

const CreateProfilePage = ({ createProfile, navigate }) => {
    const [formData, setFormData] = useState({
        bio: null,
        website: null,
        location: null,
        skills: null,
        twitter: null,
        linkedIn: null,
        codepen: null,
        github: null
    })

    const { bio, website, location, skills, twitter, linkedIn, codepen, github } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, navigate)
    }

    return (
        <section className="createprofile-container">
            <div>
                <AuthLeftPane>An attractive Profile might be stand out from the screen.</AuthLeftPane>
            </div>
            <div className="createprofile-main">
                <div>
                    <h1 className="createprofile-heading">Create Profile</h1>
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
                    <div>
                        <div class="createprofile-spantwo">

                            <div class="createprofile-spantwo-content">
                                <ProfileInput
                                    placeholder="Codepen profile"
                                    name="codepen" icon="fa-brands fa-codepen"
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

export default connect(null, { createProfile })(withRouter(CreateProfilePage))