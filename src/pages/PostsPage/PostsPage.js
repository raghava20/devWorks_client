import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import UserLayout from '../../layouts/UserLayout'
import Spinner from '../../components/spinner/Spinner'
import PostCard from '../../components/post-card/PostCard'
import Paginator from '../../components/paginator/Pagination'
import { getAllPosts } from '../../redux/posts/posts.actions';
import usePaginator from '../../hook/usePaginator'

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
                <div>
                    <Spinner />
                </div>
            ) : (
                <section>
                    <h2>Recent Posts</h2>
                    <div>
                        {items.map(post => {
                            return <PostCard key={post._id} post={post} />
                        })}
                    </div>
                    <Paginator onChange={setCurrentPage} current={currentPage} pageSize={perPage} total={posts.length} />
                </section>
            )}
        </UserLayout>
    )
}
