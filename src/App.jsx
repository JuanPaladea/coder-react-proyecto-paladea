import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCartShopping, )
import { MainRouter } from './router';

function App() {
    return (
        <div>  
            <MainRouter />
        </div>
    )
}

export default App
