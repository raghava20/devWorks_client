import React, { useEffect } from 'react'
import "./DashboardPage.css"
import UserLayout from "../../layouts/UserLayout"
import ProfileHeader from "../../components/profile-header/ProfileHeader"
import ProfileTabs from "../../components/profile-tab/ProfileTabs"
import { connect } from "react-redux"
import Spinner from "../../components/spinner/Spinner"
import { getCurrentUserProfile } from "../../redux/profile/profile.actions"

const DashboardPage = ({ getCurrentUserProfile, auth: { user }, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentUserProfile()
    }, [])



    return (
        <>
            <UserLayout>
                <div>
                    {(loading && profile === null) || !user ? (
                        <div className="dashboard-spinner">
                            <Spinner />
                        </div>
                    ) : (
                        <div>
                            <ProfileHeader profile={profile} isDashboard />
                            <ProfileTabs userId={user._id} profile={profile} />
                        </div>
                    )
                    }
                </div>
            </UserLayout>
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentUserProfile })(DashboardPage)