import 'bootstrap/dist/css/bootstrap.min.css';
import { MainRouter } from './router';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <CartProvider>
            <MainRouter />
            <ToastContainer/>
        </CartProvider>
    )
}

export default App
