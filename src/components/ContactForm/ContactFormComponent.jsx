import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "./ContactFormComponent.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'

const ContactFormComponent = () => {
    return (
        <div class="col-lg-6">
            <Form className="form p-4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><FontAwesomeIcon icon={faUser} /> Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                    Sólo usaremos tu e-mail para contestarte. 
                    </Form.Text>
                </Form.Group>
                <Form.Select className='mb-3' aria-label="Motivo de consulta">
                    <option>Motivo de contacto</option>
                    <option value="1">Reclamo</option>
                    <option value="2">Consulta</option>
                    <option value="3">Sugerencia</option>
                    <option value="4">Otro</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><FontAwesomeIcon icon={faMessage} /> Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={8} placeholder='Su texto aquí'/>
                </Form.Group>
                <Button className='mb-3 enviar-button' variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    )
}

export default ContactFormComponent