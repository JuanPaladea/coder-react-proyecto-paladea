import React from 'react'
import './ContactMapComponent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faClock, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const ContactMapComponent = () => {
  return (
        <div className="col-lg-6">
            <div className="p-4 mapa">
                <iframe className="row py-2" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6568.704832748697!2d-58.42332700000001!3d-34.595249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca7bf99554cb%3A0xbc6367df64cb2f12!2sGorriti%204124%2C%20C1172ACP%20CABA!5e0!3m2!1sen!2sar!4v1686514229724!5m2!1sen!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="text-center texto-mapa row">
                    <div className="col-lg-3 col-6">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+54 911 34568562</p>
                    </div>
                    <div className="col-lg-3 col-6">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>Gorriti 4124</p>
                    </div>
                    <div className="col-lg-3 col-6">
                        <FontAwesomeIcon icon={faClock} />
                        <p>Lu-Vi 10:00hs 18:00hs</p>
                    </div>
                    <div className="col-lg-3 col-6">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>info@libelulis.com</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ContactMapComponent