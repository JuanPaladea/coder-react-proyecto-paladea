import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCartShopping, )
import { MainRouter } from './router';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <CartProvider>
            <div>
                <MainRouter />
            </div>
        </CartProvider>
    )
}

export default App
