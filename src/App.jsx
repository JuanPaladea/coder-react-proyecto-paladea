import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCartShopping, )
import NavBarComponent from './components/NavBar/NavBarComponent'
import ItemListContainerComponent from './components/ItemListContainer/ItemListContainerComponent';

function App() {
    return (
        <>
            <NavBarComponent />
            <ItemListContainerComponent />
        </>
    )
}

export default App
