import React from 'react'
import Navbar from '../components/navbar/Navbar'

export default function DefaultLayout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}
