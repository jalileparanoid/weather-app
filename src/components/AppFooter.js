import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function AppFooter() {
    return (
        <div className="footer">
            <p className="copyright">&copy; Mohamed Azzab</p>
            <div className="social-links">
                <a href="https://www.facebook.com/mouu7amed">
                    <FontAwesomeIcon icon={faFacebook} className={"icon facebook"} />
                </a>
                <a href="https://wa.me/+201028483696">
                    <FontAwesomeIcon icon={faWhatsapp} className={"icon whatsapp"} />
                </a>
                <a href="https://www.linkedin.com/in/mouu7amed/">
                    <FontAwesomeIcon icon={faLinkedin} className={"icon linkedin"} />
                </a>
            </div>
        </div>
    )
}

export default AppFooter