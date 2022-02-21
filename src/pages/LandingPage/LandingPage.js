import React from 'react'
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as LandingImage } from "../../images/landingpage.svg"
import DefaultLayout from "../../layouts/DefaultLayout"

const LandingPage = ({ isAuthenticated }) => {
    let navigate = useNavigate()
    if (isAuthenticated) {
        return navigate("/dashboard")
    }

    return (
        <DefaultLayout>
            <div>
                <LandingImage id="landing-image" />
            </div>
        </DefaultLayout>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(LandingPage)