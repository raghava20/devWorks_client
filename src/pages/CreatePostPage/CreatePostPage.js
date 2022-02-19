import React, { useState } from 'react'


export default function CreatePostPage() {
    const [formData, setFormData] = useState({
        title: null,
        description: null,
        images: null,
        techTags: null,
        liveUrl: null,
        codeUrl: null
    })

    const { title, description, images, techTags, liveUrl, codeUrl } = formData

    const onSubmit = () => {

    }




    return (
        <>
            <section>
                <div>
                    {/*  */}
                    <div>
                        <div>
                            <h1>Create a Post</h1>

                            <form enctype="multipart/form-data" onSubmit={(e) => onSubmit(e)}>
                                <div>
                                    <label>Title</label>
                                    <div>
                                        <input type="text" placeholder="Create a title suit for your post!" />
                                    </div>
                                </div>
                                <div>
                                    <label>Description</label>
                                    <div>
                                        <textarea placeholder="Write a description for your post!" rows="3"></textarea>
                                    </div>
                                </div>
                                <div>
                                    <label>Images</label>
                                    <div>
                                        <label>
                                            <span>
                                                <span>
                                                    <i className="fa fa-upload"></i>
                                                </span>
                                                <span>Upload upto 5 images</span>
                                            </span>
                                            <input type="file" required multiple placeholder="Create a title suit for your post!" />
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label>Technologies Used</label>
                                    <div>
                                        <span >
                                            <i className="fas fa-tag"></i>
                                        </span>
                                        <input type="text" required placeholder="React,Angular,Vue" />
                                    </div>
                                </div>
                                <div>
                                    <label>Website URL</label>
                                    <div>
                                        <span >
                                            <i className="fas fa-globe"></i>
                                        </span>
                                        <input type="text" required placeholder="www.google.com" />
                                    </div>
                                </div>
                                <div>
                                    <label>Source Code URL</label>
                                    <div>
                                        <span >
                                            <i className="fab fa-github"></i>
                                        </span>
                                        <input type="text" required placeholder="www.github.com" />
                                    </div>
                                </div>
                                <div>
                                    <button type="button">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
