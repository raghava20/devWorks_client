import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { withRouter } from "../../hook/withRouter"
import UserLayout from '../../layouts/UserLayout'
import { getPostById } from '../../redux/post/post.actions'
import Spinner from '../../components/spinner/Spinner'
import PostCarousel from '../../components/post-carousel/PostCarousel'
import PostHeader from "../../components/post-header/PostHeader"
import PostTiles from "../../components/post-tiles/PostTiles"


const PostPage = ({ getPostById, post: { post, loading }, params, navigate }) => {
    useEffect(() => {
        let { id } = params
        getPostById(id, navigate)
    }, [])
    return (
        <UserLayout>
            {loading || !post ? (
                <div className="dashboard-spinner">
                    <Spinner />
                </div>
            ) : (
                <section className="postpage-container">
                    <PostHeader post={post} />
                    <PostCarousel images={post.images} />
                    <PostTiles post={post} />
                </section>
            )}
        </UserLayout>
    )
}

const mapStateToProps = (state) => ({
    post: state.post
})

export default withRouter(connect(mapStateToProps, { getPostById })(PostPage))