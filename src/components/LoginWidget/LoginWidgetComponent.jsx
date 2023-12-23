import { React } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../context/AuthContext'

const LoginWidgetComponent = () => {
    const {user} = useAuth()
    console.log(user)

    return (
        <div className='icon text-center'>    
            {user ? (
                <div>
                    <FontAwesomeIcon icon={faUser} style={{color: "#fff"}}/>
                    <p>{user.email}</p>
                </div>
            ) : 
            (
                <div>
                    <FontAwesomeIcon icon={faUser} style={{color: "#fff"}}/>
                    <p>Login</p>
                </div>
            )}            
        </div>
    )
}

export default LoginWidgetComponent