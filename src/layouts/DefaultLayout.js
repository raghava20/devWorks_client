import React from 'react'
import LandingNavbar from '../components/navbar/LandingNavbar'

export default function DefaultLayout({ children }) {
    return (
        <>
            <LandingNavbar />
            <>
                {children}
            </>
        </>
    )
}
