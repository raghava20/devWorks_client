import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import UserLayout from '../../layouts/UserLayout'
import Spinner from '../../components/spinner/Spinner'
import PostCard from '../../components/post-card/PostCard'
import Paginator from '../../components/paginator/Pagination'
import { getAllPosts } from '../../redux/posts/posts.actions';
import usePaginator from '../../hook/usePaginator'
import "./PostPage.css"

export default function PostsPage() {
    const dispatch = useDispatch();
    const { posts, loading } = useSelector(state => state.post)
    const { items, setCurrentPage, currentPage, perPage } = usePaginator(posts)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])
    return (
        <UserLayout>
            {loading ? (
                <div className="dashboard-spinner">
                    <Spinner />
                </div>
            ) : (
                <section className="postpage-container">
                    <h2 className="mt-3 ms-1">Recent Posts</h2>
                    <div className="post-card-container-main">
                        {items.map(post => (
                            <PostCard key={post._id} post={post} />
                        ))}
                    </div>
                    <Paginator onChange={setCurrentPage} current={currentPage} pageSize={perPage} total={posts.length} />
                </section>
            )}
        </UserLayout>
    )
}
