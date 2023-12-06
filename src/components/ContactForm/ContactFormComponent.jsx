import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import "./ContactFormComponent.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from 'react-toastify'

const ContactFormComponent = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [motivo, setMotivo] = useState('')
    const [mensaje, setMensaje] = useState('')
    const notify = (mensaje) => toast(mensaje)

    const handleSubmit = (e) => {
        e.preventDefault()

        const db = getFirestore();
        const contactsCollection = collection(db, 'contacts')

        addDoc(contactsCollection, {
            name: name,
            email: email,
            motivo: motivo,
            mensaje: mensaje,
        }).then(() => {
            notify('Mensaje enviado')
        }).catch((error) => {
            notify(error)
        }).finally(
            setName(''),
            setEmail(''),
            setMotivo(''),
            setMensaje(''),
        )
    }

    return (
        <div className="col-lg-6">
            <Form className="form p-4" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><FontAwesomeIcon icon={faUser} /> Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                    Sólo usaremos tu e-mail para contestarte. 
                    </Form.Text>
                </Form.Group>
                <Form.Select className='mb-3' aria-label="Motivo de consulta" onChange={(e) => setMotivo(e.target.value)}>
                    <option>Motivo de contacto</option>
                    <option value="reclamo">Reclamo</option>
                    <option value="consulta">Consulta</option>
                    <option value="sugerencia">Sugerencia</option>
                    <option value="otro">Otro</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><FontAwesomeIcon icon={faMessage} /> Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={8} placeholder='Su texto aquí' onChange={(e) => setMensaje(e.target.value)}/>
                </Form.Group>
                <Button className='mb-3 enviar-button' variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    )
}

export default ContactFormComponent