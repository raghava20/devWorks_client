import React from 'react'
import "./LeftPane.css"
import { Link } from "react-router-dom"

export default function LeftPane({ children }) {
    return (
        <div className="leftpane-container" >
            <div className="text-container">
                <Link to="/" className="logo">
                    Show ur Work
                </Link>
                <p>{children}</p>
            </div>
        </div>
    )
}
