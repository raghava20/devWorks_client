import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as LandingImage } from "../../images/landingpage.svg"
import DefaultLayout from "../../layouts/DefaultLayout"
import "./LandingPage.css"

const LandingPage = ({ isAuthenticated }) => {
    let navigate = useNavigate()
    if (isAuthenticated) {
        return navigate("/dashboard")
    }

    return (
        <DefaultLayout>
            <div class="landingpage">
                <div className="landingpage-content">
                    <h2 className="landingpage-heading">Developer Works, it's like Dribbble</h2>
                    <p className="landingpage-para text-muted">A webApp for Developer and freelancers to show their creative dev works to the world. </p>
                    <Link to="/signup">
                        <button className="landingpage-btn">Get Started</button>
                    </Link>
                </div>
                <div>
                    <LandingImage id="landing-image" />
                </div>
            </div>
        </DefaultLayout>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(LandingPage)