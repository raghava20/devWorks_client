import React, { useEffect } from 'react'
import UserLayout from '../../layouts/UserLayout'
import ProfileHeader from '../../components/profile-header/ProfileHeader'
import ProfileTabs from '../../components/profile-tab/ProfileTabs'
import Spinner from '../../components/spinner/Spinner'
import { getProfileById } from '../../redux/profile/profile.actions'
import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"

export default function ProfilePage() {
    const navigate = useNavigate()
    const { id: userId } = useParams()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { profile, loading } = useSelector(state => state.profile)

    useEffect(() => {
        dispatch(getProfileById(userId, navigate))

    }, [dispatch, navigate, userId])
    return (
        <UserLayout>
            {!profile || loading ? (
                <div className="dashboard-spinner">
                    <Spinner />
                </div>
            ) : (
                <section>
                    <ProfileHeader
                        profile={profile}
                        ownProfile={!loading && user._id === profile.user._id}
                        id={userId}
                    />
                    <ProfileTabs profile={profile} userId={userId} />
                </section>
            )}
        </UserLayout>
    )
}
