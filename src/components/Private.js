import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Private() {
    const user = localStorage.getItem("user")
    return (
        <div>
            {user ? <Outlet /> : <Navigate to='/' />}
        </div>
    )
}
