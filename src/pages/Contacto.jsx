import React from 'react'
import ContactMapComponent from '../components/ContactMap/ContactMapComponent'
import ContactFormComponent from '../components/ContactForm/ContactFormComponent'
import ContactHeaderComponent from '../components/ContactHeader/ContactHeaderComponent'
import { Container } from 'react-bootstrap'
import WavesOrangeComponent from '../components/WavesOrange/WavesOrangeComponent'

export const Contacto = () => {
    return (
        <div>
            <ContactHeaderComponent />
            <WavesOrangeComponent />
            <Container fluid>
                <div className="row gy-3 py-4">
                    <ContactMapComponent />
                    <ContactFormComponent />
                </div>
            </Container>
        </div>
    )
}