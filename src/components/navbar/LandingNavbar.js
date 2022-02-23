import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function LandingNavbar() {

    const isLoggedOut = (
        <div class="d-flex justify-content-between">

            <div>
                <Link to="/login">
                    <button type="button" class="upload-btn me-2 p-2" >Login</button>
                </Link>
                <Link to="/signup">
                    <button type="button" class="upload-btn p-2" >Sign up</button>
                </Link>
            </div>
        </div>
    )
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light" >
                <div class="container-fluid">
                    <Link to="#" class="navbar-brand p-2" >Dev Works</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="justify-content-between collapse navbar-collapse ps-3 pe-3" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        </ul>
                        {isLoggedOut}
                    </div>

                </div>
            </nav>
        </>
    )
}