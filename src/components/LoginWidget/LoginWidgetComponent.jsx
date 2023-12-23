import { React } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../context/AuthContext'

const LoginWidgetComponent = () => {
    const {user, toggleLoginVisibility, isLoginVisible} = useAuth()
    return (
        <div className='icon text-center'>    
            {user ? (
                <div onClick={toggleLoginVisibility}>
                    <FontAwesomeIcon icon={faUser} style={{color: "#fff"}}/>
                    <p>{user.email}</p>
                </div>
            ) : 
            (
                <div onClick={toggleLoginVisibility}>
                    <FontAwesomeIcon icon={faUser} style={{color: "#fff"}}/>
                    <p>Login</p>
                </div>
            )}            
        </div>
    )
}

export default LoginWidgetComponent