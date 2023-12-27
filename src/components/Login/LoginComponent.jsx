import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../context/AuthContext'
import './LoginComponent.scss'

const LoginComponent = () => {
    const { signInWithGoogle, user, signOutUser, createUser, loginUser, isLoginVisible } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleLogin = () => {
        signInWithGoogle()
    }

    const handleLogOut = () => {
        signOutUser()
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        createUser(email, password);
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        loginUser(email, password);
    }

    return isLoginVisible ? 
    (
        user ? 
        (
            <div>
                <button className='mx-2'>{user.email}</button>
                <button onClick={handleLogOut}>Logout</button>
            </div>
        ) : 
        (   
            <div className="col-lg-6">
                <Form className="form p-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button className='mb-3 enviar-button' variant="primary" onClick={handleRegistration}>
                        Registrarse
                    </Button>
                    <Button className='mx-2 mb-3 enviar-button' variant="primary" onClick={handleLogin}>
                        Login
                    </Button>
                    <Button onClick={handleGoogleLogin} className='mb-3 enviar-button' variant="primary">
                        Google Login
                    </Button>
                </Form>
            </div>
        )
    ) 
    :
    ''
}

export default LoginComponent