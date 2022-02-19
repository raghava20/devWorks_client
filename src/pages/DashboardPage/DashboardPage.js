import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./DashboardPage.css"

export default function DashboardPage() {
    const [changeProfile, setChangeProfile] = useState()

    useEffect(() => {

        const list = document.querySelectorAll(".dashboard-tabs a")

        function activeLink() {

            list.forEach(item => {
                item.classList.remove("active")
                this.classList.add("active")
            })
        }
        list.forEach(item => {
            item.addEventListener("click", activeLink)
        })
    }, [])



    return (
        <>
            <Navbar />
            <div>
                <div class="container-fluid dashboard-container-box">
                    <div class="dashboard-header">
                        <img className="dashboard-profile-image" src="https://www.gravatar.com/avatar/245cf079454dc9a3374a7c076de247cc?size=200&rating=PG&default=mm" alt="" />
                        <div class="d-flex flex-column">
                            <h2>Name</h2>
                            <h5>Developer</h5>
                            <button type="button" className="dashboard-profile-btn">
                                <i class="fa-solid fa-user-pen me-1"></i>
                                {changeProfile ? ("Add Profile") : ("Edit Profile")}</button>
                        </div>
                    </div>

                    <div className="dashboard-tabs  ">
                        <ul class="nav nav-tabs mt-2 flex-nowrap">
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><i class="fa-solid fa-image"></i> Posts</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-solid fa-users"></i> Followers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-solid fa-users"></i> Following</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-solid fa-user"></i> About</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <p>name</p>
                            <div>
                                <p><span><i class="fa-solid fa-heart"></i></span>count</p>
                                <p><span><i class="fa-solid fa-comment"></i></span>comment</p>
                            </div>

                        </div>

                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}
