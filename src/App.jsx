import 'bootstrap/dist/css/bootstrap.min.css';
import { MainRouter } from './router';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <MainRouter />
                <ToastContainer/>
            </CartProvider>
        </AuthProvider>
    )
}

export default App
