import React from 'react'
import { useAuth } from '../../context/AuthContext'

const LoginComponent = () => {
    const { signInWithGoogle, user, signOutUser } = useAuth()

    const handleGoogleLogin = () => {
        signInWithGoogle()
    }

    const handleLogOut = () => {
        signOutUser()
    }

    return (
        <div>
            {user ? (
                <div>
                    <button className='mx-2'>{user.displayName}</button>
                    <button onClick={handleLogOut}>Logout</button>
                </div>
            ) : 
            (
                <button onClick={handleGoogleLogin}>Login</button>
            )}
        </div>
    )
}

export default LoginComponent