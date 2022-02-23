import React from 'react'
import Navbar from '../components/navbar/Navbar'

export default function UserLayout({ children }) {
    return (
        <>
            <Navbar />
            <>
                {children}
            </>
        </>
    )
}
