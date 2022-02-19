import React from 'react'
import { ReactComponent as NotFoundImage } from "../../images/404.svg";
import DefaultLayout from "../../layouts/DefaultLayout"
import "./PageNotFound.css"

export default function PageNotFound() {
    return (
        <DefaultLayout>
            <div className="pagenotfound-header">
                <div>
                    <h2>Hey! We have a problem...</h2>
                </div>
                <NotFoundImage className="pagenotfound-image" />
            </div>
        </DefaultLayout>
    )
}
