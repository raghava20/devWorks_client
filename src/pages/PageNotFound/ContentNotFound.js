import React from 'react'
import { ReactComponent as NotFoundImage } from "../../images/404.svg";
import UserLayout from '../../layouts/UserLayout';
import "./PageNotFound.css"

export default function ContentNotFound() {
    return (
        <UserLayout>
            <div className="pagenotfound-header">
                <div>
                    <h2>Hey! We have a problem...</h2>
                </div>
                <NotFoundImage className="pagenotfound-image" />
            </div>
        </UserLayout>
    )
}
