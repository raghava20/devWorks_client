import React, { useState } from 'react'


export default function CreateProfilePage() {
    const [formData, setFormData] = useState({
        bio: null,
        website: null,
        location: null,
        githubUserName: null,
        twitter: null,
        linkedIn: null,
        codepen: null,
        github: null
    })

    const { bio, website, location, githubUserName, twitter, linkedIn, codepen, github } = formData

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section>
            <div>
                {/*  */}
                <div>
                    <div>
                        <h1>Create Profile</h1>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div>
                                <div>
                                    <label>Bio</label>
                                </div>
                                <div>
                                    <textarea placeholder="React Developer" row="2"></textarea>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Skills</label>
                                </div>
                                <div>
                                    <span >
                                        <i className="fas fa-laptop-code"></i>
                                    </span>
                                    <input placeholder="React,Angular,Vue" required />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Location</label>
                                </div>
                                <div>
                                    <span >
                                        <i className="fas fa-map-marker-alt"></i>
                                    </span>
                                    <input placeholder="Tamil Nadu, India" />
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
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Social</label>
                                </div>
                                <div>
                                    <span >
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                    <input placeholder="Twitter profile" />
                                    <span >
                                        <i className="fab fa-linkedin"></i>
                                    </span>
                                    <input placeholder="LinkedIn profile" />
                                </div>
                            </div><div>

                                <div>
                                    <span >
                                        <i className="fas fa-codepen"></i>
                                    </span>
                                    <input placeholder="Codepen profile" />
                                    <span >
                                        <i className="fab fa-github"></i>
                                    </span>
                                    <input placeholder="GitHub profile" />
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
