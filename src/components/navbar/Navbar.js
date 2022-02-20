import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import { connect } from "react-redux"
import { logoutUser } from "../../redux/auth/auth.actions"

const Navbar = ({ auth, logoutUser }) => {
    const isLoggedIn = (
        <>
            <li class="nav-item ">
                <Link class="nav-link " to="/posts">All Posts</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/feeds" >Feed</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/profiles">Developers</Link>
            </li>
        </>
    )

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
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#d1e8eb", width: "78.5%", margin: "0 auto" }}>
                <div class="container-fluid">
                    <Link to="#" class="navbar-brand p-2" >Dev Works</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="justify-content-between collapse navbar-collapse ps-3 pe-3" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            {
                                auth.isAuthenticated ? isLoggedIn : ""
                            }
                        </ul>

                        {!auth.loading && (auth.isAuthenticated ?
                            (<div class="d-flex justify-content-between">

                                <div class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-user"></i>
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li> <Link class="dropdown-item" to="/dashboard" >Dashboard</Link></li>
                                        <li> <a class="dropdown-item" href="/login" onClick={logoutUser} >Logout</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <Link to="/posts/create">
                                        <button type="button" class="upload-btn" >Upload</button>
                                    </Link>
                                </div>
                            </div>) :
                            isLoggedOut)}
                    </div>

                </div>
            </nav>
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Navbar)