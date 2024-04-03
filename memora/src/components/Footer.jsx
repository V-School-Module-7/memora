import React from "react";
import "../styles/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
 faXTwitter,
faSquareFacebook,
faLinkedin,
faInstagram
} from '@fortawesome/free-brands-svg-icons'

import {
faEnvelope
} from '@fortawesome/free-regular-svg-icons'

export default function Footer(){
    return(
        <div className = "footer">
            <img src = "/FooterLogoScreenshot.png" className = "footerImage"></img>
            <div className = "socialIcons">
            {/* <FontAwesomeIcon icon={faEnvelope} className = "socialIcon"/> */}
            {/* <FontAwesomeIcon icon={faXTwitter} className = "socialIcon"/> */}
{/* <FontAwesomeIcon icon={faSquareFacebook} className = "socialIcon"/>
<FontAwesomeIcon icon={faLinkedin} className = "socialIcon"/>
<FontAwesomeIcon icon={faInstagram} className = "socialIcon"/> */}
            </div>
        <h4>info@memora.events</h4>
        </div>
    )
}