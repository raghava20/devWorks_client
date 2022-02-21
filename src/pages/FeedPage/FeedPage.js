import React, { useEffect } from 'react'
import Spinner from "../../components/spinner/Spinner"
import DefaultLayout from "../../layouts/DefaultLayout"
import PostCard from "../../components/post-card/PostCard"
import { ReactComponent as NoPostsImage } from "../../images/noposts.svg"
import { connect } from "react-redux"
import { getFeed } from "../../redux/post/post.actions"

const FeedPage = ({ getFeed, post: { posts, loading } }) => {
    useEffect(() => {
        getFeed();
    }, []);

    return (
        <>
            <DefaultLayout>
                {loading ? (
                    <Spinner />
                ) : (
                    <section id="posts" className="container px-5">
                        {posts.length ? (
                            <>
                                <h1 className="title">Your Feed</h1>
                                <div className="columns is-multiline">
                                    {posts.map((post) => (
                                        <PostCard key={post._id} post={post} />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="container is-empty">
                                <NoPostsImage />
                                <h1 className="subtitle">
                                    Uh oh ! Your feed is empty. Go on and follow some more users.
                                </h1>
                            </div>
                        )}
                    </section>
                )}
            </DefaultLayout>
        </>
    );
};

const mapStateToProps = (state) => ({
    post: state.post,
});

export default connect(mapStateToProps, { getFeed })(FeedPage);
