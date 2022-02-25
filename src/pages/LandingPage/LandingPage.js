import React from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as LandingImage } from "../../images/landingpage.svg"
import DefaultLayout from "../../layouts/DefaultLayout"
import "./LandingPage.css"

const LandingPage = () => {
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

export default LandingPage