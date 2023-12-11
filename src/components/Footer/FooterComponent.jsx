import React from 'react'
import { Container } from 'react-bootstrap'
import './FooterComponent.scss'

const FooterComponent = () => {
    return (
        <div>
            <img src="https://raw.githubusercontent.com/JuanPaladea/ProyectoCoderHousePaladea-DesarrolloWeb/master/assets/img/waves-violeta.svg" alt="" className='waves rotate'/>
            <Container fluid className='footer'>
                <div className='row'>
                    <img
                        src="https://raw.githubusercontent.com/JuanPaladea/coder-react-proyecto-paladea/main/src/assets/img/logo.png"
                        className="d-inline-block logo-libelulis mx-auto my-3"
                        alt="logo Libelulis"
                        />
                </div>
                <div class="row p-3 text-center copyright">
                    <p>©2023 - Juan Paladea - Todos los derechos reservados</p>
                </div>
            </Container>
        </div>
    )
}

export default FooterComponent