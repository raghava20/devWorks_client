import React, { useState } from 'react'
import WithRouter from "../../hook/withRouter"
import { connect } from "react-redux"
import { addPost } from "../../redux/post/post.actions"
import LeftPane from "../../components/left-pane/LeftPane"


const CreatePostPage = ({ addPost, navigate, isLoading }) => {
    const [formData, setFormData] = useState({
        title: null,
        description: null,
        images: null,
        techTags: null,
        liveUrl: null,
        codeUrl: null
    })

    const { title, description, images, techTags, liveUrl, codeUrl } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onImageSelect = (e) => {
        setFormData({ ...formData, images: e.target.files })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const post = new FormData();
        post.append("title", title)
        post.append("description", description)
        post.append("techTags", techTags)
        post.append("liveUrl", liveUrl)
        post.append("codeUrl", codeUrl)
        for (const key of Object.keys(images)) {
            post.append("images", images[key])
        }
        addPost(post, navigate)
    }

    return (
        <>
            <section>
                <div>
                    <LeftPane>Great! Everyone will love this post and be excited to taste it.</LeftPane>
                    <div>
                        <div>
                            <h1>Create a Post</h1>

                            <form enctype="multipart/form-data" onSubmit={(e) => onSubmit(e)}>
                                <div>
                                    <label>Title</label>
                                    <div>
                                        <input type="text" name="title" placeholder="Create a title suit for your post!" value={title} onChange={(e) => onChange(e)} />
                                    </div>
                                </div>
                                <div>
                                    <label>Description</label>
                                    <div>
                                        <textarea name="description" placeholder="Write a description for your post!" rows="3" value={description} onChange={(e) => onChange(e)}></textarea>
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
                                            <input type="file" name="images" required multiple placeholder="Create a title suit for your post!" onChange={(e) => onImageSelect(e)} />
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label>Technologies Used</label>
                                    <div>
                                        <span >
                                            <i className="fas fa-tag"></i>
                                        </span>
                                        <input type="text" name="techTags" required placeholder="React,Angular,Vue" value={techTags} onChange={(e) => onChange(e)} />
                                    </div>
                                </div>
                                <div>
                                    <label>Website URL</label>
                                    <div>
                                        <span >
                                            <i className="fas fa-globe"></i>
                                        </span>
                                        <input type="text" name="liveUrl" required placeholder="www.google.com" value={liveUrl} onChange={(e) => onChange(e)} />
                                    </div>
                                </div>
                                <div>
                                    <label>Source Code URL</label>
                                    <div>
                                        <span >
                                            <i className="fab fa-github"></i>
                                        </span>
                                        <input type="text" name="codeUrl" required placeholder="www.github.com" value={codeUrl} onChange={(e) => onChange(e)} />
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

const mapStateToProps = (state) => ({
    isLoading: state.post.loading
})

export default connect(mapStateToProps, { addPost })(WithRouter(CreatePostPage))