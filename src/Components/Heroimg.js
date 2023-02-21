import "./Heroimgstyle.css"

import React from 'react'
import IntroImg from '../Assets/intro-img.jpg'
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
                <img src={ IntroImg } alt="" className="intro-img" />
                <div className="content">
                    <p>HI, I'M A FREELANCER.</p>
                    <h1>React Developer.</h1>
                        <Link to="/project" className="btn">Projects</Link>
                        <Link to="/contact" className="btn-light">CONTACT</Link>
                </div>
        </div>
    </div>
  )
}

export default Heroimg
