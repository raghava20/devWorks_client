import React from 'react'
import "./LeftPane.css"
import { Link } from "react-router-dom"

export default function AuthLeftPane({ children }) {
    return (
        <div className="leftpane-container" >
            <div className="text-container">
                <Link to="/dashboard" className="logo">
                    Dev Works
                </Link>
                <p className="leftpane-para">{children}</p>
            </div>
        </div>
    )
}
