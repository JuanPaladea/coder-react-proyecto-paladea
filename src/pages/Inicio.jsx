import ItemListContainerComponent from '../components/ItemListContainer/ItemListContainerComponent'
import useDolar from '../hooks/useDolar'

export const Inicio = () => {
    const {dolar} = useDolar()    
    return (
        <div>
            <ItemListContainerComponent greeting={`¡Bienvenido a Libelulis! Valor del dolar: ${dolar}`}/>
        </div>
    )
}
