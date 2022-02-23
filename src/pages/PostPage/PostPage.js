import React, { useEffect } from 'react'
import { connect } from "react-redux"
import WithRouter from "../../hook/withRouter"
import UserLayout from '../../layouts/UserLayout'
import { getPostById } from '../../redux/post/post.actions'
import Spinner from '../../components/spinner/Spinner'
import PostCarousel from '../../components/post-carousel/PostCarousel'
import PostHeader from "../../components/post-header/PostHeader"
import PostTiles from "../../components/post-tiles/PostTiles"


const PostPage = ({ getPostById, post: { post, loading }, match, navigate }) => {
    useEffect(() => {
        getPostById(match.params.id, navigate)
    }, [])
    return (
        <UserLayout>
            {loading || !post ? (
                <div>
                    <Spinner />
                </div>
            ) : (
                <section>
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

export default connect(mapStateToProps, { getPostById })(WithRouter(PostPage))