import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import PostCard from "../post-card/PostCard";
import Paginator from "../paginator/Pagination";
import { getUserPostById } from "../../redux/posts/posts.actions";
import usePaginator from "../../hook/usePaginator";

function ProfilePosts({ userId }) {
    const dispatch = useDispatch();
    const { posts, loading } = useSelector((state) => state.posts);
    const { items, currentPage, perPage, setCurrentPage } = usePaginator(posts);

    useEffect(() => {
        dispatch(getUserPostById(userId));
    }, [dispatch, userId]);

    return (
        <>
            {loading && !items ? (
                <div className="dashboard-spinner">
                    <Spinner />
                </div>
            ) : (
                <section className="profile-posts-container">
                    {items.length === 0 ? (
                        <h3 className="profile-posts-title mt-3 ms-1">
                            The user has not posted yet.!
                        </h3>
                    ) : (
                        <div className="post-card-container-main">
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