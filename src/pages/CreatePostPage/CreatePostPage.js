import React, { useState } from 'react'
import { withRouter } from "../../hook/withRouter"
import { connect } from "react-redux"
import { addPost } from "../../redux/post/post.actions"
import AuthLeftPane from "../../components/left-pane/AuthLeftPane"
import "../Signup/Signup.css"

const CreatePostPage = ({ addPost, navigate, isLoading }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        images: "",
        techTags: "",
        liveUrl: "",
        codeUrl: ""
    })

    const { title, description, images, techTags, liveUrl, codeUrl } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onImageSelect = (e) => {
        setFormData({ ...formData, images: e.target.files })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const post = new FormData();
        post.append("title", title);

        post.append("description", description);
        post.append("techTags", techTags);
        post.append("liveUrl", liveUrl);
        post.append("codeUrl", codeUrl);
        for (const key of Object.keys(images)) {
            post.append("images", images[key])
        }
        // for (var pair of post.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }
        addPost(post, navigate)
    }

    return (
        <>
            <section className="signup-container">
                <div>
                    <AuthLeftPane>Great! Everyone will love this post and be excited to taste it.</AuthLeftPane>
                </div>
                <div className="signup-main">
                    <div>
                        <h1 className="signup-heading">Create a Post</h1>
                    </div>
                    <form encType="multipart/form-data" onSubmit={(e) => onSubmit(e)} method="post">
                        <div className="signup-content">
                            <label>Title</label>
                            <input className="ps-1" type="text" name="title" placeholder="Create a title suit for your post!" value={title} onChange={(e) => onChange(e)} />
                        </div>
                        <div className="signup-content">
                            <label>Description</label>

                            <textarea className="p-1" name="description" placeholder="Write a description for your post!" rows="3" value={description} onChange={(e) => onChange(e)}></textarea>

                        </div>
                        <div className="signup-content">
                            <label>Images</label>
                            <span>
                                <i className="fa fa-upload"></i>
                            </span>
                            <div className="uploadimage-btn-main">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;upto 5 images <input className="uploadimage-btn" type="file" name="images" accept=".png, .jpg, .jpeg" required multiple onChange={(e) => onImageSelect(e)} /></div>

                        </div>
                        <div className="signup-content">
                            <label>Technologies Used</label>

                            <span >
                                <i className="fas fa-tag"></i>
                            </span>
                            <input type="text" name="techTags" required placeholder="React,Angular,Vue" value={techTags} onChange={(e) => onChange(e)} />

                        </div>
                        <div className="signup-content">
                            <label>Website URL</label>

                            <span >
                                <i className="fas fa-globe"></i>
                            </span>
                            <input type="text" name="liveUrl" required placeholder="www.google.com" value={liveUrl} onChange={(e) => onChange(e)} />

                        </div>
                        <div className="signup-content">
                            <label>Source Code URL</label>

                            <span >
                                <i className="fab fa-github"></i>
                            </span>
                            <input type="text" name="codeUrl" placeholder="www.github.com" value={codeUrl} onChange={(e) => onChange(e)} />

                        </div>
                        <div className="signup-content-btn">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>


            </section>
        </>
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.post.loading
})

export default connect(mapStateToProps, { addPost })(withRouter(CreatePostPage))