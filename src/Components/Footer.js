import "./footerstyle.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight: "2rem" }} />
                    <p>Arora Tower, Green Valley,</p>
                    <p>LPU, Phagwara.</p>
                    </div>
                    <div className="phone">
                    <FaPhone size={20} style={{color:"white", marginRight: "2rem" }} />
                    <h4>+91 8351942132</h4>
                    </div>
                    <div className="email">
                    <FaMailBulk size={20} style={{color:"white", marginRight: "2rem" }} />
                    <h4>supportinfo@gmail.com</h4>
                    
                </div>
            </div>
            <div className="right">
                <h4>About the Company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem totam voluptates dolore magni exercitationem minima quibusdam odit! </p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"white", marginRight: "2rem" }} />
                    <FaTwitter size={30} style={{color:"white", marginRight: "2rem" }} />
                    <FaLinkedin size={30} style={{color:"white", marginRight: "2rem" }} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default footer
