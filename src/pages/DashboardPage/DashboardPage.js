import React, { useEffect } from 'react'
import "./DashboardPage.css"
import DefaultLayout from "../../layouts/DefaultLayout"
import ProfileHeader from "../../components/profile-header/ProfileHeader"
import ProfileTabs from "../../components/profile-tabs/ProfileTabs"
import { connect } from "react-redux"
import Spinner from "../../components/spinner/Spinner"
import { getCurrentUserProfile } from "../../redux/profile/profile.actions"

const DashboardPage = ({ getCurrentUserProfile, auth: { user }, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentUserProfile()
    }, [])



    return (
        <>
            <DefaultLayout>
                <div>
                    {(loading && profile === null) || !user ? (
                        <div>
                            <Spinner />
                        </div>
                    ) : (
                        <div>
                            <ProfileHeader profile={profile} isDashboard />
                            <ProfileTabs user={user._id} profile={profile} />
                        </div>
                    )
                    }
                </div>
            </DefaultLayout>
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentUserProfile })(DashboardPage)