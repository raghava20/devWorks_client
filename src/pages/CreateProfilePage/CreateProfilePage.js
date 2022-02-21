import React, { useState } from 'react'
import { createProfile } from "../../redux/profile/profile.actions"
import WithRouter from "../../hook/withRouter"
import LeftPane from "../../components/left-pane/LeftPane"
import { connect } from "react-redux"
import ProfileInput from "../../components/profile-input/ProfileInput"

const CreateProfilePage = ({ createProfile, navigate }) => {
    const [formData, setFormData] = useState({
        bio: null,
        website: null,
        location: null,
        skills: null,
        githubUserName: null,
        twitter: null,
        linkedIn: null,
        codepen: null,
        github: null
    })

    const { bio, website, location, skills, githubUserName, twitter, linkedIn, codepen, github } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, navigate)
    }

    return (
        <section>
            <div>
                <LeftPane>An attractive Profile might be stand out from the screen.</LeftPane>
                <div>
                    <div>
                        <h1>Create Profile</h1>
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

export default connect(null, { createProfile })(WithRouter(CreateProfilePage))