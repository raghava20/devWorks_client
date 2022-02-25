import React, { useEffect } from 'react'
import Spinner from "../../components/spinner/Spinner"
import UserLayout from "../../layouts/UserLayout"
import PostCard from "../../components/post-card/PostCard"
import { ReactComponent as NoPostsImage } from "../../images/noposts.svg"
import { connect } from "react-redux"
import { getFeed } from "../../redux/post/post.actions"
import "./FeedPage.css"

const FeedPage = ({ getFeed, post: { posts, loading } }) => {
    useEffect(() => {
        getFeed();
    }, []);

    return (
        <>
            <UserLayout>
                {loading ? (
                    <div className="dashboard-spinner">
                        <Spinner />
                    </div>
                ) : (
                    <section className="feedpage-container">
                        {posts.length ? (
                            <>
                                <h2 className="title mt-3 ms-1">Your Feed</h2>
                                <div className="post-card-container-main">
                                    {posts.map((post) => (
                                        <PostCard key={post._id} post={post} />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="feedpage-notfound">
                                <NoPostsImage className="feedpage-notfound-image" />
                                <h2>
                                    Uh oh ! Your feed is empty. Go on and follow some more users.
                                </h2>
                            </div>
                        )}
                    </section>
                )}
            </UserLayout>
        </>
    );
};

const mapStateToProps = (state) => ({
    post: state.post,
});

export default connect(mapStateToProps, { getFeed })(FeedPage);
