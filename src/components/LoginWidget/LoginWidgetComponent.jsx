import { React } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

const LoginWidgetComponent = () => {

    return (
        <div className='icon text-center'>                
            <FontAwesomeIcon icon={faUser} style={{color: "#fff"}}/>
        </div>
    )
}

export default LoginWidgetComponent