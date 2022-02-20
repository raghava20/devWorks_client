import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import PostCard from "../post-card/PostCard";
import Paginator from "../paginator/Pagination";
import { getUserPosts } from "../../redux/posts/posts.actions";
import usePaginator from "../../hook/usePaginator";

function ProfilePosts({ userId }) {
    const dispatch = useDispatch();
    const { posts, loading } = useSelector((state) => state.posts);
    const { items, currentPage, perPage, setCurrentPage } = usePaginator(posts);

    useEffect(() => {
        dispatch(getUserPosts(userId));
    }, [dispatch, userId]);

    return (
        <>
            {loading && !items ? (
                <div className="full-height-spinner">
                    <Spinner />
                </div>
            ) : (
                <section className="container">
                    {items.length === 0 ? (
                        <h1 className="profile-posts-title">
                            Start to show up your skills!
                        </h1>
                    ) : (
                        <div className="profile-posts-main">
                            {items.map((post) => (
                                <PostCard key={post._id} post={post} />
                            ))}
                        </div>
                    )}
                    <Paginator
                        onChange={setCurrentPage}
                        current={currentPage}
                        pageSize={perPage}
                        total={posts.length}
                    />
                </section>
            )}
        </>
    );
}

export default ProfilePosts;