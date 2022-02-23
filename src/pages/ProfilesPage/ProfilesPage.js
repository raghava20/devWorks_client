import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import UserLayout from '../../layouts/UserLayout'
import Spinner from '../../components/spinner/Spinner'
import ProfileCard from '../../components/profile-card/ProfileCard'
import Paginator from '../../components/paginator/Pagination'
import { getAllProfiles } from '../../redux/profile/profile.actions'
import usePaginator from '../../hook/usePaginator'

export default function ProfilesPage() {
    const dispatch = useDispatch();
    const { profiles, loading } = useSelector(state => state.profile)
    const { items, setCurrentPage, currentPage, perPage } = usePaginator(profiles)

    useEffect(() => {
        dispatch(getAllProfiles())
    }, [dispatch])
    return (
        <UserLayout>
            {loading ? (
                <div>
                    <Spinner />
                </div>
            ) : (
                <section>
                    <h2>All Developers profile</h2>
                    <div>
                        {items.map(profile => {
                            return <ProfileCard key={profile._id} profile={profile} />
                        })}
                    </div>
                    <Paginator onChange={setCurrentPage} current={currentPage} pageSize={perPage} total={profiles.length} />
                </section>
            )}
        </UserLayout>
    )
}
